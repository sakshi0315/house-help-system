from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.models.helper import Helper
from app.models.payment import Payment
from app.database import SessionLocal
from app.models.booking import Booking
from app.models.helper import Helper
from app.schemas.booking import BookingCreate

router = APIRouter(
    prefix="/booking",
    tags=["Booking"]
)


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


# ===========================
# Create Booking
# ===========================

@router.post("/create")
def create_booking(
    booking: BookingCreate,
    db: Session = Depends(get_db)
):

    helper = (
        db.query(Helper)
        .filter(
            Helper.id == booking.helper_id
        )
        .first()
    )

    if helper is None:
        return {
            "message": "Helper not found"
        }

    if helper.available is False:
        return {
            "message": "Helper is already busy"
        }

    new_booking = Booking(
        user_id=booking.user_id,
        helper_id=booking.helper_id,
        service=booking.service,
        date=booking.date,
        time=booking.time,
        address=booking.address,
        instructions=booking.instructions,
        status="Pending"
    )

    db.add(new_booking)

    helper.available = False

    db.commit()

    db.refresh(new_booking)

    return {
        "message": "Booking Created Successfully",
        "booking": new_booking
    }


# ===========================
# Booking History
# ===========================

@router.get("/user/{user_id}")
def get_user_bookings(
    user_id: int,
    db: Session = Depends(get_db)
):

    bookings = (
        db.query(Booking)
        .filter(Booking.user_id == user_id)
        .order_by(Booking.id.desc())
        .all()
    )

    return bookings

@router.get("/{booking_id}")
def get_booking(
    booking_id: int,
    db: Session = Depends(get_db)
):

    booking = (
        db.query(Booking)
        .filter(Booking.id == booking_id)
        .first()
    )

    if booking is None:
        return {
            "message": "Booking Not Found"
        }

    helper = (
        db.query(Helper)
        .filter(Helper.id == booking.helper_id)
        .first()
    )

    payment = (
        db.query(Payment)
        .filter(Payment.booking_id == booking.id)
        .first()
    )

    return {

        "id": booking.id,

        "service": booking.service,

        "date": booking.date,

        "time": booking.time,

        "address": booking.address,

        "status": booking.status,

        "helper": {

            "name": helper.name,

            "rating": helper.rating,

            "cost": helper.cost,

        } if helper else None,

        "payment": {

            "method": payment.payment_method,

            "status": payment.payment_status,

            "transaction_id": payment.transaction_id,

        } if payment else None,

    }