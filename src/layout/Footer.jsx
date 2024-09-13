import React from "react";
import { assets } from "../assets";
import { useNavigate } from "react-router-dom";
import { SlSocialFacebook, SlSocialInstagram, SlSocialTwitter, SlSocialYoutube } from "react-icons/sl";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-[#d8d8d830]  py-10 flex flex-col items-center mt-5  sm:px-0 px-2  "> 
      <div className="sm:w-[90%] w-full border-b-[2px] pb-10 flex sm:flex-row flex-col justify-between  gap-y-4 sm:gap-x-[6vw]">
      <div className="  sm:w-[30%] h-[90%]  flex flex-col gap-y-3 ">
        <img
          onClick={() => {
            navigate("./");
          }}
          src={assets.logo}
          alt="logo"
          className="w-[150px]  "
        />
        <span className="font-bold">GET IN TOUCH</span>

        <span className="text-gray-400 font-extralight ">
        Any questions? Let us know in store at 8th floor, 379 Hudson St, New York, NY 10018 or call us on (+1) 96 716 6879

        </span>
        <div className="flex gap-x-5">
        <SlSocialFacebook className=" hover:text-orange-600 cursor-pointer"/>
        <SlSocialInstagram className=" hover:text-orange-600 cursor-pointer"/>
        <SlSocialTwitter className=" hover:text-orange-600 cursor-pointer"/>
        <SlSocialYoutube className=" hover:text-orange-600 cursor-pointer"/>
        </div>
      </div>
      <div className=" sm:w-[70%] h-[90%] flex flex-wrap   sm:gap-y-0 gap-y-5   gap-x-[6vw]">
        <div className="flex flex-col  gap-y-3">
        <h1 className="font-bold uppercase">Tastebite</h1>
        <div className="flex flex-col gap-y-3 ">
          <span className="text-gray-500 cursor-pointer hover:text-orange-600 font-thin">About Us</span>
          <span className="text-gray-500 cursor-pointer hover:text-orange-600 font-thin">Careers</span>
          <span className="text-gray-500 cursor-pointer hover:text-orange-600 font-thin">Contact Us</span>
          <span className="text-gray-500 cursor-pointer hover:text-orange-600 font-thin">Feedback</span>
        </div>
        </div>
        <div className="flex flex-col gap-y-3">
        <h1 className="font-bold uppercase">Legal</h1>
        <div className="flex flex-col gap-y-3 ">
          <span className="text-gray-500 cursor-pointer hover:text-orange-600 font-thin">Terms</span>
          <span className="text-gray-500 cursor-pointer hover:text-orange-600 font-thin">Conditions</span>
          <span className="text-gray-500 cursor-pointer hover:text-orange-600 font-thin">Cookies</span>
          <span className="text-gray-500 cursor-pointer hover:text-orange-600 font-thin">Copyright</span>
        </div>
        </div>
        <div className="flex flex-col gap-y-3">
        <h1 className="font-bold uppercase">Follow</h1>
        <div className="flex flex-col gap-y-3 ">
          <span className="text-gray-500 cursor-pointer hover:text-orange-600 font-thin">Facebook</span>
          <span className="text-gray-500 cursor-pointer hover:text-orange-600 font-thin">Twitter</span>
          <span className="text-gray-500 cursor-pointer hover:text-orange-600 font-thin">Instagram</span>
          <span className="text-gray-500 cursor-pointer hover:text-orange-600 font-thin">Youtube</span>
        </div>
        </div>
        <div className="flex flex-col gap-y-3 ">
        <h1 className="font-bold uppercase">NEWSLETTER</h1>
        <div className="flex  flex-col gap-y-3 ">
          <input type="text" placeholder="Email adresse" className="border-b pb-5 bg-transparent sm:w-[20vw]"/>
          <button className="bg-black text-white w-fit px-10 py-4 rounded-full">SUBSCRIBE</button>
        </div>
        </div>
      </div>
      </div>

      <div className="pt-10">
        <span className="text-[12px] text-gray-400 text-center">© 2020 Tastebite - All rights reserved</span>
      
      </div>
    </div>
  );
};

export default Footer;
