import React from 'react'
import './NavBarUnreg.css'

const NavBarUnreg = () => {
  return (
    <nav>
      <Link to="/register" className="title">
      <img className='logoImg' src={logoImage} alt="" />
      </Link>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/services">Services</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact Us</NavLink>
        </li>
      </ul>
      <div style={{width: '100%', height: '100%', textAlign: 'center', color: 'white', fontSize: 16, fontFamily: 'Inter', fontWeight: '500', lineHeight: 28, wordWrap: 'break-word'}}>Register</div>
    </nav>
  )
}

export default NavBarUnreg
