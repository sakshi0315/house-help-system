from fastapi import APIRouter, WebSocket, WebSocketDisconnect

router = APIRouter()

clients = []


@router.websocket("/ws/location")
async def websocket_location(websocket: WebSocket):

    await websocket.accept()

    clients.append(websocket)

    try:

        while True:

            data = await websocket.receive_text()

            for client in clients:

                await client.send_text(data)

    except WebSocketDisconnect:

        clients.remove(websocket)