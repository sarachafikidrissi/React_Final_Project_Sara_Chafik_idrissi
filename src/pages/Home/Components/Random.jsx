import React from 'react'
import { assets, products } from '../../../assets'
import { Link } from 'react-router-dom'

const Random = () => {
    let randomIndex = Math.floor(Math.random() * products.length);
    return (
      <section className="bg-[#f2f2f2] flex sm:flex-row flex-col justify-center sm:gap-x-8 gap-y-5  sm:px-10 px-5 py-16">
      <div className="sm:w-[40vw] w-full h-[60vh] bg-red-200 relative ">
        <img
          src={assets.whiteShirt}
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="flex flex-col items-center absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] gap-y-5 ">
          <div className="flex flex-col items-center w-[30vw]">
            <span className="text-3xl text-white font-bold ">The Beauty</span>
            <span className="text-6xl text-white font-extrabold ">Look Book</span>
          </div>
          <span className=" text-white hover:border-b "><Link to={'/shop'}>VIEW COLLECTION</Link></span>
        </div>
      </div>
      <div className="sm:w-[40vw] w-full h-[60vh] relative">
        <img
          src={products[randomIndex].image}
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="flex flex-col gap-y-10 items-center absolute bottom-[10%] left-[50%] translate-x-[-50%] ">
          <div className="flex flex-col items-center">
            <h1 className="text-2xl">{products[randomIndex].title}</h1>
            <span>${products[randomIndex].price}</span>
          </div>
          <div className="flex gap-x-2">
            <div className="w-[60px]  h-[60px] border flex flex-col items-center justify-center">
              <span className="font-bold">-2082</span>
              <span className="text-gray-400">days</span>
            </div>
            <div className="w-[60px]  h-[60px] border flex flex-col items-center justify-center">
              <span className="font-bold">-2082</span>
              <span className="text-gray-400">days</span>
            </div>
            <div className="w-[60px]  h-[60px] border flex flex-col items-center justify-center">
              <span className="font-bold">-2082</span>
              <span className="text-gray-400">days</span>
            </div>
            <div className="w-[60px]  h-[60px] border flex flex-col items-center justify-center">
              <span className="font-bold">-2082</span>
              <span className="text-gray-400">days</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Random
