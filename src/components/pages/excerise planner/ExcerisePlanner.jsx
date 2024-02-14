import React from 'react'
import './ExcerisePlanner.css'
import { Navbar } from '../../NavigationBar/Navbar'
import image1 from "../../../assets/exercise1.png";
<<<<<<< Updated upstream

=======
import { Link } from 'react-router-dom';
import petExercise from '../../../assets/exercisepage1.jpg'
>>>>>>> Stashed changes


const ExcerisePlanner = () => {
  return (
    <div className='all'>
      <Navbar/>

      <div className='text1'>
       <span className='welcome'>Exercise Planner</span> 
      <span className='wake'>Wake UP.</span><br/>
      <span className='work'>Work Out.</span> <br/><br/>
      <span className='para'>We understand how important it is to keep our pets happy and healthy. <br/>
        Here, you'll find skillfully designed workout schedules adapted to your pet's requirements. <br/>
        Our programs, which include enjoyable games and engaging exercises, are intended to enhance <br/> your pet's physical condition, 
        provide and deepen your relationship with your pet. Let us go on <br/> a path towards a better, happier life together!</span>
        <img src={image1} alt="" className='image' />
<<<<<<< Updated upstream
        <button className='get-started'>Get Started</button>
=======
        <Link to="/excerseInput">
        <button className='get-started'>Get Started  </button>
        </Link>
        
>>>>>>> Stashed changes
      </div>
      <div className='bottom'>
        <h1 className='topic'>Find a Safe Exercise Routine for Your Pet</h1>
        
        <div className='form1'>
        <br/>
        <h1>We Love Your pets</h1>
        <h5>Please enter the details for  get exercise plan</h5>
        <form action="" >
        <br/><br/>
          <input type="text" name="breed" id="" placeholder='Pet Breed'
          className='breed' />
          <br/>
          <input type="text"
          name='Weight'
          placeholder='Pet Weight'
          className='Weight' />
          <br/>
          <input type="text"
          name='Age' 
          placeholder='Age'
          className='Age'/>
        <Link to="">
        <button className='submit'>submit</button>
        </Link>


        </form>
        
         
        </div>
       
      </div>
      
      <img src={petExercise} alt=""  className='image2'/>

    </div>
   
  )
}

export default ExcerisePlanner
