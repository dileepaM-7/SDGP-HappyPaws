import React from 'react'
import './ExcerisePlanner.css'
import { Navbar } from '../../NavigationBar/Navbar'
import image1 from "../../../assets/exercise1.png";
import { Link } from 'react-router-dom';
import petExercise from '../../../assets/exercisepage1.jpg'


const ExcerisePlanner = () => {
  return (
    <div className='excerise-all'>
      <Navbar/>
      <div>
       <span >Exercise Planner</span> 
      <span >Wake UP.</span><br/>
      <span >Work Out.</span> <br/><br/>
      <span>We understand how important it is to keep our pets happy and healthy. <br/>
        Here, you'll find skillfully designed workout schedules adapted to your pet's requirements. <br/>
        Our programs, which include enjoyable games and engaging exercises, are intended to enhance <br/> your pet's physical condition, 
        provide and deepen your relationship with your pet. Let us go on <br/> a path towards a better, happier life together!</span>
        <img src={image1} alt=""/>
        
        <button>Get Started  </button>
        
        
      </div>
      

    </div>
   
  )
}

export default ExcerisePlanner
