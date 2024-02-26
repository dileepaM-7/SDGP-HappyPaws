import React, { useEffect, useRef, useState } from 'react';
import DogFood from '../../../assets/Meals.mp4';
import './Meals.css';
import MealItems from './MealItems';
import { Navbar } from '../../NavigationBar/Navbar';

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
      <Navbar/>
      <div className='heading'>
        <h2 className='meal-suggestion-head'>Meal Options</h2>
        <div className='container1'>
        <video className="video" autoPlay loop muted ref={videoRef}>
          <source src={DogFood} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
        <p>Welcome to our meal options page, <span class="highlight1">where every diet shines!</span> Whether you're <span className='underline1'>vegetarian, vegan, pescatarian, or gluten-free</span>, we've curated a selection of delicious recipes to tantalize your taste buds. Explore our diverse range of meals tailored to your preferences and savor the flavors of healthy, satisfying eating. Happy browsing and bon appétit! 🍽️🐶</p>
      </div>
  
      <div className='searchbox'>
        <input type="search" className='search-bar' placeholder='Enter the foods'/>
        <button className='meal-genarate-btn'>Genarate</button>
      </div>
      
      <div className='mealitems'> 
          
      </div>
    </div>
  );
}


export default Meals;
