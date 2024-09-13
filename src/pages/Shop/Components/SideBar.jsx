import React from 'react'


const SideBar = () => {
  return (
    <div className=' w-[30vw] flex flex-col gap-y-10 items-center pt-5'>
       <div className="categories flex flex-col gap-y-2  w-[40%]">
        <h1 className='text-2xl font-extrabold font-sans'>Categories</h1>
       <ul className='flex flex-col gap-y-3'>
            <li>On Sale</li>
            <li>Sold</li>
            <li>New</li>
        </ul>
       </div>
       <div className="colors flex flex-col gap-y-2  w-[40%]">
        <h1 className='text-2xl font-extrabold font-sans'>Color</h1>
       <ul className='flex flex-col gap-y-3'>
            <li className='flex gap-x-2'><input type="checkbox" className='accent-gray-500 '/>White</li>
            <li className='flex gap-x-2'><input type="checkbox" className='accent-gray-500 '/>Gray</li>
            <li className='flex gap-x-2'><input type="checkbox" className='accent-gray-500 '/>Black</li>
            <li className='flex gap-x-2'><input type="checkbox" className='accent-gray-500 '/>Blue</li>
        </ul>
       </div>


       <div className="colors flex flex-col gap-y-2  w-[40%]">
        <h1 className='text-2xl font-extrabold font-sans'>Price</h1>
       <ul className='flex flex-col gap-y-3'>
            <li className='flex gap-x-2'><input type="checkbox" className='accent-gray-500 '/>0 - 20</li>
            <li className='flex gap-x-2'><input type="checkbox" className='accent-gray-500 '/>20 - 40</li>
        </ul>
       </div>
      
    </div>
  )
}

export default SideBar
