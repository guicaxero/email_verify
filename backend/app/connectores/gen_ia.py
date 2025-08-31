import google.generativeai as genai
from app.config import API_KEY, GEMINI_MODEL


class Gen_ia ():
    genai.configure(api_key=API_KEY)
    model = genai.GenerativeModel(GEMINI_MODEL)
