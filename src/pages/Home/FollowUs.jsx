import React from 'react'

const FollowUs = () => {
  return (
    
    <section className="flex flex-col sm:gap-y-[15vh] gap-y-5  ">

    <div className="font-bold sm:text-4xl text-2xl flex flex-col items-center ">
      <h1>@ FOLLOW US ON INSTAGRAM</h1>
    </div>
    
    <div className="  sm:w-[80%] w-[100vw]  mx-auto flex sm:flex-row flex-col gap-y-3 ">
      <div className="sm:w-[30vw] w-full  flex flex-col items-center overflow-hidden group ">
        <p className="font-medium">Free Delivery Worldwide</p>
        <p className="text-[#999999]">Mirum est notare quam littera gothica</p>
    
      </div>
      <div className="sm:w-[30vw] w-full flex flex-col items-center overflow-hidden group  border-l border-r">
        <p className="font-medium">30 Days Return
        </p>
        <p className="text-[#999999] ">Simply return it within 30 days for an exchange.</p>
    
        
      </div>
      <div className="sm:w-[30vw] w-full flex flex-col items-center overflow-hidden group ">
        <p className="font-medium">Store Opening
        </p>
        <p className="text-[#999999]">Shop open from Monday to Sunday</p>
    
      </div>
    </div>
    </section>
    
  )
}

export default FollowUs
