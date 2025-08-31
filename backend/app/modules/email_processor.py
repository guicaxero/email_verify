from app.modules.mail_assistant import MailAssistant
import pdfplumber
from io import BytesIO

class EmailService:

    @staticmethod
    def process_email(emails: list):
        emails_list = []
        for i, email in enumerate(emails):
            is_productive = MailAssistant.validate_email(email)
            res = MailAssistant.generate_response(email)
            processed_email = { 
                'position': i,
                'is_productive': is_productive, 
                'response_generate': res
            }
            emails_list.append(processed_email)
        return emails_list

    @staticmethod
    async def mine_emails(files: list):
        processed_files = []
        for file in files:
            contents = await file.read()
            if file.content_type == 'application/pdf':
                text = ""
                with pdfplumber.open(BytesIO(contents)) as pdf:
                    for page in pdf.pages:
                        text += page.extract_text()
                    contents = text
            processed_files.append(contents)
        return processed_files
