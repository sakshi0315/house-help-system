from pydantic import BaseModel

class HelperCreate(BaseModel):
    name: str
    skill: str
    rating: float
    cost: int
    available: bool = True