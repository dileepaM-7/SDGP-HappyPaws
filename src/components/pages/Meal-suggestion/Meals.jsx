import React, { useEffect, useState } from 'react';
import './Meals.css';
import { Navbar } from '../../NavigationBar/Navbar';

function Meals() {
  const [breed, setBreed] = useState('');
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');

  useEffect(() => {
    // Your useEffect logic here
  }, []);

  const handleGenerateClick = () => {
    // Validate age and weight
    if (isNaN(age) || age <= 0) {
      alert('Please enter a valid age.');
      return;
    }

    if (isNaN(weight) || weight <= 0) {
      alert('Please enter a valid weight.');
      return;
    }

    // Continue with the logic for generating recommendations
    console.log('Generating recommendations for:', breed, age, weight);
  };

  return (
    <div className='main'>
      <Navbar />
      <div className='heading'>
        <h2 className='meal-suggestion-head'>Meal Suggestion</h2>
        <div className='container1'>
          {/* Your video element */}
        </div>
        <div className='meal-description'>
          <h4>Enter Your Pet details to get unique Food recommendations!</h4>
        </div>
      </div>

      <div className='meal-data-input'>
        <input
          type="text"
          className='search-bar'
          placeholder='Breed'
          value={breed}
          onChange={(e) => setBreed(e.target.value)}
        />
        <input
          type="number"
          className='search-bar'
          placeholder='Age (Y)'
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <input
          type="number"
          className='search-bar'
          placeholder='Weight (KG)'
          step="0.1" // Allows decimal numbers
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
      </div>
      <button className='meal-genarate-btn' onClick={handleGenerateClick}>
        Generate
      </button>
      
      <div className='mealitems'> 
        <p >Suggestions</p>
        <ul>
          <li>
            item 1
          </li>
          <li>
            item 2
          </li>
          <li>
            item 3
          </li>
          <li>
            item 4
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Meals;
