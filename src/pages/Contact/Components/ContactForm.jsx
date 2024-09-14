import React from 'react'

const ContactForm = () => {
  return (
    <div className='h-[70vh] flex justify-center gap-x-2 py-10'>

        <div className='h-full w-[40vw]'>

        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d423286.8827352412!2d-118.74137856646594!3d34.020039250466034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2sLos%20Angeles%2C%20CA%2C%20USA!5e0!3m2!1sen!2sma!4v1726271098234!5m2!1sen!2sma" className='w-full h-full' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title='map'></iframe>

        </div>
        <div className='h-full w-[40vw] p-4 flex flex-col gap-y-4'>
            <h1 className='text-2xl font-extrabold text-black'>Send us your message</h1>
            <div className='flex flex-col gap-y-3'>
                <input type="text" placeholder='Name' className='h-[6vh] ps-5 border border-[#b8b8b8]' />
                <input type="email" placeholder='Email' className='h-[6vh] ps-5 border border-[#b8b8b8]'/>
                <input type="text" placeholder='Phone'className='h-[6vh] ps-5 border border-[#b8b8b8]'/>
                <textarea name="" id="" placeholder='message' cols={4} rows={5} className=' p-5 border border-[#b8b8b8]'></textarea>
                <button 
                className="w-fit px-[4vw] bg-neutral-900 text-white py-2 rounded-3xl  hover:bg-red-500"
              >
                SEND
              </button>
            </div>
        </div>
      
    </div>
  )
}

export default ContactForm
