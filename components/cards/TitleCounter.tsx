"use client"
import React from 'react'
import {FaArrowLeft} from "react-icons/fa6"
import {FaArrowRight} from "react-icons/fa6"
import {ReactNode} from "react"
import Review from './Review'
import Image from 'next/image'

interface TitleCounterProp{
    text?:string;
    button?:ReactNode;
    name?:string;
    location?:string;
    rating?:number;
    stateName?:string;
    stateDescriptionText?:string;
    img?:string;
}

const TitleCounter = ({text,button,name,stateName,location,rating,stateDescriptionText,img}:TitleCounterProp) => {
  return (
    <div className='flex flex-col items-center justify-center space-y-6 w-full  '>
        




        {text && name && location && rating ? (<Review 
        text={text}
        name={name}
        location={location} 
        rating={rating}
        />) : (<></>)
        }




        <div className="solarSliderButtons flex flex-row justify-between w-full">
            <div className="text-3xl font-custom font-bold">
                {stateName ? ( <>{stateName}</>):(<>1/5</>)}
            </div>
                <div className="space-x-6 flex items-center">
                    <button className="text-lg font-bold"><FaArrowLeft size={29}/></button>
                    <button className="text-lg font-bold"><FaArrowRight size={29}/></button>
                </div>
        </div>


            {stateDescriptionText && 
        <div>
            <div className='text-left'>
                {stateDescriptionText}
            </div>
        </div>
            }
       

        {img && 
            <div className="pt-3 w-full">
            <Image  src={img} className="h-auto w-full" alt="img" width={300} height={80}/>
            </div>
        }
    </div>
  )
}

export default TitleCounter