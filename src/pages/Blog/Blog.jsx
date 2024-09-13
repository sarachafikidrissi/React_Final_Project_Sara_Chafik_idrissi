import React from 'react'
import Banner from './Components/BlogBanner'
import Article from './Components/Article'
import SideBar from './Components/SideBar'

const Blog = () => {
  return (
    <div>
     <Banner />
     <div className=' flex sm:flex-row flex-col justify-end gap-x-4 pt-5'>
     <Article />
     <SideBar />
     </div>
    </div>
  )
}

export default Blog
