import os

class Settings:
    SQLALCHEMY_DATABASE_URL = os.getenv("DATABASE_URL")
    JWT_SECRET_KEY = os.getenv("JWT_SECRET_KEY")
    OPENAI_API_KEY = os.getenv(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")

settings = Settings()
