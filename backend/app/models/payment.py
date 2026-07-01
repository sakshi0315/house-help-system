from sqlalchemy import Column, Integer, String
from app.database import Base


class Payment(Base):
    __tablename__ = "payments"

    id = Column(Integer, primary_key=True, index=True)

    booking_id = Column(Integer)

    amount = Column(Integer)

    payment_method = Column(String)

    payment_status = Column(String)

    transaction_id = Column(String)