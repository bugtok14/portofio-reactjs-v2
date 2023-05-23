import './Certificate.css'
import React from 'react'
import certImage from '../assests/developer.jpg'
import { Link } from 'react-router-dom'

function Certificate() {
  return (
    <div className='certificates'>
        <h1 className='certificate'> Certificates </h1>
        <div className='cert-container'>

            <Link to='https://drive.google.com/file/d/1qgFqls6vlxViox474AmVEGry46U1arak/view?usp=sharing' target="_blank" rel="noopener noreferrer"> 
                <div className='cert'>
                    <h3>  Tricentis Automation Specialist Level 1 </h3>
                    <span className='bar'></span>
                    <img src={certImage} alt='certificate' className='certificate-image'/>
                </div>
            </Link>

            <Link to='https://drive.google.com/file/d/1qgFqls6vlxViox474AmVEGry46U1arak/view?usp=sharing' target="_blank" rel="noopener noreferrer">
                <div className='cert'>
                    <h3>  Tricentis Automation Specialist Level 2 </h3>
                    <span className='bar'></span>
                    <img src={certImage} alt='certificate' className='certificate-image'/>
                </div>
            </Link>

            <Link to='https://drive.google.com/file/d/1qgFqls6vlxViox474AmVEGry46U1arak/view?usp=sharing' target="_blank" rel="noopener noreferrer">
                <div className='cert'>
                    <h3>  Tricentis Test Design Specialist Level 1 </h3>
                    <span className='bar'></span>
                    <img src={certImage} alt='certificate' className='certificate-image'/>
                </div>
            </Link>
        </div>
    </div>
  )
}

export default Certificate