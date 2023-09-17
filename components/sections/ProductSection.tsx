"use client"
import LeadTags from "../tags/LeadTags"
import ContentCard from "../cards/ContentCard"
import Sun from "@/public/assets/sun.jpg"
import InfoButton from "../buttons/InfoButton"
import { IoMdAddCircleOutline } from "react-icons/io"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import React, { useEffect, useRef } from 'react';
import useSkewScroll from '@/components/gsap/utility/useSkewScroll';

gsap.registerPlugin(ScrollTrigger)

const ProductSection = () => {

  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(()=>{
if (!containerRef.current) return 
  useSkewScroll(containerRef);
  
  },[])

 



  const handleClick = ()=>{
    alert("Button Clicked")
}

  return (
    <div ref = {containerRef} className=" w-[90%] ">
      

      <div className="border flex flex-col items-center border-solid font-bold border-slate-800 rounded-[30px]">
        <div className="w-fit mt-4" >
          <LeadTags text="eGreenConcepts x Give Power"/>
        </div>

        <ContentCard title="WE POWERED A HOUSE IN LAGOS!"
        img1={Sun.src} 
        textHeader="The Man is Here" 
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos commodi beatae sequi facere ullam molestiae reiciendis aperiam dolorum voluptatibus voluptatum!t"
        button={<InfoButton text="We Powered A House" icon={<IoMdAddCircleOutline size={27}/>} onClick={handleClick}/>}
        />
      </div>


    </div>
  )
}

export default ProductSection


// whitespace-nowrap overflow-auto flex