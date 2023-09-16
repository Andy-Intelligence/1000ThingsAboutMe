"use client"
import {useState} from 'react'

interface Prop {
    toggleComponents:()=>void;
}
const Menu = ({toggleComponents}:Prop) => {
    
  return (
    <div className={`fixed top-0 left-0 bottom-0 right-0 flex  flex-col items-center bg-black w-screen h-screen z-100 font-bold font-custom space-y-2 text-2xl`}>
       <div className="w-[90%] space-y-8 mt-8">
        <div className="flex flex-row items-center justify-between ">
            <div>eGreenConcept</div>
            <button className="border-b-4 border-green-500" onClick={toggleComponents}>CLOSE</button>
        </div>
        {/* {showOverlay && <Menu/> } */}

        <div className="flex flex-col space-y-4">
            <div>PRODUCT</div>
            <div>SOLAR EDUCATION</div>
            <div>MEDIA LIBRARY</div>
            <div>BLOG</div>
            <div>FAQ</div>
        </div>
        <div className="flex flex-col space-y-4">
            <div className="text-green-500">GET IN TOUCH</div>
            <div>CONTACT US</div>
            <div>I'M A FUTURE CUSTOMER</div>
        </div>
        </div>
    </div>
  )
}

export default Menu