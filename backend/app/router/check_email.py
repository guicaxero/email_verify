from app.modules.email_processor import EmailService
from fastapi import APIRouter,  UploadFile, File, Form
from typing import List
from app.models import ResponseList

router = APIRouter(
    prefix='/api/check_email',
    responses={404: {'description': 'Not found'}},
)

@router.post('', response_model=ResponseList)
async def check_email(
    email: str | None = Form(None),
    files: List[UploadFile] | None = File(None)
):
    if email:
        res = EmailService.process_email([email])
    elif files:
        mined_emails = await EmailService.mine_emails(files)
        res = EmailService.process_email(mined_emails)
    return res
