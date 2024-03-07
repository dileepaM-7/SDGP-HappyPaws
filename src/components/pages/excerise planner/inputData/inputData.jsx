import React from 'react'
import './inputData.css'
import { Navbar } from '../../../NavigationBar/Navbar'
import arrow from '../../../../assets/arrow.png'
// import ExerciseCardImage1 from '../../../../assets/ExerciseCard1.png'
import TinyDog1 from '../../../../assets/tinyDog1.jpg'
import ActiveDogBreed1 from '../../../../assets/ActiveDogBreed1.gif'
import backgroundex from '../../../../assets/BackgroundTiny.avif'

const InputData = () => {

  return (
    <div className='InputData-Cardall'id='InputData'>
      <div className='Input-header'>
        <span className='stroke-text'>Find </span>
        <span>best match</span>
        <span className='stroke-text'>Exercise Plan</span>
      </div>

      <div className='breed-card'>
        <div className='breed-card1'> 
          
          <span className='card-header1'>Tiny Dog Breeds:</span>
          <span className='dogsBreedsText'>Chihuahua<br/>
                                          Pomeranian<br/>
                                          Yorkshire Terrier<br/>
                                          Shih Tzu<br/>
                                          Maltese</span>
                                
          <span></span>
          <div className='Exe-Join-Now'>
          
            <div className='ExerciseMoreInfo'>  
            <span className='JoinNowText'>Join Now
            <img src={arrow}alt="" className='arrow-input' />
            </span>
            
            </div>
          </div>
        </div>

        <div className='breed-card2'> 
          <span className='card-header1'>Active Dog Breeds:</span>
          <span className='dogsBreedsText'>Labrador Retriever<br/>
          Terrier<br/>
          Golden Retriever</span>
          <span></span>
          <div className='Exe-Join-Now2'>
            <span>Join Now</span>
            <img src={arrow}alt="" className='arrow-input' />
          </div>
        </div>
        <div className='breed-card3'> 
          <span className='card-header1'>Low-Shedding Dog Breeds:</span>
          <span className='dogsBreedsText1'>Shih Tzu<br/>
            Poddle</span>
          <span></span>
          <div className='Exe-Join-Now3'>
            <span className='JoinNowText'>Join Now</span>
            <img src={arrow}alt="" className='arrow-input1' />
          </div>
        </div>
        <div className='breed-card4'> 
          <span className='card-header1'>Large Dog Breeds:
          </span>
          <span className='dogsBreedsText1'>details</span>
          <span></span>
          <div className='Exe-Join-Now4'>
            <span className='JoinNowText'>Join Now</span>
            <img src={arrow}alt="" className='arrow-input2' />
          </div>
        </div>
        <div className='breed-card5'> 
          <span className='card-header1'>Apartment-Friendly <br/>Dog Breeds:
          </span>
          <span className='dogsBreedsText1'>details</span>
          <span></span>
          <div className='Exe-Join-Now5'>
            <span className='JoinNowText5'>Join Now</span>
            <img src={arrow}alt="" className='arrow-input5' />
          </div>
        </div>
      </div>
      
      <br/> <br/> <br/> 
      <div className='inputBottom'>
        <div className='TinybreedExercises'>
        <span className='TinybreedExercises-header'>1. Exercise for Tiny Dog Breeds: </span><br/>
        <span className='TinybreedExercises-topic1'>Lower Weight:</span>
        <p className='ExercisePara'>
          <span className='extopic2'>Up to 1 year: </span> Short walks (10-15 minutes) 3-4 times a day, indoor play sessions with toys.<br/>
          <span className='extopic2'>1-7 years:</span> Moderate walks (15-20 minutes) 2-3 times a day, interactive indoor games.<br/>
         <span className='extopic2'> 7+ years:</span> Short walks (10-15 minutes) 1-2 times a day, gentle indoor exercises like stretching and light play.</p>
          <span className='TinybreedExercises-topic1'>Normal Weight: </span><br/>
          <p className='ExercisePara'>Up to 1 year: Moderate walks (15-20 minutes) 3-4 times a day, indoor play sessions with toys.<br/>
          1-7 years: Regular walks (20-30 minutes) 2-3 times a day, interactive indoor games.<br/>
          7+ years: Moderate walks (15-20 minutes) 1-2 times a day, light indoor exercises like gentle fetch.</p>
          <span className='TinybreedExercises-topic1'>Overweight: </span><br/>
          <p className='ExercisePara'>Up to 1 year: Controlled walks (10-15 minutes) 3-4 times a day, indoor play sessions with toys.<br/>
          1-7 years: Gradual increase in walks (15-20 minutes) 2-3 times a day, controlled indoor activities.<br/>
          7+ years: Low-impact walks (10-15 minutes) 1-2 times a day, light indoor exercises focusing on weight management.</p>
      </div>
      </div> 
    </div>
  )
}
export default InputData;
