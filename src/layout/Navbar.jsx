import React, { useState } from 'react'
import { assets } from '../assets'
import { Link } from 'react-router-dom'
import { FaRegCircleUser } from "react-icons/fa6";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { useAuth } from '../context';
import { CiMenuBurger } from "react-icons/ci";
import { LiaTimesSolid } from "react-icons/lia";


const Navbar = () => {

  const {count} = useAuth()

  const [menuActive, setMenuActive] = useState(false)

  const handlMenu = () => {
  
    menuActive ? setMenuActive(false) : setMenuActive(true)
    
  }
  console.log(menuActive);


  return (
    <div className='py-[4vh] flex justify-between items-center sm:px-10 px-4  '>
      <div>
        <img src={assets.logo} alt="" />
      </div>
      <div className={`${!menuActive ? 'hidden sm:flex sm:flex-row gap-x-10 font-montserrat' : 'flex flex-col gap-y-5 p-4  bg-orange-600 text-white h-[50vh]  absolute top-[12vh] z-50 w-full right-0'}`}>
      <Link onClick={() => setMenuActive(false)} to={'/'} className='sm:focus:text-orange-600'>Home</Link>
        <Link onClick={() => setMenuActive(false)} to={'/shop'} className='sm:focus:text-orange-600'>Shop</Link>
        <Link onClick={() => setMenuActive(false)} to={'/blog'} className='sm:focus:text-orange-600'>Blog</Link>
        <Link onClick={() => setMenuActive(false)} to={'/about'} className='sm:focus:text-orange-600'>About</Link>
        <Link onClick={() => setMenuActive(false)} to={'/contact'} className='sm:focus:text-orange-600'>Contact</Link>
      </div>
      <div className='flex sm:gap-x-6 gap-x-2 items-center text-[#999999] '>
        <FaRegCircleUser className='text-2xl '/>
        <div className='w-[1px] h-7 bg-gray-400'></div>
        <div className='relative'>
        <LiaShoppingBagSolid className='text-3xl' />
        <div className='w-4 h-4 bg-black text-white flex items-center justify-center rounded-full absolute top-0 right-[-5px]'>{count}</div>
        </div>
        {
          menuActive  ? <LiaTimesSolid onClick={handlMenu} className='text-3xl text-black sm:hidden'/> :<CiMenuBurger onClick={handlMenu} className='text-3xl text-black sm:hidden'/>

        }

      </div>
    </div>
  )
}

export default Navbar
