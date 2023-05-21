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
            <p>I'm a Software Developer and a Software Tester. I help create or test 
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