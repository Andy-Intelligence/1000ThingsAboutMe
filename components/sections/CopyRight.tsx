import {BsFacebook} from "react-icons/bs"
import {BsInstagram} from "react-icons/bs"
import {BsYoutube} from "react-icons/bs"
import {BsLinkedin} from "react-icons/bs"
import React, { useEffect, useRef } from 'react';
import useSkewScroll from '@/components/gsap/utility/useSkewScroll';

const CopyRight = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  useEffect(()=>{
  if (!containerRef.current) return 
  useSkewScroll(containerRef);
  
  },[])
  return (
    <div ref = {containerRef} className="flex flex-col space-y-4 text-sm font-bold items-center pb-6 w-[90%]">
        <div className="flex items-center justify-between space-x-5">
            <span>Terms of Use</span>
            <span>Privacy Policy</span>
        </div>
        <div>© 2023 eGreenConcept, Inc</div>
        <div className="flex items-center justify-between space-x-3 p-2">
        <BsFacebook size={23}/>
        <BsInstagram size={23}/>
        <BsYoutube size={23}/>
        <BsLinkedin size={23}/>
        </div>
    </div>
  )
}

export default CopyRight