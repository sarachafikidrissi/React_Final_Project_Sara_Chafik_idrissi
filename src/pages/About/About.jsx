import React from 'react'
import AboutBanner from './Components/AboutBanner'
import AboutStroy from './Components/AboutStroy'

const About = () => {
  return (
    <div className='flex flex-col gap-y-10'>
      <AboutBanner />
      <AboutStroy />
    </div>
  )
}

export default About
