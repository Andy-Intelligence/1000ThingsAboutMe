"use client"
import React, {ReactNode} from "react"


interface ButtonProps {
    text:string;
    icon:ReactNode; // ReactNode allows any valid JSX to be passed as an icon
    onClick:()=>void;
}

const ColoredButton = ({text,icon,onClick}:ButtonProps) => {
  return (
    <button className="flex border items-center space-x-2 bg-opacity-30 bg-black font-custom1 text-white font-bold px-4 py-3 rounded-[40px] hover:bg-blue-600" onClick = {onClick}>
        <span>{text}</span>
        {icon}
    </button>
  )
}

export default ColoredButton


