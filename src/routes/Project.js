import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImg2 from '../components/HeroImg2'
import Skills from '../components/Skills'
import Work from '../components/Work'
import {motion} from 'framer-motion'

function Project() {
  return (
    <motion.div
    initial={{opacity:0}}
    animate={{opacity:1, transition: { duration: 1.5 }}}
    exit={{opacity:0}}
    >
      <Navbar/>
      <HeroImg2 heading="PROJECTS" text="These are some of my works." />
      <Work/>
      <Skills/>
      <Footer/>
    </motion.div>
  )
}

export default Project