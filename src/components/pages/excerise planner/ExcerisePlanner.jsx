import React from 'react'
import './ExcerisePlanner.css'
import { Navbar } from '../../NavigationBar/Navbar'
import image1 from "../../../assets/exercise1.png";
import { Link } from 'react-router-dom';


const ExcerisePlanner = () => {
  return (
    <div>
      <Navbar/>
      <div className='text1'>
       <span className='welcome'>Exercise Planner</span> 
      <span className='wake'>Wake UP.</span><br/>
      <span className='work'>Work Out.</span> <br/><br/>
      <span className='para'>We understand how important it is to keep our pets happy and healthy. <br/>
        Here, you'll find skillfully designed workout schedules adapted to your pet's requirements. <br/>
        Our programs, which include enjoyable games and engaging exercises, are intended to enhance <br/> your pet's physical condition, 
        provide and deepen your relationship with your pet. Let us go on <br/> a path towards a better, happier life together!</span>
        <img src={image1} alt="" className='image' />
        <Link to="/excerseInput">
        <button className='get-started'>Get Started</button>
        </Link>
        
      </div>
      
      

    </div>
   
  )
}

export default ExcerisePlanner
