from models import AuditLog
from database import SessionLocal

def registrar_auditoria(user, action, resource, resource_id):
    db = SessionLocal()
    audit = AuditLog(
        user_id=user.id,
        tenant_id=user.tenant_id,
        action=action,
        resource=resource,
        resource_id=str(resource_id)
    )
    db.add(audit)
    db.commit()
    db.close()
