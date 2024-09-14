import React from 'react'
import { article} from '../../../assets'
import { FaArrowRightLong } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';

const Article = () => {
  const navigate = useNavigate()
  return (
    <div className='sm:w-[60vw] w-full  flex flex-col gap-y-10'>
      {
        article.map((item, index) => {
          return(
            <div key={item.id} className='flex flex-col gap-y-5'>
        <div className='flex  sm:w-[60vw] sm:p-0 p-4 flex-col items-end overflow-hidden relative group cursor-pointer'>
        <img onClick={() => {navigate(`/blog/${item.id}`)}} src={item.image} alt="" className='h-full w-full group-hover:scale-110 transition-transform duration-1000 ease-in-out ' />
        <p className='bg-black text-white w-fit px-4 py-1 absolute bottom-10 left-0'>28 DEC, 2017</p>
        </div>

        <div className='flex flex-col gap-y-4 items-start sm:p-0 p-4'>
            <h1 className='text-3xl font-bold'>{item.title}</h1>
            <p><span className='text-sm text-[#777777]'>by fashe-theme Admin</span> | crafts, street style | <span className='text-sm text-[#777777]'>1 Comments</span></p>
            <p className='text-[#777777]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed turpis sed lorem dignissim vulputate nec cursus ante. Nunc sit...</p>
            <div className='flex gap-2 items-center hover:text-orange-600 cursor-pointer'>
                <span>Continue Reading</span>
                <FaArrowRightLong />
            </div>
        </div>

      </div>
          )
        })
      }

    </div>
  )
}

export default Article
