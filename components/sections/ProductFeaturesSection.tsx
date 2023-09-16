"use client"
import ColoredButton from "../buttons/ColoredButton"
import ContentCard from "../cards/ContentCard"
import {BsSun} from "react-icons/bs"
import house from "@/public/assets/house.webp"
import {motion} from "framer-motion"

import React, { useEffect, useRef } from 'react';
import useSkewScroll from '@/components/gsap/utility/useSkewScroll';


const ProductFeaturesSection = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  useEffect(()=>{
  if (!containerRef.current) return 
  useSkewScroll(containerRef);
  
  },[])


  const backgroundColor = "linear-gradient(180deg,#dde7f1 61.46%,#f1d4d6 80.21%,#d3c5d6);"
  const handleClick = ()=>{
    alert("Button Click")
  }
  return (
    
    <div ref = {containerRef} className="w-[90%] text-black">

      <ContentCard 
      bg={backgroundColor} 
      title="SAVINGS AETHETICS SPEED EQUIPMENTS PROCESS" 
      img2 = {house.src}
      button={<ColoredButton text="Product Features" 
      icon={<BsSun/>} 
      onClick={handleClick}/>}
      />

    </div>
  
  )
}

export default ProductFeaturesSection