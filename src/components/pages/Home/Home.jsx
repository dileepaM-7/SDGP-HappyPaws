import React from "react";
import { Link } from "react-router-dom";
import './Home.css';
import play_Image from '../../../assets/play.png';
import MainContent from "../../MainContent/MainContent";
import { Navbar } from "../../NavigationBar/Navbar";
import Footer from "../../Footer/Footer";
import styled, { keyframes } from "styled-components";

const textFade = keyframes`
  from {
    opacity: 0;
    transform: translateX(-200px);
  } 
  to {
    opacity: 1;
    transform: translateX(0px);
  }
`;

const Title = styled.div`
  animation-name: ${textFade};
  animation-duration: 1s;
`;

export const Home = () => {
  return (
    <div>
      <Navbar />
      <MainContent />
      <div className='text'>
        {/* Applying the Title styled component to the entire content */}
        <Title>
          <span className='welcome_txt'>Welcome... <br /><br /></span>
          <span className='first_content' >Welcome to a <br /> world of care for </span>
          <span className='second_content'>your <br />beloved pets <br /></span>
          <span className='last_txt'>Discover expert pet care tips and advice to ensure your furry <br />
            friend's well-being and happiness at every stage of their life.</span>
          <Link to="/services" className='features-button'>
            Our Services <img src={play_Image} alt="" className="playImage" />
          </Link>
        </Title>
      </div>
      <Footer />
    </div>
  );
};
