"use client"
import { AiOutlinePlayCircle } from "react-icons/ai"
import ColoredButton from "../buttons/ColoredButton"
import ContentCard from "../cards/ContentCard"
import orphan from "@/public/assets/orphan.jpeg"
import React, { useEffect, useRef } from 'react';
import useSkewScroll from '@/components/gsap/utility/useSkewScroll';

const ImpactSection = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  useEffect(()=>{
  if (!containerRef.current) return 
  useSkewScroll(containerRef);
  
  },[])
  const handleClick = ()=>{
    alert("Button CLicked")
  }
  return (
    <div ref = {containerRef} className="w-[90%]">
      <ContentCard
      tag={"IMPACT"} 
      title = {"OUR IMPACT GOES WELL BEYOND SOLAR"} 
      button={<ColoredButton
      text="WATCH" icon={<AiOutlinePlayCircle/>} 
      onClick={handleClick}/>}
      // img2={orphan.src}
      background={orphan.src}
      // bg={"#0a0e17"}
      />
    </div>
  )
}

export default ImpactSection