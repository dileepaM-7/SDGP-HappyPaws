import React from "react";
import { Link } from "react-router-dom";
import './Home.css';
import play_Image from '../../../assets/play.png';
import MainContent from "../../MainContent/MainContent";
import { Navbar } from "../../NavigationBar/Navbar";
import Footer from "../../Footer/Footer";
import styled, { keyframes } from "styled-components";
import { Services } from "../Services/Services";
import { About } from "../About/About";
import { Contact } from "../Contact/Contact";
import { Link as ScrollLink, scroller } from 'react-scroll';

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
  const scrollToSection = (section) => {
    scroller.scrollTo(section, {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
    });
  };

  return (
    <div className="all-content" id="home">
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
          <ScrollLink to="services" className='features-button' onClick={() => scrollToSection('services')}>
            Our Services <img src={play_Image} alt="" className="playImage" />
          </ScrollLink>
        </Title>
      </div>
      <Services />
      <About/>
      <Contact id="contact"/>
      <Footer />
    </div>
  );
};
