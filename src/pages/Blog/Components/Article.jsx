import React from 'react'
import { assets } from '../../../assets'
import { FaArrowRightLong } from "react-icons/fa6";

const Article = () => {
  return (
    <div className='sm:w-[60vw] w-full  flex flex-col gap-y-10'>
      <div className='flex flex-col gap-y-5'>
        <div className='flex  sm:w-[60vw] sm:p-0 p-4 flex-col items-end overflow-hidden relative group cursor-pointer'>
        <img src={assets.backPackBlog} alt="" className='h-full w-full group-hover:scale-110 transition-transform duration-1000 ease-in-out ' />
        <p className='bg-black text-white w-fit px-4 py-1 absolute bottom-10 left-0'>28 DEC, 2017</p>
        </div>

        <div className='flex flex-col gap-y-4 items-start sm:p-0 p-4'>
            <h1 className='text-3xl font-bold'>Black Friday Guide: Best Sales & Discount Codes</h1>
            <p><span className='text-sm text-[#777777]'>by fashe-theme Admin</span> | crafts, street style | <span className='text-sm text-[#777777]'>1 Comments</span></p>
            <p className='text-[#777777]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed turpis sed lorem dignissim vulputate nec cursus ante. Nunc sit...</p>
            <div className='flex gap-2 items-center hover:text-orange-600 cursor-pointer'>
                <span>Continue Reading</span>
                <FaArrowRightLong />
            </div>
        </div>

      </div>
      <div className='flex flex-col gap-y-5'>
        <div className='flex  sm:w-[60vw] sm:p-0 p-4 flex-col items-end overflow-hidden relative group cursor-pointer'>
        <img src={assets.shirtBlog} alt="" className='h-full w-full group-hover:scale-110 transition-transform duration-1000 ease-in-out ' />
        <p className='bg-black text-white w-fit px-4 py-1 absolute bottom-10 left-0'>28 DEC, 2017</p>
        </div>

        <div className='flex flex-col gap-y-4 items-start sm:p-0 p-4'>
            <h1 className='text-3xl font-bold'>Black Friday Guide: Best Sales & Discount Codes</h1>
            <p><span className='text-sm text-[#777777]'>by fashe-theme Admin</span> | crafts, street style | <span className='text-sm text-[#777777]'>1 Comments</span></p>
            <p className='text-[#777777]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed turpis sed lorem dignissim vulputate nec cursus ante. Nunc sit...</p>
            <div className='flex gap-2 items-center hover:text-orange-600 cursor-pointer'>
                <span>Continue Reading</span>
                <FaArrowRightLong />
            </div>
        </div>

        <div className='flex gap-x-4 sm:p-0 p-4'>
            <button className='bg-black text-white w-[30px] h-[30px] rounded-full'>1</button>
            <button className='bg-black text-white w-[30px] h-[30px] rounded-full'>2</button>
        </div>

      </div>
    </div>
  )
}

export default Article
