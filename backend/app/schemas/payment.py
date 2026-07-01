from pydantic import BaseModel


class PaymentCreate(BaseModel):

    booking_id: int

    amount: int

    payment_method: str


class PaymentResponse(BaseModel):

    id: int

    booking_id: int

    amount: int

    payment_method: str

    payment_status: str

    transaction_id: str

    class Config:
        from_attributes = True