import React from "react";
import { Navbar } from "../../NavigationBar/Navbar";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import Footer from "../../Footer/Footer";
import './Services.css'

export const Services = () => {
  return (
    <div id="services">
      <div className="meal-suggestion">
        meal suggestion
      </div>
      <div className="excerise-suggestion">
        ex suggestion
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
