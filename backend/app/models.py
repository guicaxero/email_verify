from pydantic import BaseModel, RootModel
from typing import List

class ResponseItem(BaseModel):
    position: int
    is_productive: bool
    response_generate: str

class ResponseList(RootModel[List[ResponseItem]]):
    pass
