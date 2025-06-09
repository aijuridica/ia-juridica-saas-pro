from fastapi import FastAPI
app = FastAPI()

@app.get("/")
def root(): return {"message": "Backend IA Jurídica SaaS PRO ativo"}
