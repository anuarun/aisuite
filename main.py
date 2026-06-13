"""Entry point: uvicorn main:app --reload"""
from dotenv import load_dotenv
load_dotenv()

from empathy_chat.app import app  # noqa: F401, E402
