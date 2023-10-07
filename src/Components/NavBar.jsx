import React from 'react'
import "../Style/navbar.css"
import { useState } from 'react';

const NavBar = () => {
    
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };


  return (
    <section id='home_main'>
        <section id="main_section">
            <div id="navbar">
                <div id="logo">
                    <a href="#"><img src="src/image/skill_cortex.jpg" alt="" id="c_name"/></a>
                </div>
                <div className='list_components'>
                    <ul className={isMenuOpen ? "menu-open" : "menu-closed"}>
                        <li className='navbarlistContainer'>About Us</li>
                        <li className='navbarlistContainer'>Courses</li>
                        <li className='navbarlistContainer'>Contact Us</li>
                    </ul>
                    <div id="mobileNavButton" onClick={toggleMenu}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>
        </section>

    </section>

   
  )
}

export default NavBar