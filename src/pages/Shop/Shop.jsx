import React from 'react'
import Banner from './Components/Banner'
import SideBar from './Components/SideBar'
import Items from './Components/Items'

const Shop = () => {
  return (
    <div className=''>
      <Banner />
      <div className='flex sm:flex-row flex-col'>

      <SideBar />
      <Items />
      </div>
    </div>
  )
}

export default Shop
