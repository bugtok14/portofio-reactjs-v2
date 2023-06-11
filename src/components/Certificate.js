import './Certificate.css'
import React from 'react'
import certImageAS1 from '../assests/AS1.png'
import certImageAS2 from '../assests/AS2.png'
import certImageTDS1 from '../assests/TDS1.png'
import { Link } from 'react-router-dom'

function Certificate() {
  return (
    <div className='certificates'>
        <h1 className='certificate'> Certificates </h1>
        <div className='cert-container'>

            <Link to='https://drive.google.com/file/d/1DLPzZo6BqtAEbYA901p_Nr25LRuEhZIw/view?usp=sharing' target="_blank" rel="noopener noreferrer"> 
                <div className='cert'>
                    <h3>  Tricentis Automation Specialist Level 1 </h3>
                    <span className='bar'></span>
                    <img src={certImageAS1} alt='certificate' className='certificate-image'/>
                </div>
            </Link>

            <Link to='https://drive.google.com/file/d/1EBEhIkJUJprMPhcAV4ai-ej91hOaOPis/view?usp=sharing' target="_blank" rel="noopener noreferrer">
                <div className='cert'>
                    <h3>  Tricentis Automation Specialist Level 2 </h3>
                    <span className='bar'></span>
                    <img src={certImageAS2} alt='certificate' className='certificate-image'/>
                </div>
            </Link>
        </div>
        <div className='cert-container'>
        <Link to='https://drive.google.com/file/d/1LsNp8xQ0QG90i7WJhZDrPQn9ePYFljHe/view?usp=sharing' target="_blank" rel="noopener noreferrer">
                <div className='cert'>
                    <h3>  Tricentis Test Design Specialist Level 1 </h3>
                    <span className='bar'></span>
                    <img src={certImageTDS1} alt='certificate' className='certificate-image'/>
                </div>
            </Link>
        </div>
    </div>
  )
}

export default Certificate