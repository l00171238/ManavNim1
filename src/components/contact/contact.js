import React from 'react'
import './contact.css'
function Contact() {
  return (

    <section>
        <div id='contact'>
            <h1 className='contactPageTitle'>Contact Me </h1>
            <span className='contactDesc' > Please fill out the form below to discuss any work opportunities </span>
            <form className='contactForm'>
                <input type='text' className='name' placeholder='Your Name' />
                <input type='email' className='email' placeholder='Your Email' />
                <textarea name='messgae' className='msg' rows='5' placeholder='Your Message' />
            </form>
        </div>

    </section>
  )
}

export default Contact
