from fastapi import FastAPI
app = Fastapi()
@app.get("/")
def read_root():
  return {"status": "Backend IA Jurídica SaaS rodando com sucesso!"}
