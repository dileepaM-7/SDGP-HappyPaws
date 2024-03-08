import React from 'react'
import './ExcerisePlanner.css'
import { Navbar } from '../../NavigationBar/Navbar'
import Footer from "../../Footer/Footer";
import { Link } from 'react-router-dom';
import ExerciseDogImage from '../../../assets/exerciseDog1 .jpg'
import ExerciseDogImage2 from '../../../assets/exerciseDogForm1.jpg'
import exerciseDogImage3 from '../../../assets/exerciseDogForm2.jpg'
import exerciseCardImage1 from '../../../assets/ExerciseCardImage1.jpg'
import WeightSymbolGreen from '../../../assets/WeightSymbol.png'
import WeightSymbolRed from '../../../assets/WeightOver.png'
import WeightSymbolOrange from '../../../assets/WeightLower.png'
import WoofImage from '../../../assets/Woof.png'
import InputData from './inputData/inputData';


const ExcerisePlanner = () => {
  return (
    <section className='excersie-section'>
      <div>
      <Navbar/>
      <div className='Exercise-allPage'>
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
            <button className='ExerciseButton1'>Get Started</button>
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
        </Link> 
        </form>
        <img src={ExerciseDogImage2} alt="" className='ExerciseDogImage2' />
        <img src= {exerciseDogImage3} alt="" className='ExerciseDogImage3'/>
        <img src={WoofImage} alt="" className='WoofImage' />

      {/*
      <div className='Exercise-card-Adult'>
      <div className='Exercise-card1'>
        <img src={exerciseCardImage1} alt="" className='ExerciseCardDogImage2' />
        <div className='ExerciseCard-info'>
        <img src={WeightSymbolOrange} alt="" className='ExerciseCardDogImage2i' />
        <span className='WeightText'>Adult Dogs </span>
        <p>Longer walks and more engaged playtime can help boost activity slightly.
        30-45 minutes of activity, such as walks or games, divided into 2-3 sessions each day.
        </p>
        <div className='Exercise-ViewmoreButton'>
        <button  >
          <a ><span>View More</span></a></button> </div>
        </div>
      </div>
      <div className='Exercise-card2'>
        <img src={exerciseCardImage1} alt="" className='ExerciseCardDogImage2' />
        <div className='ExerciseCard-info'>
        <img src={WeightSymbolGreen} alt="" className='ExerciseCardDogImage2i' />
        <span className='WeightText'>Adult Dogs </span>
        <p>This can be as simple as taking a couple of slow walks and playing indoors. Make sure to listen to your dog, since these breeds might be tired very quickly.</p>
        <button className='Exercise-ViewmoreButton'>View More</button>
          </div>
      </div>
      <div className='Exercise-card3'>
        <img src={exerciseCardImage1} alt="" className='ExerciseCardDogImage2' />
        <div className='ExerciseCard-info'>
        <img src={WeightSymbolRed} alt="" className='ExerciseCardDogImage2i' />
        <span className='WeightText'>Adult Dogs </span>
        <p>To manage weight, gradually increase activity with longer walks and a restricted diet.
          20-30 minutes of low-impact activities, like as walks or indoor play, divided into 2-3 sessions per day.
        </p>
        <button className='Exercise-ViewmoreButton'>View More</button>
          </div>
      </div>
      </div>


      <div className='Exercise-card-Adult'>
      <div className='Exercise-card1'>
        <img src={exerciseCardImage1} alt="" className='ExerciseCardDogImage2' />
        <div className='ExerciseCard-info'>
        <img src={WeightSymbolOrange} alt="" className='ExerciseCardDogImage2i' />
        <span className='WeightText'>Senior Dogs </span>
        <p>Longer walks and more engaged playtime can help boost activity slightly.
        30-45 minutes of activity, such as walks or games, divided into 2-3 sessions each day.
        </p>
        <div className='Exercise-ViewmoreButton'>
        <button  >
          <a ><span>View More</span></a></button> </div>
        </div>
      </div>
      <div className='Exercise-card2'>
        <img src={exerciseCardImage1} alt="" className='ExerciseCardDogImage2' />
        <div className='ExerciseCard-info'>
        <img src={WeightSymbolGreen} alt="" className='ExerciseCardDogImage2i' />
        <span className='WeightText'>Senior Dogs </span>
        <p>This can be as simple as taking a couple of slow walks and playing indoors. Make sure to listen to your dog, since these breeds might be tired very quickly.</p>
        <button className='Exercise-ViewmoreButton'>View More</button>
          </div>
      </div>
      <div className='Exercise-card3'>
        <img src={exerciseCardImage1} alt="" className='ExerciseCardDogImage2' />
        <div className='ExerciseCard-info'>
        <img src={WeightSymbolRed} alt="" className='ExerciseCardDogImage2i' />
        <span className='WeightText'>Senior Dogs </span>
        <p>To manage weight, gradually increase activity with longer walks and a restricted diet.
          20-30 minutes of low-impact activities, like as walks or indoor play, divided into 2-3 sessions per day.
        </p>
        <button className='Exercise-ViewmoreButton'>View More</button>
          </div>
      </div>
      </div>*/}
    <InputData/>
        </div>
      </div>
    </div>
    </section>
  )
}
export default ExcerisePlanner 
