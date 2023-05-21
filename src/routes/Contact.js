import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImg2 from '../components/HeroImg2'
import Form from '../components/Form'

function Contact() {
  return (
    <div>
      <Navbar/>
      <HeroImg2 heading="Contact Me" text={
            <>
            Let's connect! I am available on almost every social media.<br />
            You can message me, just click any social media icon at the bottom of the page.<br />
            I will reply within 24 hours. Or Send me a message here.
          </> 
         }
         />
      <Form/>
      <Footer/>
    </div>
  )
}

export default Contact