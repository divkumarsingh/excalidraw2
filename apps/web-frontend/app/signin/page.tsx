import { AuthPage } from "../component/Authpage";
import { Topbar } from "../component/Topbar";



export default function singin() {
    return <div className="flex w-full">
            <Topbar/>
            <div className="h-screen w-screen bg-gray-700 ">
                <AuthPage isSignin={true}></AuthPage>
            </div>
        </div>
}

