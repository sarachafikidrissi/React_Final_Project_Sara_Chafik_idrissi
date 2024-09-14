import React from 'react'
import ContactBanner from './Components/ContactBanner'
import ContactForm from './Components/ContactForm'

const Contact = () => {
  return (
    <div className='flex flex-col gap-y-10'>
      <ContactBanner />
      <ContactForm />
    </div>
  )
}

export default Contact
