import React from 'react'
import SolarPackages from '@/components/pages/SolarPackages'

const page = () => {
  return (
    <div className='flex w-full flex-col items-center space-y-4 py-8'>
      <div className='font-custom font-bold text-3xl text-yellow-400'>Choose Your Solar Plan</div>
      <p className='font-custom font-bold text-base text-white text-center'>Installation is usually done 2 days after payment has been confirmed.</p>
      <SolarPackages/>
    </div>
  )
}

export default page 