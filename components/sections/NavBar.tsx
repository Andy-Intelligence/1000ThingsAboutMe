"use client"
import { useState } from "react"
import Menu from "../overlay/Menu"

interface Prop {
  toggleComponents:()=>void
}


const NavBar = ({toggleComponents}:Prop) => {
  const [showOverlay, setShowOverlay] = useState(false)


  const toggleOverlay = ()=>{
       setShowOverlay(!showOverlay)
  }
  return (
    <div className={`fixed shadow-md top-8 w-[90%] flex bg-white items-center justify-between rounded-[40px] p-4 z-10 text-black`}>
      <div className="font-bold text-2xl text-black">eCONCEPT</div>
      <div>
          <button className="" onClick={toggleComponents}>
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
      
     
    </div>
  )
}

export default NavBar