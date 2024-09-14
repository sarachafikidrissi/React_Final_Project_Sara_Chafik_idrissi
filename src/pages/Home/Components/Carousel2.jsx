import React from "react";
import { carouselImages } from "../../../assets";
import Slider from "react-slick";
import { GrFormPrevious } from "react-icons/gr";
import { MdOutlineNavigateNext } from "react-icons/md";
import { useAuth } from "../../../context";
import Swal from "sweetalert2";

const Carousel2 = () => {
  const { cartItems, setCartItems, setCount } = useAuth();

  const sliderRef2 = React.useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  const handleNext = () => {
    sliderRef2.current.slickNext();
  };

  const handlePrev = () => {
    sliderRef2.current.slickPrev();
  };

  const addToCart = (item) => {
    let newTab = [...cartItems];
    newTab.push(item);
    setCartItems(newTab);
  };
  console.log(cartItems);

  return (
    <>
      <div className="relative w-full">
        <Slider ref={sliderRef2} className="overflow-hidden" {...settings}>
          {/* Slide 1 - Produits */}
          <div className="relative flex w-full items-center">
            <div className="flex w-full items-center justify-center gap-5 flex-wrap">
              {carouselImages.slice(0, 4).map((item, index) => (
                <div
                  key={index}
                  className="text-start flex flex-col w-[100%] sm:w-[45%] md:w-[21vw]"
                >
                  <div className="relative group">
                    <img
                      src={carouselImages[index].image}
                      alt={item.title}
                      className="w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black opacity-5 group-hover:opacity-50 transition-opacity duration-600"></div>
                    <button
                      onClick={() => {
                        addToCart(item);
                        Swal.fire({
                          title: `${item.title}`,
                          text: `is added to cart !`,
                          icon: "success",
                          position: "right",
                          customClass: {
                            confirmButton: 'custom-confirm-button',  
                          }
                        });
                      }}
                      className="absolute bottom-3 left-1/2 transform -translate-x-1/2 bg-neutral-900 text-white px-3 py-2 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-600 text-lg hover:bg-red-500"
                    >
                      ADD TO CART
                    </button>
                  </div>
                  <p className="text-black pt-6 text-lg opacity-70">
                    {item.title}
                  </p>
                  <p className="text-black text-lg opacity-70">${item.price}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Slide 2 - Produits */}
          <div className="relative w-full items-center">
            <div className="flex w-full items-center justify-center gap-5 flex-wrap">
              {carouselImages.slice(4, 8).map((item, index) => (
                <div
                  key={index}
                  className="text-start flex flex-col w-[100%] sm:w-[45%] md:w-[21vw]"
                >
                  <div className="relative group">
                    <img
                      src={carouselImages[index + 4].image}
                      alt={item.title}
                      className="w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black opacity-5 group-hover:opacity-50 transition-opacity duration-600"></div>
                    <button
                      onClick={() => {
                        addToCart(item);
                      }}
                      className="absolute bottom-3 left-1/2 transform -translate-x-1/2 bg-neutral-900 text-white px-3 py-2 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-600 text-lg hover:bg-red-500"
                    >
                      ADD TO CART
                    </button>
                  </div>
                  <p className="text-black pt-6 text-lg opacity-70">
                    {item.title}
                  </p>
                  <p className="text-black text-lg opacity-70">${item.price}</p>
                </div>
              ))}
            </div>
          </div>
        </Slider>

        {/* Next  Prev buttons */}
        <button
          onClick={() => handlePrev(sliderRef2)}
          className="absolute left-5 top-[50%] translate-y-[-50%] text-black opacity-55 text-3xl"
        >
          <GrFormPrevious />
        </button>
        <button
          onClick={() => handleNext(sliderRef2)}
          className="absolute right-5 top-[50%] translate-y-[-50%] text-black opacity-55 text-3xl"
        >
          <MdOutlineNavigateNext />
        </button>
      </div>
    </>
  );
};

export default Carousel2;
