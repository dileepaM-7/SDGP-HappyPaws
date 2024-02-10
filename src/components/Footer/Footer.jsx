import React from 'react'
import "./Footer.css"

const Footer=()=>{
  return(
      <div className="footer">
      <div className="sb_footer section_padding">
          <div className="sb_footer-links">
              <div className="sb_footer-links-div">
                  <h4>Image</h4>
                  <a href="/employer">
                      <P>bla bla</P>
                      <p><image src={fb} alt=""></image></p>
                      <p><image src={twitter} alt=""></image></p>
                      <p><image src={instagram} alt=""></image></p>
                      <p><image src={linkedIn} alt=""></image></p>
                  </a>       
              </div>
              <div className="sb_footer-links-div">
                  <h4>About</h4>
                  <a href="/contact">
                      <P>contact details</P>
                  </a>
              </div>
              <div className="sb_footer-links-div">
                  <h4>Services</h4> 
                  <p>mmmmm</p>   
              </div>
              <div className="sb_footer-links-div">
                  <h4>New Shelter</h4> 
                  <p>mmmmm</p>   
              </div>

          </div>
      </div>

      <hr />
      <div className="footer-below-links">
      <div className="footer-copyright">
          <p>
              @{new Date().getFullYear()} codeInn. All right reserved. 
          </p>
      </div>
      <div className="footer-below-links">
          <a href="/terms">
              <div><p>Terms & Conditions</p></div>
          </a>
          <a href="/privacy">
              <div><p>Privacy</p></div>
          </a>
          <a href="/Security">
              <div><p>Security</p></div>
          </a>
          
      </div>
      </div>


      </div>
      
      
  )
}
export default Footer;
