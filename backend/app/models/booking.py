from sqlalchemy import Column, Integer, String
from app.database import Base

class Booking(Base):
    __tablename__ = "bookings"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer)
    helper_id = Column(Integer)
    service = Column(String)
    date = Column(String)
    time = Column(String)
    address = Column(String)
    instructions = Column(String)

    status = Column(String)