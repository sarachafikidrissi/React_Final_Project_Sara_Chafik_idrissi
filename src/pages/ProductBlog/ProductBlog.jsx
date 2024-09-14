import React from 'react'
import BlogProduct from './BlogProduct'
import SideBar from '../Blog/Components/SideBar'

const ProductBlog = () => {
  return (
    <div className=' flex sm:flex-row flex-col justify-end gap-x-4 pt-5'>
      <BlogProduct />
      <SideBar />
    </div>
  )
}

export default ProductBlog
