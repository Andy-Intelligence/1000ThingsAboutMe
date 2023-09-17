"use client"
import ContentCard from "../cards/ContentCard"
import projectImage from "@/public/assets/sun.jpg"
import TitleCounter from "../cards/TitleCounter"
import React, { useEffect, useRef } from 'react';
import useSkewScroll from '@/components/gsap/utility/useSkewScroll';



const GallerySection = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  useEffect(()=>{
  if (!containerRef.current) return 
  useSkewScroll(containerRef);
  
  },[])
  return (
    <div ref= {containerRef} className="w-[90%] space-y-6">
      <div className="font-bold text-3xl font-custom">
        PROJECT GALLERY
      </div>
      <div>
        <TitleCounter/>
      </div>
      <div>
        <ContentCard
        background={projectImage.src}
        height={"h-[20rem]"}
        />
      </div>
    </div>
  )
}

export default GallerySection