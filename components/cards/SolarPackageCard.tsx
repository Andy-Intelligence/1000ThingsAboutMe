"use client"
import React from 'react'



interface PackageProps{
    power?:string;
    batteryType?:string;
    amount?:number;
    components?:string[];
    loads?:string[];
}


const SolarPackageCard = ({power,batteryType,amount,components,loads}:PackageProps) => {
  return (
    <div className='h-fit bg-black bg-opacity-70 p-2 rounded-[30px] flex flex-col text-center items-center'>
        <section className='flex flex-col space-y-4 font-custom'>
            <h1 className='font-bold text-xl  font-custom'>{power}</h1>
            <p>{batteryType}</p>
            <div className='font-bold text-2xl text-yellow-600'>N{amount}</div>
            <div>{components?.map((item)=>{
                return <span>{item},</span>
                })}
            </div>

            <div>{loads?.map((item)=>{
                return <span className=''>{item},</span>
                })}
            </div>
        </section>
    </div>
  )
}

export default SolarPackageCard
