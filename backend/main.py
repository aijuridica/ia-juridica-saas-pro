from fastapi import FastAPI
app = FastAPI()
@app.get("/")
def read_root():
  return {"status": "Backend IA Jurídica SaaS rodando com sucesso!"}
