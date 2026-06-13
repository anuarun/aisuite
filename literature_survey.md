# Literature Survey: AI-Mediated Empathy and Perspective-Taking in Conversations

## Overview

This survey covers existing apps, academic research, and technical approaches for using AI to mediate conversations, build empathy, and help people understand each other's perspectives. It informed the design of **EmpathyBridge**.

---

## 1. Existing Consumer Apps

### Couples & Relationship Conflict Resolution

| App | Approach | Basis |
|-----|----------|-------|
| **CoupleSync** | AI-powered conflict resolution with conflict summaries | Gottman Institute + IFS |
| **Relish** | AI lessons + human coaching, behavioral analysis | Gottman research, licensed therapists |
| **Lasting** | 7-module structured program with audio-guided sessions | Gottman, EFT, attachment theory |
| **Between** | Purpose-built for long-distance couples, shared activities | — |
| **Flamme** | AI learns couple dynamics, custom advice | — |

### Mental Health & Emotional Support

| App | Architecture | Notes |
|-----|-------------|-------|
| **Woebot** | Rule-based NLP with safety validation gates | Non-generative; safe for clinical use |
| **Wysa** | Hybrid: scripted dialogues + LLM generation | Best-of-both-worlds approach |
| **Replika** | Fully generative (fine-tuned GPT-2 1.5B) | Personal companion model |

### Internal Family Systems (IFS) Apps

- **Therapy Ally** — IFS practice in everyday use
- **Seekr** — IFS + CBT + Narrative Psychology with mind map
- **Sentur** — Journaling and guided "parts" check-ins

---

## 2. Academic Research

### AI-Mediated Communication (AI-MC) Framework

**Definition** (Hancock et al., 2020): "Mediated communication between people in which a computational agent operates on behalf of a communicator by modifying, augmenting, or generating messages to accomplish communication or interpersonal goals."

Key dimensions studied:
- Psychological and relational implications
- Policy and ethical implications
- Effects on social dynamics and identity
- Source: [Journal of Computer-Mediated Communication](https://academic.oup.com/jcmc/article/25/1/89/5714020)

### Empathetic Dialogue Systems

Three pillars for effective empathetic dialogue (survey, ScienceDirect):
1. **Emotion-awareness**: Detecting and responding to emotional states
2. **Personality-awareness**: Individual communication style understanding
3. **Knowledge-accessibility**: Relevant contextual information

**Historical arc**:
- ELIZA (1960s): pattern-matching empathy simulation
- EmpatheticDialogues dataset (2019): 25,000 conversations grounded in emotional situations
- SoulChat (2023): LLM fine-tuned for multi-turn psychological counseling
- TOOL-ED (2024): Tool-calling to invoke commonsense knowledge at generation time
- Kardia-R1 (2024): Rubric-as-judge reinforcement learning for empathetic reasoning

### Conflict Resolution & De-escalation

- **ConflictLens** (ACM UIST 2024): LLM generates dialogue scripts for romantic relationship conflict training
- **DRAssist** (2025): Multi-agent debate and roundtable approaches for dispute resolution; chain-of-thought prompting outperforms direct prompting
- **From Moderation to Mediation** (arXiv 2025): LLMs can track conflicts and de-escalate through careful prompting
- **AI as Group Mediator** (Tandfonline 2025): Conceptual framework for triadic chat-based mediation — continuous availability, memory for relational dynamics, balanced participation support

### Perspective-Taking Research

Study (NCBI 2025): Participants using perspective-taking:
- Disclosed significantly greater quantity and depth of information
- Increased high-disclosure frequencies (thoughts, not just events)
- Particularly effective for mental wellbeing AI chatbots
- Source: [Alter egos alter engagement](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC12457298/)

---

## 3. Technical Approaches

### Prompting Strategies

| Strategy | Description | Effectiveness |
|----------|-------------|---------------|
| Chain-of-Thought (CoT) | LLM reasons through argument evaluation before responding | Outperforms direct prompting |
| Multi-Agent Debate | Multiple agents with distinct roles deliberate to agreement | More accurate than single agent |
| Constitution-Based | Co-designed rules with domain experts; imperative tone | Consistent, appropriate outputs |
| Perspective-Taking Prompt | User imagines other's POV, responds from it | High disclosure, deeper connection |

### Dialogue Architecture

- **Memory layers**: History (recent) + shortTermHistory (agent reasoning) + longTermHistory (key facts)
- **Turn-taking**: Self-selection or current-speaker-selects-next; reflects personality/intent
- **Context window management**: Last 20 messages for mediation context; key facts persisted separately

### NVC (Nonviolent Communication) in AI

Marshall Rosenberg's NVC framework has been implemented in several AI tools:
- **NVC.ai**: Full NVC process — observations → feelings → needs → requests
- **NVC Coach**: Conversational AI driving "communication do-overs"
- **Non-Violent Communicator (GPT)**: Guides empathetic reframing

### Real-Time vs. Turn-Based

| Modality | Latency Target | Notes |
|----------|---------------|-------|
| Voice | < 1 second | Sub-second feels fluid; text easier initially |
| Text | Asynchronous | Turn-based text is feasible; more context per turn |

Key finding (Microsoft + Salesforce): 39% average performance drop in multi-turn vs. single-turn conversations — context management is critical.

---

## 4. Evaluation Metrics

### Empathy Evaluation
- No universally accepted metric exists
- Three-dimensional human assessment: Empathy + Relevance + Fluency
- Psychology-based metrics: emotional entropy, linguistic matching, agreeableness
- BLEU/ROUGE show weak/no correlation with empathy quality
- GPT-4o shows significantly higher correlation with human evaluations

### Benchmarks
- **EmpatheticDialogues**: 25,000 grounded emotional conversations
- **HEART**: Unified benchmark for humans and LLMs in emotional support
- **SafetyKit**: Framework for measuring safety in mental health dialogue systems
- **SD-Eval**: 7,303 utterances across emotion, accent, age, background

---

## 5. Key Design Patterns

### What Works
1. **Hybrid Human-AI Mediation**: AI augments, humans handle emotional complexity
2. **Composable Architecture**: Rule-based bootstrap + data-driven improvement (Wysa model)
3. **Constitution-Based Prompting**: Define behavior rules upfront with domain experts
4. **Strategic Silence and Pacing**: Not every exchange needs AI input; timing builds trust
5. **NVC Framework**: Observations → Feelings → Needs → Requests is well-validated

### Fundamental Limitations
1. **Emotional Understanding Gap**: AI recognizes patterns but has no subjective experience; nuance in tone/body language missed
2. **Empathy Illusion**: LLMs score well on emotional intelligence tests but perform poorly on interpretation and exploration dimensions
3. **Oversimplification**: Quantifying empathy may result in formulaic responses
4. **Neurodiversity Gaps**: Standard conflict detection missed 53% of escalation points in autism spectrum individuals
5. **Multi-Turn Degradation**: 39% performance drop vs. single-turn
6. **Hallucination Risk**: Domain expert oversight required; constitution-based constraints necessary

### Ethical Considerations
- Informed consent: users should know they're interacting with AI
- Transparency about data usage and privacy
- Risk of over-reliance for important decisions
- AI as augmentation, not replacement for human connection
- Equity concerns: cost barriers, neurodivergent exclusion by design

---

## 6. Implications for EmpathyBridge Design

Based on this survey, EmpathyBridge incorporates:

1. **NVC framework** in the AI mediator's system prompt (observations → feelings → needs → requests)
2. **Perspective-taking prompts** as a core intervention strategy
3. **Strategic timing**: Bridge intervenes every ~3 human messages, not every exchange
4. **On-demand mediation**: Users can explicitly request Bridge's perspective ("Bridge" button)
5. **Constitution-based system prompt** with explicit behavioral rules and tone guidelines
6. **Safety framing**: Bridge never takes sides, diagnoses, or prescribes — it reflects and asks questions
7. **Context window management**: Last 20 messages sent for mediation context
8. **Warm but brief**: Interventions capped at 110 words; end with one open question

### Gaps EmpathyBridge Acknowledges
- Text-only (no voice/tone detection)
- No neurodiversity adaptation
- No longitudinal memory across sessions
- No safety gates for crisis content (clinical deployment would require this)

---

## Sources

### Academic
- [AI-Mediated Communication: Definition, Research Agenda, and Ethical Considerations](https://academic.oup.com/jcmc/article/25/1/89/5714020) — Hancock et al., JCMC 2020
- [AI-mediated social support](https://academic.oup.com/jcmc/article/30/4/zmaf013/8200809) — JCMC 2025
- [From Moderation to Mediation: Can LLMs Serve as Mediators in Online Flame Wars?](https://arxiv.org/pdf/2512.03005) — arXiv 2025
- [Evaluating Behavioral Alignment in Conflict Dialogue](https://arxiv.org/pdf/2509.16394) — arXiv 2025
- [ConflictLens: LLM-Based Conflict Resolution Training](https://dl.acm.org/doi/10.1145/3746058.3758422) — ACM UIST 2024
- [Survey on empathetic dialogue systems](https://www.sciencedirect.com/science/article/abs/pii/S1566253520303092) — ScienceDirect
- [TOOL-ED: Enhancing Empathetic Response Generation with Tool Calling](https://arxiv.org/html/2412.03096) — arXiv 2024
- [Kardia-R1: Rubric-as-Judge RL for Empathy](https://arxiv.org/pdf/2512.01282) — arXiv 2024
- [AI as a Group Mediator: Conceptual Framework for Triadic Chat-Based Therapy](https://www.tandfonline.com/doi/full/10.1080/2692398X.2025.2587315) — Tandfonline 2025
- [Alter egos alter engagement: perspective-taking in AI chatbots](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC12457298/) — NCBI 2025
- [Dispute Resolution Assistance using Large Language Models (DRAssist)](https://arxiv.org/pdf/2509.01962) — arXiv 2025
- [Hear You in Silence: Designing for Active Listening with Context-Aware Pacing](https://arxiv.org/pdf/2602.06134) — arXiv 2026
- [HEART: A Unified Benchmark for Emotional Support Dialogue](https://arxiv.org/pdf/2601.19922) — arXiv 2026
- [Human-Centered Metrics for Dialog System Evaluation](https://www.researchgate.net/publication/371009119_Human-Centered_Metrics_for_Dialog_System_Evaluation)
- [A Benchmark for Understanding Dialogue Safety in Mental Health Support](https://arxiv.org/pdf/2307.16457)

### Practitioner & Industry
- [AI Empathy in Mediation](https://mediate.com/ai-empathy-in-mediation-when-algorithms-show-compassion/) — Mediate.com
- [The Future of Conflict Resolution with AI](https://themediator.ai/future-of-conflict-resolution-with-ai/)
- [AI Driven Mediation: Best Practices & Future](https://pollackpeacebuilding.com/blog/ai-driven-mediation/)
- [Will AI Replace Mediators?](https://mediate.com/will-ai-replace-mediators-and-neutrals/)
- [Using LLMs To Improve Workplace Social Skills](https://hai.stanford.edu/news/using-llms-to-improve-workplace-social-skills) — Stanford HAI
- [NVC.ai](https://nvc.ai/en/)
- [5 Best AI Apps for Couples](https://www.unite.ai/best-ai-apps-for-couples/) — Unite.AI
- [The Rise of AI for Couples Therapy](https://www.talkspace.com/blog/ai-couples-therapy/) — Talkspace
- [IEEE Spectrum — Woebot](https://spectrum.ieee.org/woebot)
- [Journal of Medical Internet Research — AI-Driven Chatbots for Mental Health](https://www.jmir.org/2025/1/e67114)
- [AI as a Group Mediator](https://www.tandfonline.com/doi/full/10.1080/2692398X.2025.2587315)
