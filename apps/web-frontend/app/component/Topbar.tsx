import { Button } from "./Button"

export const Topbar = () => {
    return <div className="flex container bg-slate-700 items-center justify-between p-4 w-full">
        <div>
            <a href = "/" className="text-slate-100 text-2xl font-bold">Infinite Canvas</a>
        </div>
        <div className="flex gap-2">
            <Button variant="primary" size="md" text="Login "></Button>
            <Button variant="secondary" size="md" text="Signup"></Button>
        </div>

    </div>
}