from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.dependencies import get_db
from app.models.helper import Helper
from app.schemas.helper import HelperCreate
import heapq
router = APIRouter(
    prefix="/helpers",
    tags=["Helpers"]
)

@router.post("/")
def create_helper(
    helper: HelperCreate,
    db: Session = Depends(get_db)
):
    new_helper = Helper(
        name=helper.name,
        skill=helper.skill,
        rating=helper.rating,
        cost=helper.cost,
        available=helper.available
    )

    db.add(new_helper)
    db.commit()
    db.refresh(new_helper)

    return {
        "message": "Helper Added",
        "helper_id": new_helper.id
    }

@router.get("/")
def get_helpers(
    db: Session = Depends(get_db)
):
    helpers = db.query(Helper).all()

    return helpers

@router.get("/sort-by-cost")
def sort_helpers(
    db: Session = Depends(get_db)
):
    helpers = db.query(Helper).order_by(
        Helper.cost.desc()
    ).all()

    return helpers

@router.get("/best-helper/{skill}")
def get_best_helper(
    skill: str,
    db: Session = Depends(get_db)
):
    helpers = db.query(Helper).filter(
        Helper.skill == skill,
        Helper.available == True
    ).all()

    if not helpers:
        return {
            "message": "No Helper Available"
        }

    pq = []

    for helper in helpers:
        heapq.heappush(
            pq,
            (
                -helper.rating,
                helper.cost,
                helper.id,
                helper.name
            )
        )

    best = heapq.heappop(pq)

    return {
        "helper_id": best[2],
        "helper_name": best[3],
        "rating": -best[0],
        "cost": best[1]
    }