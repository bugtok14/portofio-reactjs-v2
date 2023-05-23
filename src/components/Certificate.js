import React from 'react'
import './Certificate.css'


const Certificate = () => {
  return (
    <div className='pricing'>
        <h1 className='skills'> Skills </h1>
        <div className='card-container'>
            <div className='card'>
                <h3> - Front-End - </h3>
                <span className='bar'></span>
                <p>- HTML, CSS</p>
                <p>- AngularJS</p>
                <p>- Thymeleaf</p>
                <p>- Bootstrap</p>
                <p>- MaterialUI</p>
                {/* <Link to="/project" className="btn1">
                    Purchase Now
                </Link> */}
            </div>

            <div className='card'>
                <h3> - Back-End - </h3>
                <span className='bar'></span>
                <p>- SpringBoot</p>
                <p>- NodeJS</p>
                <p>- Django</p>
                <p>- MySQL</p>
                <p>- MonggoDB</p>
                {/* <Link to="/project" className="btn1">
                    Purchase Now
                </Link> */}
            </div>

            <div className='card'>
                <h3> - Testing - </h3>
                <span className='bar'></span>
                {/* <p className='btc'> $100</p> */}
                <p>- Functional Testing (Manual & Automated)</p>
                <p>- Selenium</p>
                <p>- TOSCA</p>
                <p>- TestNG </p>
            </div>

            <div className='card'>
                <h3> - PLanguages - </h3>
                <span className='bar'></span>
                <p>- Java</p>
                <p>- Python</p>
                <p>- C++</p>
                <p>- JavaScript </p>
                <p>- PHP </p>
            </div>
        </div>
    </div>
  )
}

export default Certificate