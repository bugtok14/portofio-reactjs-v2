import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImg2 from '../components/HeroImg2'
import Form from '../components/Form'
import {motion} from 'framer-motion'

function Contact() {
  return (
    <motion.div
    initial={{opacity:0}}
    animate={{opacity:1, transition: { duration: 1.5 }}}
    exit={{opacity:0}}
    >
      <Navbar/>
      <HeroImg2 heading="Contact Me" text={
            <>
            Let's connect! I am available on almost every social media.<br />
            You can message me, just click any social media icon at the bottom of the page.<br />
            I will reply within 24 hours. Or Send a message here.
          </> 
         }
         />
      <Form/>
      <Footer/>
    </motion.div>
  )
}

export default Contact