import React from 'react'
import { assets } from '../../../assets'

const BlogSection = () => {
  
  return (
    <section>

    <div className="font-bold text-4xl flex flex-col items-center">
      <h1>OUR BLOG</h1>
    </div>

    <div className="  sm:w-[80%] w-[100vw]  mx-auto flex sm:flex-row flex-col gap-y-3 gap-x-8">
      <div className="sm:w-[30vw] w-full sm:h-[60vh] sm:px-0 px-2 flex flex-col gap-y-5 overflow-hidden group">
        <img src={assets.backPackBlog} alt="" className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-in-out" />
        <p className="font-bold">Black Friday Guide: Best Sales & Discount Codes</p>
        <p className="font-extralight"><span className="text-[#999999]">by</span> fashe-theme Admin <span className="text-[#999999]">on </span>Dec 28,2017</p>
        <p className="text-[#999999] font-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed turpis sed lorem dignissim vulputate nec cursus ante. Nunc sit...</p>
      </div>
      <div className="sm:w-[30vw] w-full sm:h-[60vh] sm:px-0 px-2 flex flex-col gap-y-5 overflow-hidden group">
        <img src={assets.whiteShirt} alt="" className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-in-out" />
        <p className="font-bold">The White Sneakers Nearly Every Fashion Girls Own</p>
        <p className="font-extralight"><span className="text-[#999999]">by</span> fashe-theme Admin <span className="text-[#999999]">on </span>Dec 28,2017</p>
        <p className="text-[#999999] font-light">Duis ut velit gravida nibh bibendum commodo. Sus-pendisse pellentesque mattis augue id euismod. Inter-dum et...</p>
        
      </div>
      <div className="sm:w-[30vw] w-full sm:h-[60vh] sm:px-0 px-2 flex flex-col gap-y-5 overflow-hidden group">
        <img src={assets.redBackPack} alt="" className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-in-out" />
        <p className="font-bold">New York SS 2018 Street Style: By Annina Mislin</p>
        <p className="font-extralight"><span className="text-[#999999]">by</span> fashe-theme Admin <span className="text-[#999999]">on </span>Dec 28,2017</p>
        <p className="text-[#999999] font-light ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed turpis sed lorem dignissim vulputate nec cursus ante. Nunc sit...</p>
      </div>
    </div>
    </section>

  )
}

export default BlogSection
