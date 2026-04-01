"use client"

import { BACKEND_WS_URL } from "@/config";
import { initDraw } from "@/draw";
import { useEffect, useRef, useState } from "react";
import { Canvas } from "./Canvas";

export const  RoomCanvas = ({roomId}: {
    roomId: string
}) => {
    const [socket, setSocket] = useState<WebSocket | null>(null);

    useEffect(()=>{
        const ws = new WebSocket(`${BACKEND_WS_URL}?token=${}`)

        ws.onopen = () => {
            setSocket(ws);
            ws.send(JSON.stringify({
                type: "join_room",
                roomId
            }))
        }
    },[]);

    if(!socket){
        return <div>
            connecting to server
        </div>
    }



    return<div>
        <Canvas roomId={roomId} socket={socket}/>

    </div>
}