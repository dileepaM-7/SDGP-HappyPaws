import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
import logoImage from "../../assets/logo.png";
import profileImage from "../../assets/profile.png";
import { auth } from "../../firebase-config"; // Import your authentication module
// testing

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check the authentication status when the component mounts
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    // Cleanup the subscription when the component unmounts
    return () => unsubscribe();
  }, []);

  return (
    <nav>
      <Link to="/About" className="title">
        <img className="logoImg" src={logoImage} alt="" />
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
      {user ? (
        /* User is logged in, show profile image */
        <Link to="/profile"><img className="profileImg" src={profileImage} alt="" /></Link>
        
      ) : (
        /* User is not logged in, show login button */
        <Link to="/Login">
          <button className="login">Log In</button>
        </Link>
      )}
      
    </nav>
  );
};
