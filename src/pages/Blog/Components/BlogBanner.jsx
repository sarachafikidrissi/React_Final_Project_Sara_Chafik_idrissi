import React from 'react'
import { assets } from '../../../assets'

const Banner = () => {
  return (
    <div>
      <div className="banner h-[30vh] bg-red-600 relative ">
        <img src={assets.shopBanner} alt="" className='h-full object-cover' />
        <h1 className='text-6xl font-bold  absolute top-[50%] right-[50%] translate-x-1/2  text-white'>NEWS</h1>
      </div>
    </div>
  )
}

export default Banner