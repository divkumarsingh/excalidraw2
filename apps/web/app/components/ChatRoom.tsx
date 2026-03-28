import axios from "axios"
import { BACKEND_URL } from "../config"

const getChats = async (roomId: string) => {
    const response = await axios.get(`${BACKEND_URL}/api/v1/chats/${roomId}`);
    return response.data.message;
}



export const ChatRoom = async ({id}: {
    id: string
}) => {
    const messages = await getChats(id);


}