from sqlalchemy import Column, Integer, String, DateTime, ForeignKey, func
from database import Base

class User(Base):
    __tablename__ = "users"
    id = Column(Integer, primary_key=True, index=True)
    email = Column(String, unique=True, index=True)
    hashed_password = Column(String)
    tenant_id = Column(Integer)

class AuditLog(Base):
    __tablename__ = "audit_logs"
    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, index=True)
    tenant_id = Column(Integer)
    action = Column(String)
    resource = Column(String)
    resource_id = Column(String)
    timestamp = Column(DateTime, default=func.now())