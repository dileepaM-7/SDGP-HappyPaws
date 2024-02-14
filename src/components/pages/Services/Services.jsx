import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import food from "../../../assets/food.png";
import ex from "../../../assets/ex.png";
import consultant from "../../../assets/consultant.png";
import vaccine from "../../../assets/vaccine.png";
import medical from "../../../assets/medical.png";


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
      <img src={consultant} alt="" className="consultant-image"/>
        <p className="find-consultants-para">"Discover our new "Pet Consultant Search" feature! 
        Easily find and connect <br />with experienced pet consultants who can provide personalized care 
        tips <br />and guidance. Simply search, explore profiles, and book appointments for <br />tailored advice.
        Your pet's well-being is just a click away!"</p>
      <button className="consultant-btn">Get Started <HiArrowCircleRight/></button>
      </div>
      <div className="vaccine-date">
      <img src={vaccine} alt="" className="vaccine-image"/>
      <p>"Keep your pet's health in check effortlessly! Set personalized vaccination <br />
       reminders, and we'll notify you on the exact date. Stay on top of your <br />furry 
       friend's well-being with automatic alerts and a handy vaccine <br /> history tracker. 
       Easy, convenient, and worry-free pet care at your fingertips!"</p>
      <button className="vaccine-btn">Get Started <HiArrowCircleRight/></button>
      </div>
      <div className="medical-data">
      <img src={medical} alt="" className="medical-image"/>
      <p>
      "Safeguard your pet's health history with our "Pet Medical Records" feature. <br />
      Easily store and access vaccination details, treatments, and appointments <br />
      in one place. Keep track of your pet's well-being with this simple <br />
      and organized medical record feature!"
      </p>
      <button className="medical-btn">Get Started <HiArrowCircleRight/></button>
      </div>
    </div>
  );
};
