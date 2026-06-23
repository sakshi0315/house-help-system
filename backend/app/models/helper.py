from sqlalchemy import Column, Integer, String, Float, Boolean
from app.database import Base

class Helper(Base):
    __tablename__ = "helpers"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String)
    skill = Column(String)
    rating = Column(Float)
    cost = Column(Integer)
    available = Column(Boolean, default=True)