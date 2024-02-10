import React from 'react';
import "./Footer.css";
import fb from "../../assets/facebook.png";
import twitter from "../../assets/twitter.png";
import instagram from "../../assets/instergram.avif"; // Fix the file extension
import linkedIn from "../../assets/Linkedin.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="sb_footer section_padding">
        <div className="sb_footer-links">
          <div className="sb_footer-links-div">
            <h4>Social</h4>
            <p>Social media links</p>
            <p><img src={fb} alt="" className='images' />&nbsp;&nbsp;Facebook</p>
            <p><img src={twitter} alt="" className='images' />&nbsp;&nbsp;Twitter</p>
            <p><img src={instagram} alt="" className='images' />&nbsp;&nbsp;Instergram</p>
            <p><img src={linkedIn} alt="" className='images' />&nbsp;&nbsp;Linkdin</p>
          </div>
          <div className="sb_footer-links-div">
            <h4>Contact</h4>
            <Link to="/contact">
              <p>Contact details</p>
            </Link>
          </div>
          <div className="sb_footer-links-div">
            <h4>Services</h4>
            <Link to="/services">
              <p>Services</p>
            </Link>
          </div>
          <div className="sb_footer-links-div">
            <h4>About</h4>
            <Link to="/about">
              <p>About Us</p>
            </Link>
          </div>
        </div>
      </div>
      <hr />
      <div className="footer-below-links">
        <div className="footer-copyright">
          <p>
            @{new Date().getFullYear()} Kryptonians. All rights reserved.
          </p>
        </div>
        <div className="footer-below-links">
          <a href="#terms">
            <div><p>Terms & Conditions</p></div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
