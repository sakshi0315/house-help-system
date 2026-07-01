from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
import razorpay
import uuid
import os
from dotenv import load_dotenv

from app.database import SessionLocal
from app.models.payment import Payment
from app.models.booking import Booking
from app.schemas.payment import PaymentCreate

load_dotenv()

router = APIRouter(
    prefix="/payment",
    tags=["Payment"]
)

client = razorpay.Client(
    auth=(
        os.getenv("RAZORPAY_KEY_ID"),
        os.getenv("RAZORPAY_KEY_SECRET")
    )
)


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@router.post("/create")
def create_payment(
    payment: PaymentCreate,
    db: Session = Depends(get_db)
):

    order = client.order.create({
        "amount": payment.amount * 100,
        "currency": "INR",
        "payment_capture": 1
    })

    new_payment = Payment(
        booking_id=payment.booking_id,
        amount=payment.amount,
        payment_method=payment.payment_method,
        payment_status="Pending",
        transaction_id=order["id"]
    )

    db.add(new_payment)
    db.commit()
    db.refresh(new_payment)

    return {
        "key": os.getenv("RAZORPAY_KEY_ID"),
        "order": order
    }


@router.post("/verify")
def verify_payment(
    data: dict,
    db: Session = Depends(get_db)
):

    try:

        client.utility.verify_payment_signature({
            "razorpay_order_id": data["order_id"],
            "razorpay_payment_id": data["payment_id"],
            "razorpay_signature": data["signature"]
        })

    except Exception:

        raise HTTPException(
            status_code=400,
            detail="Payment Verification Failed"
        )

    payment = (
        db.query(Payment)
        .filter(
            Payment.transaction_id == data["order_id"]
        )
        .first()
    )

    if payment:

        payment.payment_status = "Success"

        payment.transaction_id = data["payment_id"]

        booking = (
            db.query(Booking)
            .filter(
                Booking.id == payment.booking_id
            )
            .first()
        )

        if booking:

            booking.status = "Confirmed"

        db.commit()

    return {
        "message": "Payment Verified Successfully"
    }


@router.get("/")
def get_all_payments(
    db: Session = Depends(get_db)
):

    return db.query(Payment).all()