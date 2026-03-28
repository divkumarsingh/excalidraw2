import { WebSocketServer } from "ws";
import { JWT_SECRET, WEBSOCKET_PORT } from "@repo/backend-common";
import jwt  from "jsonwebtoken";
import type { JwtPayload } from "jsonwebtoken";
import {prisma} from "@repo/db"

const wss = new WebSocketServer({port: WEBSOCKET_PORT});


function checkUser(token: string): string | null {
    const decoded = jwt.verify(token, JWT_SECRET);

    if (typeof decoded == "string"){
        return null;
    }

    if(!decoded || !decoded.userId){
        return null;
    }

    return decoded.userId;
}

wss.on("connection", function connection(ws, request) {
    const url = request.url; //ws://localhost:3000?token=1234 

    if(!url) {
        return;
    }
    //can check this at http level too when first connected.
    const queryParams = new URLSearchParams(url.split("?")[1]);
    const token = queryParams.get("token") || "";
    const userAuthenticated = checkUser(token);

    if(!userAuthenticated){
        ws.close()
    }

    ws.on("message", function message(data) {
        console.log("received: %s", data);
        ws.send("pong")
    });

    ws.send("something");
});