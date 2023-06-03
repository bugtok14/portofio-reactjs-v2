import React from 'react'
import './HeroImg.css'
import  IntroImg from '../assests/background1.png'
import { Link } from 'react-router-dom'


function HeroImg() {
  return (
    <div className='hero'>
        <div className='mask'>
            <img className='intro-img' src={IntroImg} alt="IntroImage"/>
        </div>    
        <div className='content'>
            <p>Hi, I'm Dave Marapao 👨‍💻</p>
            <h1>Software Tester and Developer</h1>
            <div>
                <a href='https://drive.google.com/file/d/1NpN7xM-v2oU7EKd0BvDejz742roXjbWD/view?usp=sharing' className='btn'>My Resume</a>
                <Link to="/contact" className='btn-light' >Contact</Link>
            </div>
        </div>
    </div>
  )
}

export default HeroImg