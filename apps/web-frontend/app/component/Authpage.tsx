"use client"

import Link from "next/link"
import { Button } from "./Button"
import { InputBox } from "./InputBox"
import { Topbar } from "./Topbar"




export const AuthPage = ({isSignin}: {
    isSignin: boolean
}) =>  {
    return<div>
        <Topbar/>
        <div className="w-screen h-screen flex justify-center items-center bg-gray-900">
        <div className=" container p-6 bg-slate-800 rounded-2xl text-2xl flex flex-col">
            <InputBox type="text" placeholder="Email"></InputBox>
            <InputBox type="text" placeholder="password"></InputBox>
            
            <Button variant= "primary" size="md" text={isSignin ? "Sign in" : "Sign up"}></Button>
         </div>

    </div>
    </div>
}