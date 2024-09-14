import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()
  return (
    <div className=' flex justify-center gap-x-4 py-10 '>
      <div className='w-[40vw]  border border-[#d3d3d3] p-4 flex flex-col gap-y-[5vh] h-fit'>
        <div>
          <h1 className='text-3xl'>New Customer</h1>
        <span className='font-bold font-sans text-[#888888]'>Register Account</span>
        <p className='text-[#888888]'>By creating an account you will be able to shop faster, be up to date on an order's status, and keep track of the orders you have previously made.</p>
        </div>

        <button onClick={() => {navigate('/register')}} className='text-white bg-black px-6 py-1.5 w-fit'>CONTINUE</button>
      </div>
      <div className='w-[40vw] border border-[#d3d3d3] p-4 flex flex-col gap-y-3 '>
        <h1 className='text-3xl'>Returning Customer</h1>
        <span className='font-bold font-sans text-[#888888]'>I am a returning customer</span>

        <div className='flex flex-col gap-y-2'>
          <label htmlFor="">Email</label>
          <input type="text" className=' border border-[#b8b8b8] p-2' placeholder='Email'/>
        </div>
        <div className='flex flex-col gap-y-2'>
          <label htmlFor="">Password</label>
          <input type="password" name="" id="" className=' border border-[#b8b8b8] p-2' placeholder='Password'/>
          <span>Forgot Password?</span>
        </div>
        <div className='flex gap-x-2'>
        <button className='text-white bg-black px-6 py-1.5 w-fit cursor-pointer'>SIGN IN</button>or
        <span onClick={() => {navigate('/')}} className='hover:text-orange-600 cursor-pointer'> Return to Store</span>
        </div>



      </div>
    </div>
  )
}

export default Login
