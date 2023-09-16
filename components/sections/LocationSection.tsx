"use client"
import Image from 'next/image'
import Map from "@/public/Nigeria Map Chart.svg"
import MapImg from "@/public/assets/Nigeria Map Chart.png"
import TitleCounter from '../cards/TitleCounter'
import visited from "@/public/assets/visited1.webp"
import React, { useEffect, useRef } from 'react';
import useSkewScroll from '@/components/gsap/utility/useSkewScroll';


const LocationSection = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  useEffect(()=>{
  if (!containerRef.current) return 
  useSkewScroll(containerRef);
  
  },[])
  return (
    <div ref = {containerRef} className='flex flex-col items-center space-y-7 w-[90%]'>
      <div className='font-custom text-3xl font-bold'>MARKETS WE PROUDLY SERVE</div>

      <div className='flex items-center '> 
        <Image src={MapImg.src} height={300} width={320} alt='Map'/>
      </div>

      <div>
      <TitleCounter 
      stateName='California' 
      stateDescriptionText= {"thth the  theh teh thehtbeb thebh tbhe tbeh tbeh tbhe btehbte dhtbeht the bhtd tbhdbtth dbth dbthdbh tbdhbd hbtd"}
      img = {visited.src} />
      </div>
      

    </div>
  )
}

export default LocationSection
