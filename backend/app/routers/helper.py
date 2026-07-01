from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database import SessionLocal
from app.models.helper import Helper
from app.schemas.helper import HelperCreate

router = APIRouter(
    prefix="/helpers",
    tags=["Helpers"]
)


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


# ---------------------------------
# Add Helper
# ---------------------------------

@router.post("/add")
def add_helper(
    helper: HelperCreate,
    db: Session = Depends(get_db)
):

    new_helper = Helper(
        name=helper.name,
        skill=helper.skill,
        rating=helper.rating,
        cost=helper.cost,
        available=helper.available,
        latitude=helper.latitude,
        longitude=helper.longitude
    )

    db.add(new_helper)
    db.commit()
    db.refresh(new_helper)

    return {
        "message": "Helper Added Successfully",
        "helper": new_helper
    }


# ---------------------------------
# Get All Helpers
# ---------------------------------

@router.get("/")
def get_helpers(db: Session = Depends(get_db)):

    helpers = db.query(Helper).all()

    return helpers


# ---------------------------------
# Get Available Helpers
# ---------------------------------

@router.get("/available")
def available_helpers(db: Session = Depends(get_db)):

    helpers = (
        db.query(Helper)
        .filter(Helper.available == True)
        .all()
    )

    return helpers


# ---------------------------------
# Search By Skill
# ---------------------------------

@router.get("/skill/{skill}")
def helper_by_skill(
    skill: str,
    db: Session = Depends(get_db)
):

    helpers = (
        db.query(Helper)
        .filter(
            Helper.skill.ilike(skill)
        )
        .all()
    )

    return helpers

@router.get("/location/{helper_id}")
def get_helper_location(
    helper_id: int,
    db: Session = Depends(get_db)
):

    helper = (
        db.query(Helper)
        .filter(Helper.id == helper_id)
        .first()
    )

    if helper is None:
        return {
            "message": "Helper not found"
        }

    return {
        "helper_id": helper.id,
        "name": helper.name,
        "latitude": helper.latitude,
        "longitude": helper.longitude
    }

@router.put("/location/{helper_id}")
def update_helper_location(
    helper_id: int,
    latitude: float,
    longitude: float,
    db: Session = Depends(get_db)
):

    helper = (
        db.query(Helper)
        .filter(Helper.id == helper_id)
        .first()
    )

    if helper is None:
        return {
            "message": "Helper not found"
        }

    helper.latitude = latitude
    helper.longitude = longitude

    db.commit()

    return {
        "message": "Location Updated Successfully"
    }