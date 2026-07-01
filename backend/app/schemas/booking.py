from pydantic import BaseModel


class BookingCreate(BaseModel):
    user_id: int
    helper_id: int
    service: str
    date: str
    time: str
    address: str
    instructions: str