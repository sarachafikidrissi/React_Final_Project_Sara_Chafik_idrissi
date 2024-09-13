import React from 'react'
import { assets } from '../../../assets'

const AboutStroy = () => {
  return (
  <div className='flex justify-center p-20 gap-x-2 text-[#777777]'>
    <div className='w-[25vw] overflow-hidden group '>
    <img src={assets.aboutStory} alt="" className='h-[60vh] object-cover  group-hover:scale-110 transition-transform duration-1000 ease-in-out' />
    </div>
    <div className=' w-[60vw] h-[60vh] p-4 flex flex-col gap-y-10'>
        <h1 className='text-2xl font-extrabold text-black'>Our story</h1>
        <p>Phasellus egestas nisi nisi, lobortis ultricies risus semper nec. Vestibulum pharetra ac ante ut pellentesque. Curabitur fringilla dolor quis lorem accumsan, vitae molestie urna dapibus. Pellentesque porta est ac neque bibendum viverra. Vivamus lobortis magna ut interdum laoreet. Donec gravida lorem elit, quis condimentum ex semper sit amet. Fusce eget ligula magna. Aliquam aliquam imperdiet sodales. Ut fringilla turpis in vehicula vehicula. Pellentesque congue ac orci ut gravida. Aliquam erat volutpat. Donec iaculis lectus a arcu facilisis, eu sodales lectus sagittis. Etiam pellentesque, magna vel dictum rutrum, neque justo eleifend elit, vel tincidunt erat arcu ut sem. Sed rutrum, turpis ut commodo efficitur, quam velit convallis ipsum, et maximus enim ligula ac ligula. Vivamus tristique vulputate ultricies. Sed vitae ultrices orci.</p>

        <div className='border-s-4 ps-10 flex flex-col gap-y-3 ms-4'>
        <p>Creativity is just connecting things. When you ask creative people how they did something, they feel a little guilty because they didn't really do it, they just saw something. It seemed obvious to them after a while.</p>
        <span className='text-sm'>- Steve Job’s</span>
        </div>
    </div>
  </div>
  )
}

export default AboutStroy
