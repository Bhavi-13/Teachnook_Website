// import React from 'react'
// import "../Style/navbar.css"
// import { useState } from 'react';
// import logo from '../assets/logoSkill.jpg'

// const NavBar = () => {
    
//     const [isMenuOpen, setIsMenuOpen] = useState(false);

//     const toggleMenu = () => {
//         setIsMenuOpen(!isMenuOpen);
//     };


//   return (
//     <section id='home_main'>
//         <section id="main_section">
//             <div id="navbar">
//                 <div id="logo">
//                     <a href="/"><img src={logo} alt="" id="c_name"/></a>
//                 </div>
//                 <div className='list_components'>
//                     <ul className={isMenuOpen ? "menu-open" : "menu-closed"}>
//                         <li className='navbarlistContainer'>About Us</li>
//                         <li className='navbarlistContainer'>Courses</li>
//                         <li className='navbarlistContainer'>Contact Us</li>
//                     </ul>
//                     <div id="mobileNavButton" onClick={toggleMenu}>
//                         <div></div>
//                         <div></div>
//                         <div></div>
//                     </div>
//                 </div>
//             </div>
//         </section>

//     </section>

   
//   )
// }

// export default NavBar

import { useState } from "react";
import {NavLink} from 'react-router-dom'
import logo from "../assets/logoSkill.jpg";
import "../Style/navbar.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  

  return (
    <nav id="navbar">
      <NavLink to={"/"}>
        <img src={logo} alt="no image" />
      </NavLink>
      <div className="container">
        <div className="content-container">
            <div className="content">
            <ul
                className={`links ${isMenuOpen ? "open" : ""}`}
                style={{ zIndex: "3" }}
            >
                <li>
                <NavLink to={"/about"} onClick={toggleMenu}>
                    ABOUT US
                </NavLink>
                </li>
                <li>
                <NavLink to={"/courses"} onClick={toggleMenu}>
                    COURSES
                </NavLink>
                </li>
                <li>
                <NavLink to={"/contact"} onClick={toggleMenu}>
                    CONTACT US
                </NavLink>
                </li>
                <li>
                <NavLink to={"/contact"} onClick={toggleMenu}>
                    LOGIN/SIGNUP
                </NavLink>
                </li>
            </ul>
                <div className="nav-btn" onClick={toggleMenu}>
                    <i className="bi bi-list"></i>
                </div>
            </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
