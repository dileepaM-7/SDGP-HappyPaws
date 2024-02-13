import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { Link as ScrollLink, Element, scroller } from 'react-scroll';
import { Link } from "react-router-dom";
import { auth } from "../../firebase-config";
import logoImage from "../../assets/logo.png";
import profileImage from "../../assets/profile.png";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  const scrollToSection = (section) => {
    setMenuOpen(false);
    scroller.scrollTo(section, {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
    });
  };

  const handleSetActive = (to) => {
    setActiveSection(to);
  };

  return (
    <nav>
      <img className="logoImg" src={logoImage} alt="" onClick={() => scrollToSection('about')} />

      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <ScrollLink
          to="home"
          spy={true}
          smooth="easeInOutQuart"
          duration={800}
          offset={-50}
          onSetActive={handleSetActive}
        >
          <li className={activeSection === 'home' ? 'active' : ''}>
            <span>Home</span>
          </li>
        </ScrollLink>
        <ScrollLink
          to="services"
          spy={true}
          smooth="easeInOutQuart"
          duration={800}
          offset={-50}
          onSetActive={handleSetActive}
        >
          <li className={activeSection === 'services' ? 'active' : ''}>
            <span>Services</span>
          </li>
        </ScrollLink>
        <ScrollLink
          to="about"
          spy={true}
          smooth="easeInOutQuart"
          duration={800}
          offset={-50}
          onSetActive={handleSetActive}
        >
          <li className={activeSection === 'about' ? 'active' : ''}>
            <span>About</span>
          </li>
        </ScrollLink>
        <ScrollLink
          to="contact"
          spy={true}
          smooth="easeInOutQuart"
          duration={800}
          offset={-50}
          onSetActive={handleSetActive}
        >
          <li className={activeSection === 'contact' ? 'active' : ''}>
            <span>Contact</span>
          </li>
        </ScrollLink>
      </ul>
      {user ? (
        <Link to="/profile">
          <img className="profileImg" src={profileImage} alt="" />
        </Link>
      ) : (
        <Link to="/Login">
          <button className="login">Log In</button>
        </Link>
      )}
    </nav>
  );
};
