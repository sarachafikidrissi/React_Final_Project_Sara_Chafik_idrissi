import React, { useState } from "react";
import { assets } from "../assets";
import { Link, useNavigate } from "react-router-dom";
import { FaRegCircleUser } from "react-icons/fa6";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { useAuth } from "../context";
import { CiMenuBurger } from "react-icons/ci";
import { LiaTimesSolid } from "react-icons/lia";
import Swal from "sweetalert2";

const Navbar = () => {
  const Toast = Swal.mixin({
    toast: true,
    position: "top",
    showConfirmButton: false,
    customClass: {
      container: "custom-swal-position",
    },
  });

  const navigate = useNavigate();

  const { cartItems } = useAuth();


  let cartContent = cartItems
    .map(
      (item) => `
    <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 10px;">
      <img src="${item.image}" alt="${
        item.title
      }" style="width: 100px; height: 100px; object-fit: cover; border-radius: 5px;">
      <div>
        <p><strong>${item.title}</strong></p>
        <p>Price: $${item.price.toFixed(2)}</p>
        <p>Quantity: ${item.qty}</p>
      </div>
    </div>
  `
    )
    .join("");

  const [menuActive, setMenuActive] = useState(false);

  const handlMenu = () => {
    menuActive ? setMenuActive(false) : setMenuActive(true);
  };

  return (
    <div className="py-[4vh] flex justify-between items-center sm:px-10 px-4 shadow-md  ">
      <div>
        <img src={assets.logo} alt="" />
      </div>
      <div
        className={`${
          !menuActive
            ? "hidden sm:flex sm:flex-row gap-x-10 font-montserrat"
            : "flex flex-col gap-y-5 p-4  bg-orange-600 text-white h-[50vh]  absolute top-[12vh] z-50 w-full right-0"
        }`}
      >
        <Link
          onClick={() => setMenuActive(false)}
          to={"/"}
          className="sm:focus:text-orange-600"
        >
          Home
        </Link>
        <Link
          onClick={() => setMenuActive(false)}
          to={"/shop"}
          className="sm:focus:text-orange-600"
        >
          Shop
        </Link>
        <Link
          onClick={() => setMenuActive(false)}
          to={"/blog"}
          className="sm:focus:text-orange-600"
        >
          Blog
        </Link>
        <Link
          onClick={() => setMenuActive(false)}
          to={"/about"}
          className="sm:focus:text-orange-600"
        >
          About
        </Link>
        <Link
          onClick={() => setMenuActive(false)}
          to={"/contact"}
          className="sm:focus:text-orange-600"
        >
          Contact
        </Link>
      </div>
      <div className="flex sm:gap-x-6 gap-x-2 items-center text-[#999999] ">
        <FaRegCircleUser
          onClick={() => {
            navigate("/login");
          }}
          className="text-2xl cursor-pointer"
        />
        <div className="w-[1px] h-7 bg-gray-400"></div>
        <div className="relative">
          <LiaShoppingBagSolid
            onClick={() => {
              cartItems.length === 0 &&
                Toast.fire({
                  // icon: "success",
                  title: "Your shopping cart is empty",
                });
              cartItems.length > 0 &&
                Toast.fire({
                  // icon: "success",
                  title: "Your shopping cart is not empty",
                  width: '35vw',
                  html: `
                <div style="text-align: left; max-height: 50vh; overflow-y: auto;">
                  ${cartContent}
                </div>
                 <div style="display: flex; gap: 10px; padding-top: 5vh;">
          <button id="viewCartBtn" style="
            background-color: black; 
            color: white; 
            width: 10vw;
            padding: 2vh 0;
            border: none; 
            border-radius: 5px; 
            cursor: pointer;
            transition: background-color 0.3s ease;"
            onmouseover="this.style.backgroundColor='orange';" 
            onmouseout="this.style.backgroundColor='black';"
          >
            VIEW CART
          </button>
          
          <button id="checkoutBtn"  style="
            background-color: black; 
            color: white; 
            width: 10vw;
            border: none; 
            border-radius: 5px; 
            cursor: pointer;
            transition: background-color 0.3s ease;"
            onmouseover="this.style.backgroundColor='orange';" 
            onmouseout="this.style.backgroundColor='black';"
            
          >
            CHECKOUT
          </button>
        </div>
              `,
              didOpen: () => {
                // Add click listeners to buttons after the modal is opened
                document.getElementById('viewCartBtn').addEventListener('click', () => {
                  window.location.href = '/orders'; // Navigate to the cart page
                });
            
                document.getElementById('checkoutBtn').addEventListener('click', () => {
                  window.location.href = '/checkout'; // Navigate to the checkout page
                });
              }
                });
            }}
            className="text-3xl"
          />
          <div className="w-4 h-4 bg-black text-white flex items-center justify-center rounded-full absolute top-0 right-[-5px]">
            {cartItems.length}
          </div>
        </div>
        {menuActive ? (
          <LiaTimesSolid
            onClick={handlMenu}
            className="text-3xl text-black sm:hidden"
          />
        ) : (
          <CiMenuBurger
            onClick={handlMenu}
            className="text-3xl text-black sm:hidden"
          />
        )}
      </div>
    </div>
  );
};

export default Navbar;
