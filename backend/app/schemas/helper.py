from pydantic import BaseModel

class HelperCreate(BaseModel):

    name: str
    skill: str
    rating: float
    cost: int

    available: bool = True

    latitude: float
    longitude: float


class HelperResponse(BaseModel):

    id: int

    name: str
    skill: str

    rating: float
    cost: int

    available: bool

    latitude: float
    longitude: float

    class Config:
        from_attributes = True