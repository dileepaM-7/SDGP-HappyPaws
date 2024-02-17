import React from 'react'
import './ExcerisePlanner.css'
import { Navbar } from '../../NavigationBar/Navbar'
import { Link } from 'react-router-dom';
import ExerciseDogImage from '../../../assets/exerciseDog1 .jpg'
import ExerciseDogImage2 from '../../../assets/exerciseDogForm1.jpg'
import exerciseDogImage3 from '../../../assets/exerciseDogForm2.jpg'


const ExcerisePlanner = () => {
  return (
    <div className='excerise-all'>
      <Navbar/>
      <div>
       <span className='Exercise-text1'>Get Your Exercise Planner</span> 
      <span className='Exercise-text2'>Let's Make Your Furry Friends</span><br/>
      <span className='Exercise-text3'>Healthy</span><br/>
      <span className='Exercise-text4'>and</span><br/>
      <span className='Exercise-text5'>Happy</span> <br/><br/>
      <span className='Exercise-para1'>We understand how important it is to keep our pets happy and healthy. <br/>
        Here, you'll find skillfully designed workout schedules adapted to your pet's requirements. <br/>
        Our programs, which include enjoyable games and engaging exercises, are intended to enhance <br/> your pet's physical condition, 
        provide and deepen your relationship with your pet. Let us go on <br/> a path towards a better, happier life together!</span>
        <img src={ExerciseDogImage}alt="" className='ExerciseDogImage1'/>      
        <Link to="/start">
          <button className='ExerciseButton1'>Get Started</button>
        </Link> 
      </div>
      <div className='Exercise-bottom'>
      <div className='Exercise-Form'>
        <span className='ExerciseForm-text1'>Add Pet details here</span>
        <form action="" >
        <br/><br/>
          <input type="text" name="breed" id="" placeholder='Pet Breed'
          className='ExerciseInput1' />
          <br/>
          <input type="text"
          name='Weight'
          placeholder='Pet Weight'
          className='ExerciseInput2' />
          <br/>
          <input type="text"
          name='Age' 
          placeholder='Age'
          className='ExerciseInput3'/>
        <Link to="">
        <button className='Exercise-submit'>Get plan</button>
        </Link> </form>
        <img src={ExerciseDogImage2} alt="" className='ExerciseDogImage2' />
        <img src= {exerciseDogImage3} alt="" className='ExerciseDogImage3'/>
      </div>







      </div>
      
    </div>
   
  )
}

export default ExcerisePlanner 
