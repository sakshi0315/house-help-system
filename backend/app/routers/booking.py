from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.dependencies import get_db
from app.models.booking import Booking
from app.schemas.booking import BookingCreate
import heapq

from app.models.helper import Helper
from app.schemas.booking import AutoBooking

router = APIRouter(
    prefix="/bookings",
    tags=["Bookings"]
)

@router.post("/")
def create_booking(
    booking: BookingCreate,
    db: Session = Depends(get_db)
):
    new_booking = Booking(
        user_id=booking.user_id,
        helper_id=booking.helper_id,
        service=booking.service,
        date=booking.date,
        time=booking.time,
        status="Pending"
    )

    db.add(new_booking)
    db.commit()
    db.refresh(new_booking)

    return {
        "message": "Booking Created Successfully",
        "booking_id": new_booking.id
    }

@router.get("/")
def get_bookings(
    db: Session = Depends(get_db)
):
    bookings = db.query(Booking).all()

    return bookings

@router.post("/auto-book")
def auto_book(
    booking: AutoBooking,
    db: Session = Depends(get_db)
):
    helpers = db.query(Helper).filter(
        Helper.skill == booking.service,
        Helper.available == True
    ).all()

    if not helpers:
        return {
            "message": "No Helper Available"
        }

    pq = []

    for helper in helpers:
        heapq.heappush(
            pq,
            (
                -helper.rating,
                helper.cost,
                helper.id
            )
        )

    best = heapq.heappop(pq)

    helper_id = best[2]

    selected_helper = db.query(Helper).filter(
        Helper.id == helper_id
    ).first()

    new_booking = Booking(
        user_id=booking.user_id,
        helper_id=helper_id,
        service=booking.service,
        date=booking.date,
        time=booking.time,
        status="Confirmed"
    )

    selected_helper.available = False

    db.add(new_booking)
    db.commit()
    db.refresh(new_booking)

    return {
        "message": "Booking Confirmed",
        "booking_id": new_booking.id,
        "helper_name": selected_helper.name,
        "rating": selected_helper.rating,
        "cost": selected_helper.cost
    }