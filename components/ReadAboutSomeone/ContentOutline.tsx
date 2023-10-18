import React from 'react'
interface Params{
    header:string;
    text:string;
    number:number;
}
const ContentOutline = ({header,text,number}:Params) => {
  return (
    <div className='flex flex-row space-x-2 items-start py-2'>
        <div className='flex flex-row space-x-2 items-start'>
            <div className='font-bold text-2xl'>
                <span className='text-yellow-400'>{number}.</span>
            </div>
            <div>
                <header className='flex flex-row items-center font-bold'>
                    <span className='text-2xl text-yellow-400'>Fact #{number}</span>
                </header>
                <p className='text-white text-xl'>
                {header}
                </p>
            </div>
        </div>
    </div>
    
  )
}

export default ContentOutline