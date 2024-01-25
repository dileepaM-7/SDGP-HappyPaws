import React from 'react'

import './Navbar.css'
import logoImage from '../../assets/logo.png'
import profileImage from '../../assets/profile.png'


const Navbar = () => {
  
  return (
    <div className='navbar'>
        <img className='logoImg' src={logoImage} alt="" />
        <ul>
            <li className='active'>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Features</a>
            </li>
            <li>
              <a href="">About Us</a>
            </li>
            <li>
              <a href="">Contact Us</a>
            </li>
        </ul>
        <img className='profileImg' src={profileImage} alt="" />

    </div>
  )
}

export default Navbar