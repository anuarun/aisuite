"""
AI Mediator — watches a two-person conversation and intervenes to build empathy
and help each party see the other's perspective.

Intervention principles:
  - Nonviolent Communication (NVC): observations → feelings → needs → requests
  - Perspective-taking: gently mirror each person's likely inner experience back
  - Validation without taking sides
  - Curiosity over judgment
  - De-escalation through reframing blame into unmet needs
"""

import os
import json
import random
from typing import Optional
import anthropic

_api_key = os.environ.get("ANTHROPIC_API_KEY")
_mock_mode = not _api_key
client = anthropic.Anthropic(api_key=_api_key) if not _mock_mode else None

# ── Mock responses (used when no API key is set) ──────────────────────────────
# Each entry is a template; {a} and {b} are replaced with the two user names.

_MOCK_INTERVENTIONS = [
    "It sounds like both {a} and {b} care a lot about being heard here. {a}, I noticed some frustration — what's the feeling underneath that? And {b}, what do you think {a} most needs from you right now?",
    "Pausing here for a moment — {b}, when {a} said that, what did you hear? Sometimes what lands is different from what was meant. Is there anything you might have taken differently than {a} intended?",
    "There's real investment in this conversation from both of you, which matters. {a}, can you try saying what you need — not what {b} did wrong, but what *you* need? That can open a different door.",
    "I'm noticing this same point has come up a few times. That usually means something important isn't feeling acknowledged yet. {b}, what do you think {a} is trying to say underneath the words?",
    "Both of you seem to want resolution — that's actually something you have in common. {a}, what would it look like for this conversation to go well? What would you need to feel from {b}?",
    "It can be hard to stay curious when we feel misunderstood. {b}, before responding, could you reflect back what you heard {a} say — just to check you're on the same page?",
    "Strong feelings are coming up, which usually means something important is at stake for both of you. {a} and {b} — what do you each *need* most from the other person right now, in one sentence?",
]

_MOCK_WELCOMES = [
    "Hi {a} and {b}! I'm Bridge — I'll be listening quietly and occasionally offering a reflection or question to help you understand each other better. Speak honestly, and try to listen with curiosity. You've got this.",
    "Welcome, {a} and {b}! I'm Bridge, your conversation companion. I won't take sides — I'm here to help each of you feel heard and help you see through each other's eyes. Start whenever you're ready.",
]

_intervention_index: dict[str, int] = {}


def _mock_intervention(user_a: str, user_b: str, room_id: str = "") -> Optional[str]:
    key = room_id or f"{user_a}-{user_b}"
    idx = _intervention_index.get(key, random.randint(0, len(_MOCK_INTERVENTIONS) - 1))
    msg = _MOCK_INTERVENTIONS[idx % len(_MOCK_INTERVENTIONS)]
    _intervention_index[key] = idx + 1
    return msg.replace("{a}", user_a).replace("{b}", user_b)


def _mock_welcome(user_a: str, user_b: str) -> str:
    msg = random.choice(_MOCK_WELCOMES)
    return msg.replace("{a}", user_a).replace("{b}", user_b)

MEDIATOR_SYSTEM_PROMPT = """You are an empathetic AI conversation mediator named "Bridge". You observe a real-time chat between two people who may be in conflict, struggling to understand each other, or working through a difficult topic together.

Your role — grounded in Nonviolent Communication (NVC), motivational interviewing, and perspective-taking research — is to gently intervene at the right moments to help both people truly hear each other.

**When to intervene** (any of these signals):
- Blaming language ("you always…", "you never…", "you made me…")
- Escalating frustration, ultimatums, or shutdown
- The same point being repeated without progress
- One person's feelings or needs going unacknowledged
- An opportunity to deepen understanding even in a calm conversation

**When NOT to intervene**:
- The conversation is flowing well and both feel heard
- You already intervened in the last 2 exchanges

**How to intervene** (NVC framework):
1. Validate what each person expressed — distinguish their observation from their feeling
2. Name the likely unmet NEED behind what they said ("It sounds like you need…")
3. Invite perspective-taking: help each person see what the other might be experiencing
4. End with ONE open, curious question — never a lecture or verdict

**Voice and tone**:
- Warm, brief, specific to what was just said — never generic
- Address both people by name so each feels seen
- You are a guest in their conversation; speak at most 3–4 sentences
- Never take sides, assign blame, or evaluate who is right

Response format (strict JSON):
{
  "should_intervene": true/false,
  "message": "Your mediating message, or null if not intervening",
  "reason": "Internal note (never shown to users)"
}

Keep interventions under 110 words. Be precise about what was just said — no platitudes."""


def _format_history(history: list[dict]) -> str:
    lines = []
    for msg in history:
        role = msg["sender"]
        text = msg["text"]
        lines.append(f"{role}: {text}")
    return "\n".join(lines)


def should_check(message_count: int, last_check: int) -> bool:
    """Check every 3 messages minimum, always check if gap >= 5."""
    gap = message_count - last_check
    return gap >= 3


def get_mediation(
    history: list[dict],
    user_a_name: str,
    user_b_name: str,
    force: bool = False,
) -> Optional[str]:
    """
    Returns a mediating message string if Bridge decides to intervene, else None.

    history: list of {"sender": name, "text": message}
    force: bypass the "should_check" gate (e.g. on explicit /help request)
    """
    if not history:
        return None

    if _mock_mode:
        return _mock_intervention(user_a_name, user_b_name)

    formatted = _format_history(history[-20:])  # last 20 messages for context

    user_prompt = f"""Participants:
- Person A: {user_a_name}
- Person B: {user_b_name}

Conversation so far:
{formatted}

Based on the conversation above, decide whether to intervene. Return valid JSON only."""

    try:
        response = client.messages.create(
            model="claude-sonnet-4-6",
            max_tokens=400,
            system=MEDIATOR_SYSTEM_PROMPT,
            messages=[{"role": "user", "content": user_prompt}],
        )
        raw = response.content[0].text.strip()

        # Strip markdown code fences if present
        if raw.startswith("```"):
            raw = raw.split("```")[1]
            if raw.startswith("json"):
                raw = raw[4:]
            raw = raw.strip()

        data = json.loads(raw)
        if data.get("should_intervene") and data.get("message"):
            return data["message"]
        return None
    except Exception as e:
        print(f"[mediator] error: {e}")
        return None


def get_welcome(user_a_name: str, user_b_name: str) -> str:
    """Short welcome message when both users have joined."""
    if _mock_mode:
        return _mock_welcome(user_a_name, user_b_name)

    try:
        response = client.messages.create(
            model="claude-sonnet-4-6",
            max_tokens=150,
            system="You are Bridge, a warm AI conversation mediator. Keep responses under 60 words.",
            messages=[{
                "role": "user",
                "content": (
                    f"Both {user_a_name} and {user_b_name} have just joined a conversation. "
                    "Write a brief, warm welcome message. Explain that you're here to help them "
                    "understand each other better — you'll occasionally offer a perspective or question. "
                    "Encourage them to speak honestly and listen openly."
                )
            }],
        )
        return response.content[0].text.strip()
    except Exception as e:
        print(f"[mediator] welcome error: {e}")
        return (
            f"Welcome {user_a_name} and {user_b_name}! I'm Bridge, your AI conversation guide. "
            "I'll occasionally offer a perspective or question to help you understand each other better. "
            "Speak openly and listen with curiosity."
        )
