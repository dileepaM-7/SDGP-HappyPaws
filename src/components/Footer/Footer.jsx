import React from 'react';
import "./Footer.css";
import fb from "../../assets/fb.jpg";
import instagram from "../../assets/insta.jpg"; // Fix the file extension
import linkedIn from "../../assets/LinkedIn.jpg";
import github from "../../assets/git.jpg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className='footer_upper'>
        <p>Connect with us on social networks
        <img src={instagram} alt="" className='image1' />
        <img src={fb} alt="" className='image2' />
        <img src={github} alt="" className='image3' />
        <img src={linkedIn} alt="" className='image2' />
        
        </p>

      </div>
      <div className="sb_footer section_padding">
        <div className="sb_footer-links">
          <div className="sb_footer-links-div">
            <h4>About Us</h4>
            <p>Social media links</p>
            
          </div>
          <div className="sb_footer-links-div">
          <h4>Services</h4>
            
              <p>Food Recommendations</p>
              <p>Vaccination reminder</p>
              <Link to="/exceisePlanner">
              <p>Exercise planner</p>
              </Link>
              
              <p>medical records</p>
              <p>Search for consultants</p>
            
            
          </div>
          <div className="sb_footer-links-div">
          <h4>Contact Us</h4>
            
            <p>+94 773613102</p>
              <p>happypaws@gmail.com</p>
            
          </div>
          <div className="sb_footer-links-div">
            <h4>message </h4>
            <form action="">
              <input type="text" placeholder='Your name' className='inputName'/> 
              <input type="text"  placeholder='message' className='inputmsg' />
              <input type="submit" value="Submit" className='submit' />
            </form>
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
