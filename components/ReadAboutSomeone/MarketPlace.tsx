import React from 'react'
import MarketPlaceCover from './MarketPlaceCover'
import Link from 'next/link'

const MarketPlace = () => {
  return (
    <div className='w-full flex items-center justify-center'>
        <div className='flex space-x-8 items-center'>
          {/* <Link href={'read'}> */}
            <MarketPlaceCover/>
          {/* </Link> */}
               
        </div>
    </div>
  )
}

export default MarketPlace