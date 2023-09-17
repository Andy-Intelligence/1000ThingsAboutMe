"use client"
import React, { useEffect, useRef } from 'react';
import Image from "next/image"
import BannerBg from "@/public/assets/bannerBg.png"
import {MdOutlineSolarPower} from 'react-icons/md'
import {FaPlay} from 'react-icons/fa'
import ColoredButton from "../buttons/ColoredButton"
import RealSun3 from '@/public/assets/realSun3.png'
import {gsap} from "gsap"
import TextPlugin from "gsap/TextPlugin"
import Link from 'next/link';


gsap.registerPlugin(TextPlugin)

const BannerSection = () => {




  const containerRef = useRef<HTMLDivElement | null>(null)
  const containerRef1 = useRef<HTMLDivElement | null>(null)



  useEffect(()=>{

    gsap.to(containerRef1.current, {
      scrollTrigger: containerRef1.current, 
      scale: 1.1, 
      repeat: -1, 
      yoyo: true, 
      ease: "power2"
    });

    if (!containerRef.current) return;
    gsap.defaults({ease:"none"})

    const tl = gsap.timeline({
      repeat:3,
      repeatDelay:1,
      yoyo:true,
    });

    tl.to(containerRef.current,{
      duration:2,
      text:{
        value:"IS BETTER",

    },
    })
    // .to(buttonRef.current, {y:10})
    // .set(buttonRef.current,  {text:"I am done"})
  
    

  },[])


  const calculateMyEnergyRequirement = ()=>{
    alert("Button clicked")
  }
  return (
    <div className="bannerBgImage  flex flex-col min-h-screen w-full space-y-10 items-center rounded-b-[80px] justify-between">
     
      <div className="text-[40px] flex flex-col items-center font-extrabold mb-20 mt-[8rem] text-center ">
        <p  className="font-custom text-white ">THE FUTURE OF</p>
        <div ref={containerRef1} className="font-custom flex items-center"> <svg  width="47" height="47" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_473_420)">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M23.4805 36.2348C16.4597 36.2348 10.7261 30.5012 10.7261 23.4805C10.7261 16.4597 16.4597 10.7261 23.4805 10.7261C30.5012 10.7261 36.2348 16.4597 36.2348 23.4805C36.2348 30.5012 30.5012 36.2348 23.4805 36.2348ZM26.6008 7.33275C27.4589 7.33275 28.005 6.39665 27.5369 5.65557L24.4166 0.507025C23.9875 -0.19505 22.9734 -0.19505 22.5054 0.507025L19.385 5.65557C18.917 6.39665 19.463 7.33275 20.3211 7.33275H23.4415H26.6008ZM39.6282 26.6008V23.4805V20.3601C39.6282 19.502 40.5643 18.956 41.3054 19.424L46.4539 22.5444C47.156 22.9734 47.156 23.9875 46.4539 24.4556L41.3054 27.5759C40.6033 28.005 39.6282 27.4589 39.6282 26.6008ZM20.3601 39.6282H23.4805H26.6008C27.4589 39.6282 28.005 40.5643 27.5369 41.3054L24.4166 46.4539C23.9875 47.156 22.9734 47.156 22.5054 46.4539L19.385 41.3054C18.995 40.6033 19.502 39.6282 20.3601 39.6282ZM7.33275 20.3601V23.4805V26.6008C7.33275 27.4589 6.39665 28.005 5.65557 27.5369L0.507025 24.4166C-0.19505 23.9875 -0.19505 22.9734 0.507025 22.5054L5.65557 19.385C6.39665 18.995 7.33275 19.502 7.33275 20.3601ZM36.4298 13.5734C36.9369 14.0805 37.756 13.8464 37.951 13.1444L38.9261 9.12694C39.0821 8.46387 38.4971 7.87881 37.834 8.03483L33.8166 9.00993C33.1535 9.16595 32.9195 10.024 33.3875 10.5311L34.9087 12.0523L36.4298 13.5734ZM33.4265 36.4298L34.9477 34.9087L36.4689 33.3875C36.9759 32.8805 37.795 33.1145 37.99 33.8166L38.9261 37.834C39.0821 38.4971 38.4971 39.0821 37.834 38.9261L33.8166 37.951C33.1535 37.795 32.9195 36.9369 33.4265 36.4298ZM10.5311 33.4265L12.0523 34.9477L13.5734 36.4689C14.0805 36.9759 13.8464 37.795 13.1444 37.99L9.12694 38.9651C8.46387 39.1211 7.87881 38.5361 8.03483 37.873L9.00993 33.8556C9.20495 33.1535 10.063 32.9195 10.5311 33.4265ZM13.5734 10.5311L12.0523 12.0523L10.5311 13.5734C10.024 14.0805 9.20495 13.8464 9.00993 13.1444L8.03483 9.12694C7.87881 8.46387 8.46387 7.87881 9.12694 8.03483L13.1444 9.00993C13.8464 9.20495 14.0805 10.063 13.5734 10.5311Z" fill="#FFC113"/>
          </g>
          <defs>
          <clipPath  id="clip0_473_420">
          <rect width="47" height="47" fill="white"/>
          </clipPath>
          </defs>
          </svg>

          <p className="text-yellow-400">ENERGY</p>
        </div>
        <p className="font-custom text-white">IS BETTER </p>
        {/* ref = {containerRef}  */}

      </div>


      <div className="flex flex-col items-center  min-w-max space-y-4">
        <div className="w-full">
        <ColoredButton text = {"Calculate My Energy"} icon = {<MdOutlineSolarPower size={27}/>} onClick = {calculateMyEnergyRequirement}/>
        </div>

        <div className=" ">
          <Link href={"/solar-packages"}>
              <button className="bg-yellow-500  whitespace-normal text-base text-black font-custom p-2">See Packges</button>
          </Link>
        
        {/* <div>
        <svg className="arrowSVG " width="60" height="30" viewBox="0 0 154 52" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.0553 30.1676C16.9417 30.3031 18.7966 30.4774 20.6831 30.6129C23.1102 30.7568 23.3853 28.1272 21.2738 27.5961C15.2154 26.2169 9.1216 24.8418 3.0238 23.4321C0.76226 22.8479 -0.724922 24.3169 0.364987 25.983C4.40445 31.42 8.43995 36.8223 12.4794 42.2592C13.9286 44.2354 18.5727 42.3704 16.9896 40.7958C15.6075 38.7769 14.1938 36.7967 12.7762 34.7818C40.2309 52.4297 63.9772 53.9994 86.2803 49.2384C104.298 45.3886 119.986 38.4695 133.758 26.1166C141.462 19.2321 147.813 11.2033 153.089 2.27901C154.217 -0.132068 151.569 -0.636957 150.689 0.797762C143.35 11.8187 134.75 21.2632 124.52 28.7172C112.87 37.2814 101.471 42.0602 87.3005 44.6277C61.2088 49.2949 37.173 44.2473 15.0553 30.1676Z" fill="#6C7785"></path></svg>
        </div> */}
        </div>
      </div>




      <div className=" space-y-2 flex flex-col items-center ">
        <div className="solarEducationTeacherImage w-[80px] h-[80px] rounded-full  ">
          <div className="flex items-center text-white justify-center  w-[30px] h-[30px] bg-green-600 top-0 right-0 rounded-full">
            <FaPlay />
          </div>
        </div>
        <div className="flex flex-col space-y-2 text-center ">
          <div className="font-sans text-xl font-bold">SOLAR EDUCATION SERIES</div>
          <div className="font-bold">Learn More About Going Solar</div>
        </div>
      </div>


    </div>
  )
}

export default BannerSection















/////////////////////////////// sun svg
{/* */}