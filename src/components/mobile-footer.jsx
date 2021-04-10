import React from "react"
import { GiOrange } from 'react-icons/gi';


const MobileFooter = () => (
    <div className= 'mobile-footer'>
        <div className = 'mobile-footer-container'>
            <div className="about-me-container">
                <h3>About Me</h3>
                <p>I am a Web developer based in Lagos, Nigeria specialized in frontend</p>
            </div>
            <div className="contact-me-container">
                <p>Phone: +234-809-846-2210</p>
                <p>Email: amarachi2812@gmail.com</p>
            </div>
        </div>
        <h3 className= 'header-h3' ><GiOrange/> stories</h3>

    </div>
)

export default MobileFooter;