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
        Choose Your Pet Category <br />
      </div>
      <div className='breed-card'>
        <div className='breed-card1'> 
          <span className='card-header1'>Tiny Dog Breeds</span>
          <span className='dogsBreedsText'>Chihuahua<br/>
                                          Pomeranian<br/>
                                          Yorkshire Terrier<br/>
                                          Shih Tzu<br/>
          </span>
          <div className='Exe-Join-Now'>
            <div className='ExerciseMoreInfo'>  
            <span className='JoinNowText'>Get Now
            <img src={arrow}alt="" className='arrow-input' />
            </span>
            </div>
          </div>
        </div>

        <div className='breed-card2'> 
          <span className='card-header1'>Active Dog Breeds</span>
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
          <span className='card-header1'>Low-Shedding Dog Breeds</span>
          <span className='dogsBreedsText1'>Shih Tzu<br/>
            Poddle</span>
          <span></span>
          <div className='Exe-Join-Now3'>
            <span className='JoinNowText'>Join Now</span>
            <img src={arrow}alt="" className='arrow-input1' />
          </div>
        </div>
        <div className='breed-card4'> 
          <span className='card-header1'>Large Dog Breeds
          </span>
          <span className='dogsBreedsText1'>details</span>
          <span></span>
          <div className='Exe-Join-Now4'>
            <span className='JoinNowText'>Join Now</span>
            <img src={arrow}alt="" className='arrow-input2' />
          </div>
        </div>
        <div className='breed-card5'> 
          <span className='card-header1'>Apartment-Friendly <br/>Dog Breeds
          </span>
          <span className='dogsBreedsText1'>details</span>
          <span></span>
          <div className='Exe-Join-Now5'>
            <span className='JoinNowText5'>Join Now</span>
            <img src={arrow}alt="" className='arrow-input5' />
          </div>
        </div>
      </div>
      
      <br/> 
      <div className='inputBottom'>
        <div className='CardOfTiny'>
        <div className='TinybreedExercises'>
          <span className='TinybreedExercises-header'>Exercise for Tiny Dog Breeds</span><br/><br/>
          <span className='TinybreedExercises-topic1'>Lower-Weight:</span>
          <p className='ExercisePara'>
          <span className='extopic2'>Up to 1 year: </span> Short walks (10-15 minutes) 3-4 times a day, <a href='' className='linkToIndoorGames'>indoor play sessions</a> with toys.<br/>
          <span className='extopic2'>1-7 years:</span> Moderate walks (15-20 minutes) 2-3 times a day, interactive indoor games.<br/>
          <span className='extopic2'> 7+ years:</span> Short walks (10-15 minutes) 1-2 times a day, gentle indoor exercises like stretching and light play.</p><br/>
          <span className='TinybreedExercises-topic1'>Normal-Weight: </span><br/>
          <p className='ExercisePara'><span className='extopic2'>Up to 1 year:</span> Moderate walks (15-20 minutes) 3-4 times a day, indoor play sessions with toys.<br/>
          <span className='extopic2'>1-7 years:</span> Regular walks (20-30 minutes) 2-3 times a day, interactive indoor games.<br/>
          <span className='extopic2'>7+ years: </span>Moderate walks (15-20 minutes) 1-2 times a day, light indoor exercises like gentle fetch.</p><br/>
          <span className='TinybreedExercises-topic1'>Over-Weight: </span><br/>
          <p className='ExercisePara'><span className='extopic2'>Up to 1 year:</span> Controlled walks (10-15 minutes) 3-4 times a day, indoor play sessions with toys.<br/>
          <span className='extopic2'>1-7 years:</span> Gradual increase in walks (15-20 minutes) 2-3 times a day, controlled indoor activities.<br/>
          <span className='extopic2'>7+ years:</span> Low-impact walks (10-15 minutes) 1-2 times a day, light indoor exercises focusing on weight management.</p>
          </div>
        </div>
        
        <div className='CardOfLeftSide'>
        <div className='ActivebreedExercises'><br/>
          <span className='ActivebreedExercises-header'>Exercise for Active Dog Breeds</span><br/><br/><br/>
          <span className='ActivebreedExercises-topic1'>Lower Weight:</span>
          <p className='ActiveExercisePara'>
          <span className='Activeextopic2'>Up to 1 year: </span> Supervised play in a safe environment, short walks (15-20 minutes) 3-4 times a day.<br/>
          <span className='extopic2'>1-7 years:</span> Regular walks (30-45 minutes) 2-3 times a day, agility training,fun activities.<br/>
          <span className='extopic2'> 7+ years:</span> Moderate walks (20-30 minutes) 1-2 times a day, mentally stimulating activities, low-impact exercises.</p><br/>
          <span className='ActivebreedExercises-topic1'>Normal Weight: </span><br/>
          <p className='ActiveExercisePara'>
          <span className='extopic2'>Up to 1 year:</span> Structured play sessions, longer walks (20-30 minutes) 3-4 times a day.<br/>
          <span className='extopic2'>1-7 years:</span> Brisk walks (45-60 minutes) 2-3 times a day, obedience training, fetch, agility.<br/>
          <span className='extopic2'>7+ years:</span> Longer walks (30-45 minutes) 1-2 times a day, swimming, brain games, moderate agility.</p><br/>
          <span className='ActivebreedExercises-topic1'>Over Weight: </span><br/>
          <p className='ActiveExercisePara'>
          <span className='extopic2'>Up to 1 year:</span> Structured play sessions, controlled walks (15-20 minutes) 3-4 times a day.<br/>
          <span className='extopic2'>1-7 years:</span> Progressive increase in walk time (20-30 minutes) Weight management exercises are performed 2-3 times a day, as is controlled agility.<br/>
          <span className='extopic2'>7+ years:</span> Low-impact walks (20-30 minutes) 1-2 times a day, swimming, joint-friendly exercises, portion-controlled diet.</p>
          </div>
        </div>


        <div className='CardOfTiny'>
        <div className='ShadingbreedExercises'>
        <span className='SheddingbreedExercises-header'>Exercise for Tiny Dog Breeds</span><br/><br/><br/>
          <span className='SheddingbreedExercises-topic1'>Lower-Weight:</span>
          <p className='SheddingExercisePara'>
          <span className='Sheddingextopic2'>Up to 1 year: </span> Short walks (10-15 minutes) 3-4 times a day, <a href='' className='linkToIndoorGames'>indoor play sessions</a> with toys.<br/>
          <span className='Sheddingextopic2'>1-7 years:</span> Moderate walks (15-20 minutes) 2-3 times a day, interactive indoor games.<br/>
          <span className='Sheddingextopic2'> 7+ years:</span> Short walks (10-15 minutes) 1-2 times a day, gentle indoor exercises like stretching and light play.</p><br/><br/>
          <span className='SheddingbreedExercises-topic1'>Normal-Weight: </span><br/>
          <p className='SheddingExercisePara'>
          <span className='Sheddingextopic2'>Up to 1 year:</span> Moderate walks (15-20 minutes) 3-4 times a day, indoor play sessions with toys.<br/>
          <span className='Sheddingextopic2'>1-7 years:</span> Regular walks (20-30 minutes) 2-3 times a day, interactive indoor games.<br/>
          <span className='Sheddingextopic2'>7+ years: </span>Moderate walks (15-20 minutes) 1-2 times a day, light indoor exercises like gentle fetch.</p><br/><br/>
          <span className='SheddingbreedExercises-topic1'>Over-Weight: </span><br/>
          <p className='SheddingExercisePara'>
          <span className='Sheddingextopic2'>Up to 1 year:</span> Controlled walks (10-15 minutes) 3-4 times a day, indoor play sessions with toys.<br/>
          <span className='Sheddingextopic2'>1-7 years:</span> Gradual increase in walks (15-20 minutes) 2-3 times a day, controlled indoor activities.<br/>
          <span className='Sheddingextopic2'>7+ years:</span> Low-impact walks (10-15 minutes) 1-2 times a day, light indoor exercises focusing on weight management.</p><br/>
          </div>
          </div>


        <div className='CardOfLeftSide'>
          <div className='LargebreedExercises'><br/>
          <span className='ActivebreedExercises-header'>Exercise for Active Dog Breeds</span><br/><br/><br/>
            <span className='ActivebreedExercises-topic1'>Lower Weight:</span>
            <p className='ActiveExercisePara'>
            <span className='Activeextopic2'>Up to 1 year: </span> Supervised play in a safe environment, short walks (15-20 minutes) 3-4 times a day.<br/>
            <span className='Activeextopic2'>1-7 years:</span> Regular walks (30-45 minutes) 2-3 times a day, obedience training, fetch, hiking.<br/>
            <span className='Activeextopic2'> 7+ years:</span>  Moderate walks (20-30 minutes) 1-2 times a day, swimming, mentally stimulating games.</p><br/><br/>
            <span className='ActivebreedExercises-topic1'>Normal Weight: </span><br/>
            <p className='ActiveExercisePara'>
            <span className='extopic2'>Up to 1 year:</span> Structured play sessions, longer walks (20-30 minutes) 3-4 times a day.<br/>
            <span className='extopic2'>1-7 years:</span> Brisk walks (45-60 minutes) 2-3 times a day, jogging, agility training, swimming.<br/>
            <span className='extopic2'>7+ years:</span>  Longer walks (30-45 minutes) 1-2 times a day, hiking on easy terrain, brain games, swimming.</p><br/><br/>
            <span className='ActivebreedExercises-topic1'>Over Weight: </span><br/>
            <p className='ActiveExercisePara'>
            <span className='extopic2'>Up to 1 year:</span> Structured play sessions, controlled walks (15-20 minutes) 3-4 times a day.<br/>
            <span className='extopic2'>1-7 years:</span> Gradual increase in walks (20-30 minutes) 2-3 times a day, weight management exercises, controlled agility.<br/>
            <span className='extopic2'>7+ years:</span> Low-impact walks (20-30 minutes) 1-2 times a day, swimming, joint-friendly exercises, portion-controlled diet.</p>
          </div>
        </div>  

        <div className='CardOfTiny'>
          <div className='ApartmentbreedExercises'> <br/>
          <span className='TinybreedExercises-header'>Exercise for Tiny Dog Breeds</span><br/><br/><br/>
            <span className='TinybreedExercises-topic1'>Lower-Weight:</span>
            <p className='ApartmentExercisePara'>
            <span className='Apartmentextopic2'>Up to 1 year: </span> Short walks (10-15 minutes) 3-4 times a day, indoor play sessions with toys.<br/>
            <span className='Apartmentextopic2'>1-7 years:</span> Moderate walks (15-20 minutes) 2-3 times a day, interactive indoor games.<br/>
            <span className='Apartmentextopic2'> 7+ years:</span> Short walks (10-15 minutes) 1-2 times a day, gentle indoor exercises like stretching and light play.</p><br/><br/>
            <span className='TinybreedExercises-topic1'>Normal-Weight: </span><br/>
            <p className='ApartmentExercisePara'><span className='extopic2'>Up to 1 year:</span> Moderate walks (15-20 minutes) 3-4 times a day, indoor play sessions with toys.<br/>
            <span className='Apartmentextopic2'>1-7 years:</span> Regular walks (20-30 minutes) 2-3 times a day, interactive indoor games.<br/>
            <span className='Apartmentextopic2'>7+ years: </span>Moderate walks (15-20 minutes) 1-2 times a day, light indoor exercises like gentle fetch.</p><br/><br/>
            <span className='TinybreedExercises-topic1'>Over-Weight: </span><br/>
            <p className='ApartmentExercisePara'><span className='extopic2'>Up to 1 year:</span> Controlled walks (10-15 minutes) 3-4 times a day, indoor play sessions with toys.<br/>
            <span className='Apartmentextopic2'>1-7 years:</span> Gradual increase in walks (15-20 minutes) 2-3 times a day, controlled indoor activities.<br/>
            <span className='Apartmentextopic2'>7+ years:</span> Low-impact walks (10-15 minutes) 1-2 times a day, light indoor exercises focusing on weight management.</p>
            </div>
        </div>    
      </div>
       
    </div>
    
  )
}
export default InputData;


