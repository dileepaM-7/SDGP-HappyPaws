import React from "react";
import { Navbar } from "../../NavigationBar/Navbar";
import "./About.css";
import Ishini from '../../../assets/Ishini.jpg';
import Imasha from '../../../assets/Imasha.jpg';
import Dileepa from '../../../assets/Dileepa.jpg';
import Shashini from '../../../assets/Shashini.jpg';
import Linkedin from '../../../assets/Linkedin.png';



export const About = () => {
  return (
    <div>
      <Navbar/>
      <h1>ABOUT US</h1>
      <h2>From pet lovers,To pet lovers</h2>
      
      <p className="para">Welcome to our magical haven for pet care, where love for our feathery, scaly, and furry companions is unwavering. We are tucked away in the digital world. Being passionate pet enthusiasts ourselves, we have created a safe haven in the virtual world with the goal of offering other pet owners support and a wealth of resources. Our website is a complex web of love and commitment, expertly weaved with convenience, community spirit, and ease of use. Come along with us as we set off on a fantastical voyage through the world of superior pet care, where each click brings you one step closer to a place where hearts sing with happiness and tails wag with ecstasy. Welcome to our virtual paradise, where your fantasies about pet care come true.</p>

    <br></br>
      <div className="container">
        <div className="Name name1"  style={{'--img': `url(${Imasha})`}}>
          <img src={Imasha} alt="Imasha Udayangi" />
          <div class="info">
            <h4>Imasha Udayangi</h4>
            <p> Software Engineering  Undergraduate From University of westminster.</p>
            <a href="https://www.linkedin.com/in/imasha-udayangi/" target="_blank" rel="noopener noreferrer">
              <img src={Linkedin} alt="Linkedin logo" style={{width: '30px', height: '30px'}}/>
            </a>
          </div>
          
        </div>
        <div className="Name name2"  style={{'--img': `url(${Ishini})`}}>
          <img src={Ishini} alt="Ishini Ranasinghe" />
          <div class="info">
            <h4>Ishini S. Ranasinghe </h4>
            <p> Software Engineering  Undergraduate From University of westminster.</p>
            <a href="https://www.linkedin.com/in/ishini-ranasinghe-76589a257?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" class="linkedin_link">
              <img src={Linkedin} alt="Linkedin logo" style={{width: '30px', height: '30px'}}/>
            </a>
          </div>
          
        </div>
        <div className="Name name3"  style={{'--img': `url(${Dileepa})`}}>
          <img src={Dileepa} alt="Dileepa Malshan" />
          <div class="info">
            <h4>Dileepa Malshan</h4>
            <p> Software Engineering  Undergraduate From University of westminster.</p>
            <a href="https://www.linkedin.com/in/dileepa-malshan-998908292?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer">
              <img src={Linkedin} alt="Linkedin logo" style={{width: '30px', height: '30px'}}/>
            </a>
          </div>
          
        </div>
        <div className="Name name4" style={{'--img': `url(${Shashini})`}}>
          <img src={Shashini} alt="Shashini Nilukshi" />
          <div class="info">
            <h4>Shashini Nilukshi</h4>
            <p> Software Engineering  Undergraduate From University of westminster.</p>
            
            <a href="https://www.linkedin.com/in/shashini-nilukshi-717750256" target="_blank" rel="noopener noreferrer">
              <img src={Linkedin} alt="Linkedin logo" style={{width: '30px', height: '30px'}}/>
            </a>
          </div>
          
        </div>
        <div className="Name name5"  style={{'--img': `url(${Ishini})`}}>
          <img src={Ishini} alt="Sasindu Wickramasinghe" />
          <div class="info">
            <h4>Sasindu</h4>
            <p> Software Engineering  Undergraduate From University of westminster.</p>
            <a href="https://www.linkedin.com/in/shashini-nilukshi-717750256" target="_blank" rel="noopener noreferrer">
              <img src={Linkedin} alt="Linkedin logo" style={{width: '30px', height: '30px'}}/>
            </a>
          </div>
          
        </div>
      </div>
    </div>
  );
};
