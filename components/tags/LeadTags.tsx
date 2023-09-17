"use client"
import React from 'react'


interface LeadProps {
    text:string
}

const LeadTags = ({text}:LeadProps) => {
  return (
    <div className='text-center rounded-[50px] bg-gray-700 text-white  py-2 px-2 text-sm font-bold '>{text}</div>
  )
}

export default LeadTags