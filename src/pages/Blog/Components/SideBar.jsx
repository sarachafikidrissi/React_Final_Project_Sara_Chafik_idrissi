
import React from 'react'
import { CiSearch } from "react-icons/ci";
import { carouselImages } from '../../../assets';

const SideBar = () => {
  return (
    <div className='sm:w-[30vw]  p-2'>
        <div className='w-full '>
            <input type="text " placeholder='Search all articles...' className='w-[80%] h-[5vh] rounded-full  ps-4 font-light text-sm border-2 border-gray-300 focus:border-none' />
            <CiSearch className='relative bottom-7 right-[-70%] text-gray-400'/>
        </div>
        <div>
      <h1 className='font-sans font-extrabold text-2xl'>Featured Products</h1>

      {
        carouselImages.map((item, index) => {
            return (
                <div key={index} className='flex gap-x-1  items-center'>
                    <img src={item.image} alt="" className='w-[30%]' />
                    <div className=' w-[50%]'>
                    <p>{item.title}</p>
                    <p>${item.price}</p>

                    </div>

                </div>
            )
            
        })
      }

        </div>
    </div>
  )
}

export default SideBar
