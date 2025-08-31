from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from app.router.check_email import router as check_email
import os

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"]
)

app.mount("/", StaticFiles(directory="../frontend/dist", html=True), name="frontend")
app.include_router(check_email, prefix="/api")

@app.get('/api')
def health_check():
    print(os.getenv('TEST'))
    return 'status - ok'
