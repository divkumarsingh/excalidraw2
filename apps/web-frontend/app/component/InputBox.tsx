

interface InputBoxProps{
    placeholder: string;
    type: string
}


export const InputBox = ({placeholder, type}: InputBoxProps) => {
    return (

            <input placeholder={placeholder} type={type} className="text-xl p-4  text-slate-200 mb-2 outline-black flex w-full h-full items-center"></input>

    )
}