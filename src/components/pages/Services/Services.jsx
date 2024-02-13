import React from "react";
import { Navbar } from "../../NavigationBar/Navbar";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import Footer from "../../Footer/Footer";
import food from "../../../assets/food.png"
import ex from "../../../assets/ex.png"

import './Services.css'
import { HiArrowCircleRight } from "react-icons/hi";

export const Services = () => {
  return (
    <div id="services">
      <div className="meal-suggestion">
        <img src={food} alt="" className="food-image"/>
        <p>"Tailored Temptations: Satisfy Your Pet's Palate with <br></br>
         Personalized Food Suggestions Catered to Their Unique Tastes and Preferences!"</p>
         <button className="food-btn">Get Started <HiArrowCircleRight/></button>
      </div>
      <div className="excerise-suggestion">
      <img src={ex} alt="" className="ex-image"/>
      <p>"Keep your pet active and joyful with our Exercise Planner! Personalized <br />workout routines designed 
      for your furry friend's happiness and well-being. <br /> From playful games to easy walks, make every moment 
      together healthy and fun!"</p>
      <button className="ex-btn">Get Started <HiArrowCircleRight/></button>
      </div>
      <div className="consultant-search">
        consultant search
      </div>
      <div className="vaccine-date">
        vaccine date
      </div>
      <div className="medical-data">
        medical data
      </div>
    </div>
  );
};
