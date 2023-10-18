import React from 'react'


interface Params{
name?:string;
caption?:string;
bookId?:string;
author?:string;
}


const MarketPlaceCover = ({name,caption,author}:Params) => {
  return (
    <div className='m-4 '>
        <div className=' w-[20rem] h-[25rem] text-center  flex flex-col  items-center'>
        {/* cover-container */}
            <div className='bg-black flex flex-col justify-between text-center h-full w-full p-4 '>
                <h1 className='text-red-400  text-2xl'>{name}</h1>
                <div className='text-white font-Nabla logo-icon-text text-5xl'>1000</div>
                <div className='text-yellow-400 text-5xl '>things</div>
                <div className='text-white logo-icon-text text-4xl'>about</div>
                <div className='text-white text-3xl '>{author}</div>
                <i className='text-white text-lg'>{caption}</i>
            </div>
        </div>
    </div>
  )
}

export default MarketPlaceCover