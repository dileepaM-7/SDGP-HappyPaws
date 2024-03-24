import React from 'react';
import "./Footer.css";
import fb from "../../assets/fb.jpg";
import instagram from "../../assets/insta.jpg";
import linkedIn from "../../assets/linkedIn.jpg";
import github from "../../assets/git.jpg";
import { Link } from "react-router-dom";
import FooterIconImage from "../../assets/FooterIcon-Logo.png"

const Footer = () => {
  return (
    <div className="footer">
      <div className='footer_upper'>
        <div className="footer_social">
          <h3>Follow us on</h3>
          <div className="footer_social-icons">
            <a href="https://www.facebook.com/" target="_blank">
              <img src={fb} alt="fb" className='image1' />
            </a>
            <a href="https://www.instagram.com/" target="_blank">
              <img src={instagram} alt="insta" className='image2'/>
            </a>
            <a href="https://www.linkedin.com/" target="_blank">
              <img src={linkedIn} alt="linkedIn" className='image3' />
            </a>
            <a href="https://www.github.com/" target="_blank">
              <img src={github} alt="linkedIn" className='image3' />
            </a>
            </div>
            </div>
      </div>
      <div className="sb_footer section_padding">
        <div className="sb_footer-links">
          
          <div className="sb_footer-links-div-services">
            <span className='FooterNewPart'>happy to welcome you <br/><span className='FooterNewPart2'> to Our Pet World</span></span>
            <img src={FooterIconImage} alt=""  className='FooterIconImage'/>
            <span className='FooterService1'>Food Recommendations link</span>
            <p className='FooterService1-para1'>You can input your pets' breed, age,<br/> and weight to receive feeding suggestions<br/> for your adorable pets.</p>
            <img src={FooterIconImage} alt=""  className='FooterIconImage'/>
            <span className='FooterService1'>Vaccination reminder</span>
            <p className='FooterService1-para1'>Reminders for vaccinations may help pet<br/> owners maintain their pets' health despite<br/> their busy lifestyles.</p>
            <img src={FooterIconImage} alt=""  className='FooterIconImage1'/>
            <span className='FooterService3'>Exercise planner</span>
            <p className='FooterService1-para2'>If you want get exercises for your pet buddies,<br/>here is the place.find your pets breed category<br/>and get exercises.</p>
            <img src={FooterIconImage} alt=""  className='FooterIconImage1'/>
            <span className='FooterService3'>medical records</span>
            <p className='FooterService1-para2'>Maintaining a pet’s medical record book is very<br/> important. keeping an online medical record for<br/> pets is easier than the traditional way.</p>
            
            <img src={FooterIconImage} alt=""  className='FooterIconImage3'/>
            <span className='FooterService5'>Search for consultants</span>
            <p className='FooterService1-para5'>Pet owners may need assistance in finding<br/>  the veterinarian's contact information. We<br/>  allow visitors to access registered veterinarian<br/>  information via the website.</p>
   

          <div className='Footer-Contact'>
          <span className='Footer-Contact-span'>Contact Us </span><br/>
            <span className='Footer-Contact-p'><br/>Phone Number : <br/>+94 773613102<br/>+94 702441361</span>
            <span className='Footer-Contact-p'><br/><br/>Email : <br/>happypaws11@gmail.com</span>
          </div>
          </div>
         
          
        </div>
      </div>
      <hr />
      <div className="footer-below-links">
        <div className="footer-copyright">
          <p>
            @{new Date().getFullYear()} Kryptonians. All rights reserved. <a href="">Terms & Conditions</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
