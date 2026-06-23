from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.schemas.user import UserCreate, UserLogin
from app.dependencies import get_db
from app.models.user import User
from app.schemas.user import UserCreate

router = APIRouter(
    prefix="/auth",
    tags=["Authentication"]
)

@router.post("/register")
def register_user(
    user: UserCreate,
    db: Session = Depends(get_db)
):
    new_user = User(
        name=user.name,
        email=user.email,
        phone=user.phone,
        password=user.password
    )

    db.add(new_user)
    db.commit()
    db.refresh(new_user)

    return {
        "message": "User Registered Successfully",
        "user_id": new_user.id
    }

@router.post("/login")
def login_user(
    user: UserLogin,
    db: Session = Depends(get_db)
):
    db_user = db.query(User).filter(
        User.email == user.email
    ).first()

    if not db_user:
        return {
            "message": "User Not Found"
        }

    if db_user.password != user.password:
        return {
            "message": "Invalid Password"
        }

    return {
        "message": "Login Successful",
        "user_id": db_user.id,
        "name": db_user.name
    }