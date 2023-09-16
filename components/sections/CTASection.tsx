"use client"
import { AiOutlinePlayCircle } from "react-icons/ai"
import ColoredButton from "../buttons/ColoredButton"
import ContentCard from "../cards/ContentCard"
import ctaImage from "@/public/assets/earth.jpg"
import React, { useEffect, useRef } from 'react';
import useSkewScroll from '@/components/gsap/utility/useSkewScroll';

const CTASection = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  useEffect(()=>{
  if (!containerRef.current) return 
  useSkewScroll(containerRef);
  
  },[])



  const handleClick = ()=>{
    alert("Button Clicked")
  }
  return (
    <div ref = {containerRef} className="w-[90%]">
      <ContentCard
      title="ONE EARTH OUR EARTH"
        background={ctaImage.src}
        button={<ColoredButton
          text="SAVE IT WITH US" icon={<AiOutlinePlayCircle size={27}/>} 
          onClick={handleClick}/>}
        />
    </div>
  )
}

export default CTASection