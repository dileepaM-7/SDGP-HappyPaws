import React from 'react'
import DogFood from '../../../assets/DogFood.jpg';
import BrownRice from'../../../assets/Brownrice.jpg';
import Salmon from'../../../assets/Salmon.jpg';

const MealItems=(getMeal)=> {
    console.log(getMeal.data)
    
  return (
    <>
    <div className='card'>
        <img src={DogFood}></img>
        <div className='info'>
            <h2>Beef and Sweet Potato </h2>
            <p>Beef Based</p>
     
        </div>
        <div className='recipe'>
            <h2>Recipe</h2>
            <p>Lean ground beef cooked with sweet potatoes, carrots, and peas in a savory beef broth. This hearty stew provides a balance of protein, carbohydrates, and essential nutrients for your dog's overall health and energy needs.</p>
            <br/>
            <img src={DogFood}></img>
            <a>Watch Video</a>

        </div>
        </div>
        <div className='card2'>
        <img src={BrownRice}></img>
        <div className='info'>
            <h2>Chicken and Brown Rice Casserole </h2>
            <p>Chicken Based</p>
     
        </div>
        <div className='recipe2'>
            <h2>Recipe</h2>
            <p>Tender chicken breast simmered with brown rice, broccoli, and carrots in a flavorful chicken broth. This casserole is packed with lean protein, fiber-rich grains, and vitamins to support your dog's muscle development and digestion.</p>
            <br/>
            <img src={BrownRice}></img>
            <a>Watch Video</a>

        </div>
        </div>
        <div className='card3'>
        <img src={Salmon}></img>
        <div className='info'>
            <h2>Salmon and Quinoa Pilaf </h2>
            <p>Fish Based</p>
     
        </div>
        <div className='recipe3'>
            <h2>Recipe</h2>
            <p>Fresh salmon flakes mixed with quinoa, spinach, and zucchini, cooked in a light fish broth. Rich in omega-3 fatty acids and antioxidants, this pilaf promotes healthy skin, coat, and joint function for your canine companion.</p>
            <br/>
            <img src={Salmon}></img>
            <a>Watch Video</a>

        </div>
        </div>
    </>
  )
}

export default MealItems