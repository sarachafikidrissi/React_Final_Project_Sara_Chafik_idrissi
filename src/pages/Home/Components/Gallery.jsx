import React from "react";
import { assets } from "../../../assets";
import { useNavigate } from 'react-router-dom';
const Gallery = () => {
  const navigate = useNavigate()
  return (
    <section className="gallery sm:w-[80%] w-[90%]  mx-auto flex sm:flex-row flex-col gap-y-3 gap-x-8">
    {/* first col */}
    <div className="left sm:w-[40%] w-full h-[100vh] flex flex-col gap-y-5 cursor-pointer  ">
      <div className="w-full h-[60vh] overflow-hidden relative group">
        <img
          src={assets.dress}
          alt=""
          className=" h-full w-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-in-out"
        />
        <div className="absolute bottom-5 left-[50%] translate-x-[-50%]">
          <button onClick={() => {navigate('./shop')}} className=" bg-white bg-opacity-85 px-[5vw] py-3 rounded-md hover:bg-[#e65540] hover:text-white font-montserrat">
            DRESSES
          </button>
        </div>
      </div>
      <div className="w-full h-[40vh] overflow-hidden relative group">
        <img
          src={assets.glasses2}
          alt=""
          className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-in-out"
        />
        <div className="absolute bottom-5 left-[50%] translate-x-[-50%]">
          <button onClick={() => {navigate('./shop')}} className=" bg-white bg-opacity-85 px-[5vw] py-3 rounded-md hover:bg-[#e65540] hover:text-white font-montserrat">
            SUNGLASSES
          </button>
        </div>
      </div>
    </div>
    {/* secondcol */}
    <div className="middle sm:w-[40%] w-full h-[100vh] flex flex-col gap-y-5 cursor-pointer">
      <div className="w-full h-[40vh] overflow-hidden relative group">
        <img
          src={assets.watch2}
          alt=""
          className=" w-full h-full object-fit group-hover:scale-110 transition-transform duration-1000 ease-in-out"
        />
        <div className="absolute bottom-5 left-[50%] translate-x-[-50%]">
          <button onClick={() => {navigate('./shop')}} className=" bg-white bg-opacity-85 px-[5vw] py-3 rounded-md hover:bg-[#e65540] hover:text-white font-montserrat">
            WTACHES
          </button>
        </div>
      </div>
      <div className="w-full h-[60vh] overflow-hidden relative group">
        <img
          src={assets.converse}
          alt=""
          className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-in-out"
        />
        <div className="absolute bottom-5 left-[50%] translate-x-[-50%]">
          <button onClick={() => {navigate('./shop')}} className=" bg-white bg-opacity-85 px-[5vw] py-3 rounded-md hover:bg-[#e65540] hover:text-white font-montserrat">
            FOOTWEAR
          </button>
        </div>
      </div>
    </div>
    {/* third col */}
    <div className="right  sm:w-[40%] w-full h-[100vh] flex flex-col gap-y-5 cursor-pointer">
      <div className="w-full h-[60vh] overflow-hidden relative group">
        <img
          src={assets.grayBackPack}
          alt=""
          className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-in-out"
        />
        <div className="absolute bottom-5 left-[50%] translate-x-[-50%]">
          <button onClick={() => {navigate('./shop')}} className=" bg-white bg-opacity-85 px-[5vw] py-3 rounded-md hover:bg-[#e65540] hover:text-white font-montserrat">
            BAGS
          </button>
        </div>
      </div>
      <div className="w-full h-[40vh] overflow-hidden relative group">
        <img
          src={assets.accessoire}
          alt=""
          className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-in-out"
        />
        <div className="absolute bottom-5 left-[50%] translate-x-[-50%]">
          <button onClick={() => {navigate('./shop')}} className=" bg-white bg-opacity-85 px-[5vw] py-3 rounded-md hover:bg-[#e65540] hover:text-white font-montserrat">
            ACCESSORIES
          </button>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Gallery
