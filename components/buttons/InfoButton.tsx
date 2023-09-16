"use client"
import React, {ReactNode} from "react"


interface ButtonProps {
    text:string;
    icon:ReactNode; // ReactNode allows any valid JSX to be passed as an icon
    onClick:()=>void;
}

const InfoButton = ({text,icon,onClick}:ButtonProps) => {
  return (
    <button className="border-2 border-solid border-gray-500 flex items-center space-x-2 bg-red font-custom1 text-white px-2 py-2 rounded-[40px] hover:bg-blue-600" onClick = {onClick}>
        <span>{text}</span>
        {icon}
    </button>
  )
}

export default InfoButton


