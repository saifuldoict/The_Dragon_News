import React from 'react'
import Marquee from 'react-fast-marquee'

const LatestNews = () => {
  return (
    <div className='flex gap-2 items-center bg-base-200 p-3'>
        <h2 className='text-base-100 px-3 bg-secondary'>Latest News</h2>
        <Marquee className='text-sm text-gray-600' speed={50} pauseOnHover={true} gradient={false}>
            <p className='font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit!</p>
        </Marquee>
        
    </div>
  )
}

export default LatestNews