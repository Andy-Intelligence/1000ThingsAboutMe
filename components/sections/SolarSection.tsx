import ContentCard from "../cards/ContentCard"
import TitleCounter from "../cards/TitleCounter"
import Pexels from "@/public/assets/pexels.jpeg"
import bg from "@/public/assets/deepBlueBg.webp"
import React, { useEffect, useRef } from 'react';
import useSkewScroll from '@/components/gsap/utility/useSkewScroll';


const SolarSection = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  useEffect(()=>{
    if (!containerRef.current) return 
  useSkewScroll(containerRef);
  
  },[])
  
  return (
    <div ref={containerRef} className=" w-[90%] pt-7 space-y-5 flex flex-col items-center rounded-[30px] mt-8">

      <div>
          <h2 className="text-3xl font-custom font-bold ">Go Solar the Better Way We're Different</h2>
      </div>
      <TitleCounter/>
      <ContentCard 
      tag="One Company =  Transparency"
      title = "VERTICALLY INTEGRATED" 
      text="
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos commodi beatae sequi facere ullam molestiae reiciendis aperiam dolorum voluptatibus voluptatum!"
      img2 = {Pexels.src}
      background={bg.src}
      height="20rem"
      />
    </div>
  )
}

export default SolarSection