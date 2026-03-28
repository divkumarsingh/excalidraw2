
import type { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import {JWT_SECRET} from "@repo/backend-common"

interface CustomRequest extends Request {
  userId?: string;
}

interface TokenPayload {
  userId: string;
}

export const UserMiddleware = (req: CustomRequest, res: Response, next: NextFunction) => {
    
    const header = req.headers["authorization"];
    
    const decoded = jwt.verify(header as string, JWT_SECRET);
    if(decoded){
        //@ts-ignore
        req.userId = decoded.userId;
        console.log(req.userId);
        next();
    }else {
        res.status(403).json({
            message: "Unathorized "
        })
    }
}
