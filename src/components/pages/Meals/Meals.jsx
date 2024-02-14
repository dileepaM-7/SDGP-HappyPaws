import React, { useEffect, useRef, useState } from 'react';
import { Navbar } from "../../NavigationBar/Navbar";
import DogFood from '../../../assets/Meals.mp4';
import './Meals.css';
import MealItems from './MealItems';

function Meals() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    const handleMouseOver = () => {
      if (video.paused) {
        video.play();
      }
    };

    const handleMouseOut = () => {
      if (!video.paused) {
        video.pause();
      }
    };

    video.addEventListener("mouseover", handleMouseOver);
    video.addEventListener("mouseout", handleMouseOut);

    return () => {
      video.removeEventListener("mouseover", handleMouseOver);
      video.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);
 
  
 
  
  return (
    <div className='main'>
      <div className='heading'>
        <h1>Meal Options</h1>
      </div>
      <div className='container'>
        <video className="video" autoPlay loop muted ref={videoRef}>
          <source src={DogFood} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className='searchbox'>
        <input type="search" className='search-bar' placeholder='Enter the foods'/>
      </div>
      <div className='mealitems'> 
       
                    <MealItems/>
                    <MealItems/>
                    <MealItems/>
                    <MealItems/>
                    <MealItems/>
                    <MealItems/>
                    <MealItems/>
                    
              
          
        
        
        
      </div>
    </div>
  );
}


export default Meals;
