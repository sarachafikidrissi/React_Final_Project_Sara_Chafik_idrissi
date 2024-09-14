import React from 'react'
import { carouselImages } from '../../../assets'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../context';
import Swal from "sweetalert2";


const Items = () => {

    const {addToCart} = useAuth()
  return (
    
    <div className='w-[100%] flex sm:flex-wrap sm:flex-row flex-col gap-x-10  pt-10 pb-10  gap-y-10 '>
      {
        carouselImages.map((item, index) => {
            return (
            <div key={index} className='sm:w-[20vw] w-full flex flex-col gap-y-2 sm:p-0 p-4 cursor-pointer'>
                <div className="relative group">
                <img src={item.image} alt="" className='w-full sm:h-[50vh] object-cover' />

              <div className="absolute inset-0 bg-black opacity-5 group-hover:opacity-50 transition-opacity duration-600"></div>
              <button onClick={() => {addToCart(item); Swal.fire({
                          title: `${item.title}`,
                          text: `is added to cart !`,
                          icon: "success",
                          position: "right",
                          customClass: {
                            confirmButton: 'custom-confirm-button',  
                          }
                        });}}
                className="absolute bottom-3 left-1/2 transform -translate-x-1/2 bg-neutral-900 text-white px-2 py-2 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-600 text-lg hover:bg-red-500"
              >
                ADD TO CART
              </button>
            </div>
                <p>{item.title}</p>
                <p>${item.price}</p>
            </div>

            )
        }) 
      }
    </div>
  )
}

export default Items
