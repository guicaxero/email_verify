FROM node:20 AS frontend-build
WORKDIR /app/frontend
COPY frontend/package*.json ./
RUN npm install
COPY frontend/ ./
RUN npm run build

FROM python:3.11-slim
WORKDIR /app
COPY backend/ ./backend
COPY --from=frontend-build /app/frontend/dist ./frontend/dist

RUN pip install --no-cache-dir --upgrade pip
RUN pip install --no-cache-dir -r backend/requirements.txt



EXPOSE 8000

CMD ["uvicorn", "backend.app.main:app", "--host", "0.0.0.0", "--port", "8000"]
