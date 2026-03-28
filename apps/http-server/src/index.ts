import express from "express";
import {CreateRoomSchema, CreateUserSchema, SigninSchema} from "@repo/common"
import { UserMiddleware } from "./middleware";
import jwt from "jsonwebtoken";
import {prisma} from "@repo/db"
import { BACKEND_PORT, JWT_SECRET } from "@repo/backend-common";


const app = express();
app.use(express.json());

app.post("/api/v1/signup", async(req, res) => {

    const parsedData = CreateUserSchema.safeParse(req.body);
    console.log(parsedData);
    console.log("DATABASE_URL is:", process.env.DATABASE_URL ? "Defined" : "UNDEFINED");
    if(!parsedData.success){
        res.json({
            message: "Incorrect inputs"
        });
        return;
    }
    
    try{
        const user = await prisma.user.create({
        data: {
            email: parsedData.data.username,
            //hashing password using bcrypt lib
            password: parsedData.data.password,
            name: parsedData.data.name,
        }
    })

    res.status(200).json({
        userId: user.id
    })
    }catch(e){
        res.status(411).json({
            message: "user already exists."
        })
    }
    
});

app.post("/api/v1/signin", async(req, res) => {
    const parsedData = SigninSchema.safeParse(req.body);
    if(!parsedData.success){
        return res.json({
            message: "Incorrect inputs"
        })
    }

    //comparing hashed password here.
    const user = await prisma.user.findFirst({
        where: {
            email: parsedData.data.username,
            password: parsedData.data.password 
        }
    });


    if(!user){
        res.status(401).json({
            message: "users not exists"
        });
        return;
    }
    console.log(JWT_SECRET);
    const token = jwt.sign({
        userId: user.id
    }, JWT_SECRET);

    res.json({
        token
    })

});

app.post("/api/v1/room", UserMiddleware, async(req, res) => {
    const parsedData = CreateRoomSchema.safeParse(req.body);
    if(!parsedData.success){
        return res.json({
            message: "Incorrect inputs"
        })
    };
    
    //@ts-ignore fix in global types
    const userId = req.userId;

    try{
        const roomId = await prisma.room.create({
        data: {
            slug: parsedData.data.name,
            adminId: userId

        }
    });
    
    res.json({
        roomId
    })
    } catch(e){
        res.status(204).json({
            message: "room already exists with this name, try another name. "
        })
    }

});

app.get("/api/v1/chats/:roomId", async(req, res) => {
    const roomId = Number(req.params.roomId);
    const messages  = await prisma.chat.findMany({
        where: {
            roomId: roomId
        },
        orderBy: {
            id: "desc"
        },
        take: 50
    })
    res.json(messages)
});

app.get("/api/v1/room/:slug", async(req, res) => {
    const slug = req.params.slug;
    const room = await prisma.room.findFirst({
        where:{
            slug
        }
    });
    res.json({
        room
    })
})


app.listen(`${BACKEND_PORT}`, () => {
    console.log("connected to port " + `${BACKEND_PORT}`)
});