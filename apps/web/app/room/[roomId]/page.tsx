import { ChatRoom } from "../../components/ChatRoom";
import { BACKEND_URL } from "../../config"
import axios from "axios";

const getRoomId = async (slug: String) => {
    const response = await axios.get(`${BACKEND_URL}/api/v1/room/${slug}`);
    return  response.data.id;
}

export const chatRooms = async({
 params   
}: {
    params: {
        slug: string
    }
}) => {
    const slug = await params.slug;
    const roomId =  await getRoomId(slug);

    return <ChatRoom id={roomId}></ChatRoom>

}
