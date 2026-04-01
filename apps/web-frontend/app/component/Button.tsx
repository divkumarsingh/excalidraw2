

import type { ReactElement, ReactNode } from "react";


type Variants = "primary" | "secondary"

interface ButtonProps {
    variant: Variants;
    size: "sm" | "md" | "lg";
    text: string;
    startIcon?: ReactElement;
    endIcon?: ReactElement;
    onClick?: () => void;
    fullWidth?: boolean;
    loading?: boolean;
    children?: ReactNode;
}

const defaultStyle = "rounded-md flex font-normal items-center justify-center my-2"

const variantStyles = {
    "primary" :  "bg-black text-slate-200 hover:text-white transition duration-100",
    "secondary": "bg-white text-black hover:text-slate-900 "
}

const sizeStlyes = {
    "sm": "py-1 px-2",
    "md": "py-2 px-4",
    "lg": "py-4 px-8"
}


export const Button = ({variant, text, size ,startIcon, onClick, fullWidth, endIcon, loading}: ButtonProps) => {

    return <button 
    onClick={onClick} 
    className={`${variantStyles[variant]} 
        ${defaultStyle} 
        ${sizeStlyes[size]} 
        ${fullWidth ? " w-full flex justify-center align-center" : "" } 
        ${loading ? "opacity-80" : ""}  
        `} disabled={loading}>
        {startIcon ? <div className="pr-2">{startIcon}</div> : null}
        {text}
        {endIcon}
        </button>}