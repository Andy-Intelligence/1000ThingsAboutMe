"use client"
import { ReactNode } from "react";
import FooterSection from "../cards/FooterSection"
import {BsPhone} from "react-icons/bs"
import {AiOutlineMail} from "react-icons/ai"
import React, { useEffect, useRef } from 'react';
import useSkewScroll from '@/components/gsap/utility/useSkewScroll';


const Footer = () => {
  
  const containerRef = useRef<HTMLDivElement | null>(null);
  useEffect(()=>{
  if (!containerRef.current) return 
  useSkewScroll(containerRef);
  
  },[])
  interface subSectionsObj {
    icon?:ReactNode;
    text?:string;
}

  interface MyObject {
    id?:number;
    sectionHeader?:string;
    subSections?:subSectionsObj[];
}

const obj:MyObject[] = [
{
    id:1,
    sectionHeader:undefined,
    subSections:[{icon:<BsPhone size={24}/>, text:"Use Live Chat"}, {icon:<AiOutlineMail size={24}/>, text:"green@gmail.com"}]
},
{
    id:2,
    sectionHeader:"COMPANY",
    subSections:[{text:"Reviews"}, {text:"Careers"}]
},
{
    id:3,
    sectionHeader:"PRODUCT",
    subSections:[{ text:"Product Features"}]
},
{
    id:4,
    sectionHeader:"EDUCATION",
    subSections:[{text:"Solar Education Series"},{text:"Give Power"}]
},
{
    id:5,
    sectionHeader:"RESOURCES",
    subSections:[{text:"Blog"},{text:"FAQ"}]
},
{
    id:6,
    sectionHeader:"GET IN TOUCH",
    subSections:[{text:"Future Customers"},{text:"Current Customers"}]
},


]



  return (
    <div ref = {containerRef}  className="w-full">
      
      <div className="flex bg-footerBg text-black rounded-t-[50px] flex-col items-center  space-y-2 text-lg py-4">
      <div className="py-4">
        <h1 className=" text-2xl font-bold">eGreenConceptLogo</h1>
      </div>
        {obj.map((item)=>{
          return <FooterSection key={item?.id}  sectionHeader={item?.sectionHeader || ""} subSections={item?.subSections || []}/> 
        })}
      </div>
    </div>
  )
}

export default Footer