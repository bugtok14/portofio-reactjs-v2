import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImg2 from '../components/HeroImg2'
import AboutContent from '../components/AboutContent'
import {motion} from 'framer-motion'
import Certificate from '../components/Certificate'

function About() {
  return (
    <motion.div
    initial={{opacity:0}}
    animate={{opacity:1, transition: { duration: 1.5 }}}
    exit={{opacity:0}}
    >
      <Navbar/>
      <HeroImg2 heading="ABOUT ME" text="I'm a friendly person :) so don't hesitate to reach me out if you have concern."/>
      <AboutContent/>
      <Certificate/>
      <Footer/>
    </motion.div>
  )
}

export default About