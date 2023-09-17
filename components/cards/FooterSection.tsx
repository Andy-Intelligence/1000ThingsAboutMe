"use client"
import React, { ReactNode } from 'react'

interface Obj {
    icon?:ReactNode;
    text?:string;
}

interface FooterProp {
    sectionHeader?:string;
    subSections?: Obj[];
}

const FooterSection = ({sectionHeader,subSections}:FooterProp) => {





// const mappedArray: string[] = obj.flatMap((el) => el.subSections?.map((item) => `Transformed: ${item}`) || []) .filter((item): item is string => item !== undefined);

// This will transform each item and flatten the result into a single array.
// console.log(mappedArray);


  return (
    <div className='flex flex-col space-y-1 w-[90%] '>
        <h1 className='text-xl font-bold font-custom'>{sectionHeader}</h1>
        {subSections && subSections.map((item)=>{
            return <div className='flex items-center space-x-4 p-1' >{item?.icon}<span className=''>{item.text}</span></div>
        })}
        
        {/* <div className='flex items-center space-x-4'>{icon}<span>{sectionName}</span></div> */}
    </div>
  )
}

export default FooterSection