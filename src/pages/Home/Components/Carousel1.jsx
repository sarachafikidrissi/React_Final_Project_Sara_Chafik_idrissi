import React from 'react'
import Slider from "react-slick";
import { GrFormPrevious } from "react-icons/gr";
import { MdOutlineNavigateNext } from "react-icons/md";
import { assets } from '../../../assets';
import { useNavigate } from 'react-router-dom';

const Carousel1 = () => {
  const navigate = useNavigate()
    const sliderRef = React.useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  const handleNext = () => {
    sliderRef.current.slickNext();
  };

  const handlePrev = () => {
    sliderRef.current.slickPrev();
  };
  return (
    <section className="carousel relative w-full ">
    <Slider ref={sliderRef} className="overflow-hidden " {...settings}>
      {/* Slide 1 */}
      <div className="relative w-full h-[70vh]">
        <img
          className="w-full h-full object-cover"
          src={assets.carousel1}
          alt="Slide 1"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-black bg-opacity-10">
          <h3 className="text-xl text-white">Women Collection 2018</h3>
          <h1 className="text-4xl mb-4 text-white">NEW ARRIVALS</h1>
          <button onClick={() => {navigate('./shop')}}  className="px-8 py-2 rounded-3xl text-black bg-white hover:bg-[#e65540]">
            SHOP NOW
          </button>
        </div>
      </div>

      {/* Slide 2 */}
      <div className="relative sm: w-full h-[70vh]">
        <img
          className="w-full h-full object-cover"
          src={assets.carousel4}
          alt="Slide 2"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-black bg-opacity-10">
          <h3 className="text-xl text-white">Women Collection 2018</h3>
          <h1 className="text-4xl mb-4 text-white">NEW ARRIVALS</h1>
          <button onClick={() => {navigate('./shop')}}    className="px-8 py-2 rounded-3xl text-black bg-white hover:bg-[#e65540]">
            SHOP NOW
          </button>
        </div>
      </div>

      {/* Slide 3 */}
      <div className="relative w-full h-[70vh]">
        <img
          className="w-full h-full object-cover"
          src={assets.carousel3}
          alt="Slide 3"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-black bg-opacity-10">
          <h3 className="text-xl text-white">Women Collection 2018</h3>
          <h1 className="text-4xl mb-4 text-white">NEW ARRIVALS</h1>
          <button onClick={() => {navigate('./shop')}}   className="px-8 py-2 rounded-3xl text-black bg-white hover:bg-[#e65540]">
            SHOP NOW
          </button>
        </div>
      </div>
    </Slider>

    {/* Next  Prev buttons  */}
    <button
      onClick={handlePrev}
      className="absolute left-5 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-3 rounded-full hover:bg-opacity-75 hover:bg-red-500"
    >
      <GrFormPrevious />
    </button>
    <button
      onClick={handleNext}
      className="absolute right-5 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-3 rounded-full hover:bg-opacity-75 hover:bg-red-500"
    >
      <MdOutlineNavigateNext />
    </button>
  </section>
  )
}

export default Carousel1
