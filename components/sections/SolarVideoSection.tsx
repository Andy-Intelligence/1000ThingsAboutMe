"use client"
import ColoredButton from "../buttons/ColoredButton"
import ContentCard from "../cards/ContentCard"
import {AiOutlinePlayCircle} from "react-icons/ai"
import solar1 from "@/public/assets/solar1.webp"
import solar2 from "@/public/assets/solar2.webp"
import React, { useEffect, useRef } from 'react';
import useSkewScroll from '@/components/gsap/utility/useSkewScroll';

const SolarVideoSection = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  useEffect(()=>{
  if (!containerRef.current) return 
  useSkewScroll(containerRef);
  
  },[])
  const handleClick = () =>{
    alert("button clicked")
  }
  return (
    <div ref={containerRef} className="w-[90%] space-y-6">
      <ContentCard 
      tag={"VIDEO"} 
      title = {"THE BETTER MEDIA LIBRARY"} 
      button={<ColoredButton
      text="WATCH" icon={<AiOutlinePlayCircle/>} 
      onClick={handleClick}/>}
      img2={solar1.src}
      bg={"#0a0e17"}
      />
      <ContentCard 
      tag={"VIDEO"} 
      title = {"THE BETTER MEDIA LIBRARY"} 
      button={<ColoredButton
      text="WATCH" icon={<AiOutlinePlayCircle/>} 
      onClick={handleClick}/>}
      img2={solar2.src}
      bg={"#0a0e17"}
      />
    </div>
  )
}

export default SolarVideoSection