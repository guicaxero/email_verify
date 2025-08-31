import google.generativeai as genai


class Gen_ia ():
    genai.configure(api_key="AIzaSyAKVEgbiVgB3O1TG7yZLDd0KSJ_Cup3BQo")
    model = genai.GenerativeModel("gemini-2.5-flash")