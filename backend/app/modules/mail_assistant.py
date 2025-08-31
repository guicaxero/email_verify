from app.connectores.gen_ia import Gen_ia
from app.utils import prompt_generation_email, prompt_validate_email

class MailAssistant:

    @staticmethod
    def validate_email(email):
        text = MailAssistant.send_to_ai(prompt_validate_email(email))
        is_productive = False if 'improdutivo' in text.lower() else True
        return is_productive
    
    @staticmethod
    def generate_response(email):
        text = MailAssistant.send_to_ai(prompt_generation_email(email))
        return text

    @staticmethod
    def send_to_ai(text):
        response = Gen_ia.model.generate_content(text)
        return response.text
