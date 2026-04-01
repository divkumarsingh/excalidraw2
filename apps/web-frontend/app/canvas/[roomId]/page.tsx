

import { Button } from "@/app/component/Button";
import { RoomCanvas } from "@/app/component/RoomCanvas";
import { initDraw } from "@/draw";
import { parseAppSegmentConfig } from "next/dist/build/segment-config/app/app-segment-config";
import { useEffect, useRef } from "react";

export default async function CanvasPage ({params}: {
    params: {
        roomId: string;
    }
}) {
    const roomId = params.roomId;

    return <RoomCanvas roomId= {roomId}/>

}


