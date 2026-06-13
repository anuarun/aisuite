"""
talk-good — real-time two-person chat with an AI mediator.

Rooms:
  - Up to 2 human users per room
  - AI mediator (Bridge) observes and intervenes every ~3 messages or when triggered

WebSocket protocol (JSON messages):
  Client → Server:
    { "type": "join",    "name": "Alice" }
    { "type": "message", "text": "..."   }
    { "type": "ask_ai"                   }   # explicit request for AI insight

  Server → Client:
    { "type": "joined",   "name": "Alice", "room": "abc", "users": [...] }
    { "type": "message",  "sender": "Alice", "text": "...", "ts": 123 }
    { "type": "ai",       "sender": "Bridge", "text": "..." }
    { "type": "system",   "text": "..." }
    { "type": "error",    "text": "..." }
    { "type": "user_left","name": "Alice" }
"""

import asyncio
import json
import time
import uuid
from collections import defaultdict
from typing import Optional

from fastapi import FastAPI, WebSocket, WebSocketDisconnect
from fastapi.responses import HTMLResponse, FileResponse
from fastapi.staticfiles import StaticFiles

from empathy_chat.mediator import get_mediation, get_welcome, should_check

app = FastAPI(title="talk-good")
app.mount("/static", StaticFiles(directory="static"), name="static")


# ─── Room state ───────────────────────────────────────────────────────────────

class Room:
    def __init__(self, room_id: str):
        self.room_id = room_id
        self.connections: dict[str, WebSocket] = {}   # name → websocket
        self.history: list[dict] = []
        self.message_count = 0
        self.last_ai_check = 0
        self._lock = asyncio.Lock()

    @property
    def users(self) -> list[str]:
        return list(self.connections.keys())

    def is_full(self) -> bool:
        return len(self.connections) >= 2

    def add_message(self, sender: str, text: str) -> dict:
        msg = {"sender": sender, "text": text, "ts": time.time()}
        self.history.append(msg)
        self.message_count += 1
        return msg

    async def broadcast(self, payload: dict, exclude: Optional[str] = None):
        dead = []
        for name, ws in self.connections.items():
            if name == exclude:
                continue
            try:
                await ws.send_json(payload)
            except Exception:
                dead.append(name)
        for name in dead:
            self.connections.pop(name, None)

    async def broadcast_all(self, payload: dict):
        await self.broadcast(payload, exclude=None)

    async def send_to(self, name: str, payload: dict):
        ws = self.connections.get(name)
        if ws:
            try:
                await ws.send_json(payload)
            except Exception:
                pass

    async def maybe_mediate(self, force: bool = False):
        """Run AI mediation if conditions are met; send result to all users."""
        if len(self.connections) < 2:
            return
        if not force and not should_check(self.message_count, self.last_ai_check):
            return

        self.last_ai_check = self.message_count
        users = self.users
        user_a, user_b = users[0], users[1]

        loop = asyncio.get_event_loop()
        msg = await loop.run_in_executor(
            None, get_mediation, list(self.history), user_a, user_b, force
        )
        if msg:
            await self.broadcast_all({
                "type": "ai",
                "sender": "Bridge",
                "text": msg,
                "ts": time.time(),
            })
            self.history.append({"sender": "Bridge", "text": msg, "ts": time.time()})


rooms: dict[str, Room] = defaultdict(lambda: None)


def get_or_create_room(room_id: str) -> Room:
    if rooms[room_id] is None:
        rooms[room_id] = Room(room_id)
    return rooms[room_id]


# ─── WebSocket endpoint ────────────────────────────────────────────────────────

@app.websocket("/ws/{room_id}")
async def websocket_endpoint(websocket: WebSocket, room_id: str):
    await websocket.accept()
    room = get_or_create_room(room_id)
    user_name: Optional[str] = None

    try:
        # ── Wait for join message ──────────────────────────────────────────────
        raw = await websocket.receive_json()
        if raw.get("type") != "join":
            await websocket.send_json({"type": "error", "text": "First message must be {type:join, name:...}"})
            await websocket.close()
            return

        user_name = raw.get("name", "").strip()[:30] or f"User-{uuid.uuid4().hex[:4]}"

        async with room._lock:
            if user_name in room.connections:
                user_name = f"{user_name}-{uuid.uuid4().hex[:3]}"
            if room.is_full():
                await websocket.send_json({"type": "error", "text": "Room is full (max 2 people)."})
                await websocket.close()
                return
            room.connections[user_name] = websocket

        await websocket.send_json({
            "type": "joined",
            "name": user_name,
            "room": room_id,
            "users": room.users,
        })

        # Notify others
        await room.broadcast({
            "type": "system",
            "text": f"{user_name} joined the conversation.",
        }, exclude=user_name)

        # Send history to new user
        for msg in room.history:
            msg_type = "ai" if msg["sender"] == "Bridge" else "message"
            await websocket.send_json({**msg, "type": msg_type})

        # When both users are present, send AI welcome
        if len(room.connections) == 2:
            users = room.users
            loop = asyncio.get_event_loop()
            welcome = await loop.run_in_executor(
                None, get_welcome, users[0], users[1]
            )
            payload = {"type": "ai", "sender": "Bridge", "text": welcome, "ts": time.time()}
            await room.broadcast_all(payload)
            room.history.append({"sender": "Bridge", "text": welcome, "ts": time.time()})

        # ── Message loop ───────────────────────────────────────────────────────
        while True:
            raw = await websocket.receive_json()
            msg_type = raw.get("type")

            if msg_type == "message":
                text = raw.get("text", "").strip()
                if not text:
                    continue
                text = text[:1000]

                msg = room.add_message(user_name, text)
                await room.broadcast_all({
                    "type": "message",
                    "sender": user_name,
                    "text": text,
                    "ts": msg["ts"],
                })

                # Trigger AI mediation asynchronously
                asyncio.create_task(room.maybe_mediate())

            elif msg_type == "ask_ai":
                asyncio.create_task(room.maybe_mediate(force=True))

    except WebSocketDisconnect:
        pass
    except Exception as e:
        print(f"[ws] error for {user_name}: {e}")
    finally:
        if user_name and user_name in room.connections:
            del room.connections[user_name]
            await room.broadcast_all({
                "type": "user_left",
                "name": user_name,
                "text": f"{user_name} left the conversation.",
            })


# ─── Serve frontend ────────────────────────────────────────────────────────────

@app.get("/")
async def index():
    return FileResponse("static/index.html")
