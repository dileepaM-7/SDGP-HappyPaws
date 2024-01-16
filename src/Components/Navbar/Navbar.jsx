import React from 'react'
import './Navbar.css'
import logoImage from '../../assets/logo.png'
import profileImage from '../../assets/profile.png'


const Navbar = () => {
  return (
    <div className='navbar'>
        <img className='logoImg' src={logoImage} alt="" />
        <ul>
            <li>Home</li>
            <li>Features</li>
            <li>About Us</li>
            <li>Contact Us</li>
        </ul>
        <img className='profileImg' src={profileImage} alt="" />

    </div>
  )
}

export default Navbar