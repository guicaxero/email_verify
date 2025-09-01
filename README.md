# 📧 Email Verify - Validação e Análise de Emails

![Made with React](https://img.shields.io/badge/Made%20with-React-blue?logo=react)
![TailwindCSS](https://img.shields.io/badge/Style-TailwindCSS-teal)
![FastAPI](https://img.shields.io/badge/Backend-FastAPI-lightgrey)
![Python](https://img.shields.io/badge/Language-Python-green)
![Vite](https://img.shields.io/badge/Bundler-Vite-brightgreen)
![Deploy Render](https://img.shields.io/badge/Deploy-Render-blue)


Aplicação web fullstack para **verificar, analisar e responder emails** de forma rápida e prática.  

O **frontend** é desenvolvido em **React** com **Vite**, proporcionando uma interface moderna e responsiva.  
O **backend** utiliza **Python + FastAPI**, fornecendo endpoints rápidos e confiáveis para validação de emails e integração com IA.

---

## ✨ Funcionalidades

- Inserção do email por texto
- Upload de múltiplos emails a partir de arquivos PDF ou TXT (limite de 5 por vez)
- Análise dos emails e geração de respostas automáticas
- Classificação do email como produtivo ou improdutivo
- Interface responsiva para desktop e mobile  

---

## 🎯 Objetivo

Facilitar a **validação, análise e respostas de emails**, tornando o processo rápido, confiável e com uma interface intuitiva, tanto para uso pessoal quanto corporativo.

---

## 🖼️ Exemplo de Uso

Digite um email ou faça upload de até 5 arquivos PDF/TXT           
Receba análise automática de cada email.

## 🎈 Link da Aplicação
https://email-verify-70m7.onrender.com/

## 🚀 Tecnologias

Frontend: React, Javascript, Vite, TailwindCSS              
Backend: Python, FastAPI, Uvicorn, Gemini-2.5-flash          
Deploy: Render            

## 🤖 Inteligência Artificial

O backend integra a IA Gemini-Flash 2.5, especializada em comunicação por email.

A IA foi treinada usando prompt engineering, permitindo que:
- Analise o conteúdo dos emails enviados ou inseridos
- Classifique os emails como produtivos ou improdutivos
- Gere respostas automáticas, claras, objetivas e corteses
- Mantenha um tom profissional e corporativo em todas as respostas

Essa integração garante respostas rápidas e precisas, diretamente via FastAPI, proporcionando uma experiência eficiente para o usuário.

---

## ⚙️ Como Rodar Localmente

### Backend

```bash
# Clone o repositório
git clone https://github.com/guicaxero/email_verify.git
cd email_verify/backend

# Crie e ative o ambiente virtual
python -m venv venv
# Windows
venv\Scripts\activate
# Linux / macOS
source venv/bin/activate

# Instale as dependências
pip install -r requirements.txt

# Rode o backend
uvicorn app.main:app --reload -- port 8000
```

### Frontend

```bash
# Abra outra aba do terminal e vá para o frontend
cd ../frontend

# Instale as dependências
npm install

# Rode o frontend
npm run dev
```
### Envs

#### Backend
```
API_KEY=Chave vinculada a conta que integra a GeminiAI
GEMINI_MODEL=Gemini-2.5-flash
```

#### Frontend
```
VITE_EMAIL_VERIFY_API=https://email-verify-api-efp7.onrender.com/api


