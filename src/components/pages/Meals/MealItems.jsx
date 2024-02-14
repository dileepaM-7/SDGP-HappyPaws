import React from 'react'
import DogFood from '../../../assets/DogFood.jpg';

const MealItems=(getMeal)=> {
    console.log(getMeal.data)
    
  return (
    <>
    <div className='card'>
        <img src={DogFood}></img>
        <div className='info'>
            <h2>Beef</h2>
            <p>Beef Based</p>
     
        </div>
        <div className='recipe'>
            <h2>Reciepie</h2>
            <p>Lean ground beef cooked with sweet potatoes, carrots, and peas in a savory beef broth. This hearty stew provides a balance of protein, carbohydrates, and essential nutrients for your dog's overall health and energy needs.</p>
            <img src={DogFood}></img>
            <a>Watch Video</a>

        </div>
        </div>
    </>
  )
}

export default MealItems