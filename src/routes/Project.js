import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImg2 from '../components/HeroImg2'
import Certificate from '../components/Certificate'
import Work from '../components/Work'


function Project() {
  return (
    <div>
      <Navbar/>
      <HeroImg2 heading="PROJECTS" text="These are some of my works." />
      <Work/>
      <Certificate/>
      <Footer/>
    </div>
  )
}

export default Project