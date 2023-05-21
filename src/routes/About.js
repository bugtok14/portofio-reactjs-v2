import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImg2 from '../components/HeroImg2'
import AboutContent from '../components/AboutContent'

function About() {
  return (
    <div>
      <Navbar/>
      <HeroImg2 heading="ABOUT ME" text="I'm a friendly person :) so don't hesitate to reach me out if you have concern."/>
      <AboutContent/>
      <Footer/>
    </div>
  )
}

export default About