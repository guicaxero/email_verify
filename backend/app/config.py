import os 
from dotenv import load_dotenv

load_dotenv()

API_KEY = os.getenv('API_KEY')
GEMINI_MODEL = os.getenv('GEMINI_MODEL')
