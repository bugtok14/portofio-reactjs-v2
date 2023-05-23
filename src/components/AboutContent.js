import { Link } from 'react-router-dom'
import './AboutContent.css'
import dev from '../assests/developer.jpg'
import tester from '../assests/tester.jpg'

import React from 'react'

function AboutContent() {
  return (
    <div className='about'>
        <div className='left'>
            <h1>Who am I?</h1>
            <p>I graduated BS Computer Engineering (2018-2022) at {' '}
                <a href='https://www.nemsu.edu.ph/'  
                style={{
                 color: 'red',
                 textDecoration: 'underline'
          }} 
          >
            NEMSU-Cantilan Campus</a>. 
                <br/> I'm a Software Developer and a Software Tester. I can help create or test your
                software products.
            </p>
                <Link to="/contact">
                    <button className='btn'>Contact Me</button>
                </Link>
        </div>

        <div className='right'>
            <div className='img-container'>
                <div className='img-stack top'>
                    <img src={dev}  className='img' alt="devimg"/>
                </div>
                <div className='img-stack bottom'>
                    <img src={tester}  className='img' alt="testimg"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent