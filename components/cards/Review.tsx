import React from 'react'
import { IoMdAddCircleOutline } from "react-icons/io"
import { FaStar } from 'react-icons/fa';
import {ReactNode} from "react"


interface ReviewProps{
    text?:string;
    button?:ReactNode;
    name?:string;
    location?:string;
    rating?:number;
}


const Review = ({text,button,name,location,rating}:ReviewProps) => {
  return (
    <div className='flex flex-col space-y-4'>
        <div>
            <i>
                {text}
            </i>
        </div>
        <div className='text-green-500 flex items-center gap-2 p-1 border-hidden'>
            <button className='text-lg font-custom'>Full Review</button>
            <IoMdAddCircleOutline size={26}/>
        </div>

        <div className='space-y-2'>
            <div className='text-lg font-bold'>
                <h4 className='font-custom'>{name}</h4>
            </div>
            <div className='text-base font-bold'>
                <h4>{location}</h4>
            </div>

            <div className='text-yellow-400 flex space-x-2'>
                {/* {rating} */}
                {Array(rating).fill(rating,0,5).map((element)=>{
                    return <FaStar/>
                })}
            </div>
        </div>
        
    </div>
  )
}

export default Review