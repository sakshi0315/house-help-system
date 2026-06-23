from fastapi import FastAPI
from app.routers.auth import router as auth_router
from app.database import engine, Base
from app.models import user, helper, booking
from app.routers.helper import router as helper_router
from app.routers.booking import router as booking_router
from fastapi.middleware.cors import CORSMiddleware
Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="Smart Helper API",
    version="1.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth_router)
app.include_router(helper_router)
app.include_router(booking_router)
@app.get("/")
def home():
    return {
        "message": "Smart Helper Backend Running"
    }