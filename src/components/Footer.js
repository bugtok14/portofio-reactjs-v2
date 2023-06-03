import React from 'react'
import './Footer.css'
import {FaHome, FaPhone, FaMailBulk, FaFacebook, FaInstagram, FaLinkedinIn, FaGithub, FaTwitter} from "react-icons/fa"


function Footer() {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='left'>
                <div className='location'>
                    <FaHome size={20} style={{color:"#fff", marginRight: "2rem" }} />
                    <div>
                        <p>Cebu City, Philippines</p>
                    </div>
                </div>

                <div className='phone'>
                    <h4>
                    <FaPhone size={20} style={{color:"#fff", marginRight: "2rem" }} />
                    +63 946731606  </h4>
                </div>

                <div className='email'>
                    <h4>
                    <FaMailBulk size={20} style={{color:"#fff", marginRight: "2rem" }} />
                    davemarapao14@gmail.com  </h4>
                </div>
            </div>

            <div className='right'>
                <h4>About</h4>
                <p>This is me, Dave™. Let's be friends! 😊
                    I enjoy creating new projects and learning new things.
                </p>
                <div className='social'>
                    <a href='https://www.facebook.com/dave.marapao'>
                        <FaFacebook size={30} style={{color:"#fff", marginRight: "1rem" }} />
                    </a>
                    <a href='https://www.instagram.com/davidmarapao/'> 
                        <FaInstagram size={30} style={{color:"#fff", marginRight: "1rem" }} />
                    </a>
                    <a href='https://twitter.com/MarapaoDave'>
                        <FaTwitter size={30} style={{color:"#fff", marginRight: "1rem" }} />
                    </a>
                    <a href='https://www.linkedin.com/in/davemarapao/'>
                        <FaLinkedinIn size={30} style={{color:"#fff", marginRight: "1rem" }} />
                    </a>
                    <a href='https://github.com/bugtok14'>
                         <FaGithub size={30} style={{color:"#fff", marginRight: "1rem" }} />
                    </a>
                    <a href='mailto:davemarapao14@gmail.com'>
                        <FaMailBulk size={30} style={{color:"#fff", marginRight: "1rem" }} />
                    </a>
                </div>
            </div>
        </div>
        <div className='center'>
                <p className='copyright'>&copy; 2023 Dave™ Portfolio <br/>  All Rights Reserved</p>
        </div>
    </div>
  )
}

export default Footer