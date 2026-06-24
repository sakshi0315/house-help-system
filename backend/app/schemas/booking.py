from pydantic import BaseModel

class BookingCreate(BaseModel):
    user_id: int
    helper_id: int
    service: str
    date: str
    time: str

class AutoBooking(BaseModel):
    user_id: int
    service: str
    date: str
    time: str