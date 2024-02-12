import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
import logoImage from "../../assets/logo.png";
import profileImage from "../../assets/profile.png";
import { auth } from "../../firebase-config"; // Import your authentication module
import {
  signOut
} from "firebase/auth";

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

  const logout = async () => {
    // Implement your logout logic here
    await signOut(auth);
  };

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
        <img className="profileImg" src={profileImage} alt="" />
      ) : (
        /* User is not logged in, show login button */
        <Link to="/Login">
          <button className="login">Log In</button>
        </Link>
      )}
      <Link to="/"><button onClick={logout}>signout</button></Link>
      
    </nav>
  );
};
