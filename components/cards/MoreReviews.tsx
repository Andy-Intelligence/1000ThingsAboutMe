import React from 'react'
import {BsGoogle} from "react-icons/bs"

const MoreReviews = () => {
  return (
    <div className='flex flex-col space-y-6 w-full items-center mt-5'>
        <div className='text-lg font-bold font-custom'>Read More Reviews</div>
        <div className='flex space-x-6 text-white'>
            <div className='bg-gray-800 rounded-full p-5'><BsGoogle size={28}/></div>
            <div className='bg-gray-800 rounded-full p-5'><BsGoogle size={28}/></div>
            <div className='bg-gray-800 rounded-full p-5'><BsGoogle size={28}/></div>
        </div>
    </div>
  )
}

export default MoreReviews