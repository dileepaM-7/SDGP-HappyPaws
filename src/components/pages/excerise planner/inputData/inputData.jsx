import React from 'react'
import './inputData.css'
import { Navbar } from '../../../NavigationBar/Navbar'

const InputData = () => {
  return (
    <div className='all'>
      <Navbar/>
      <h1>Find a Safe Exercise Routine for Your Pet</h1>

            <fieldset className='set1'> 
            <form action="#" method="get">  
            <img src={petName} alt="" /> 
                    <input 
                        type="text"
                        name="firstname"
                        id="firstname"
                        placeholder="Enter pet Name"
                        required 
                    />              
              </form>


              <label for="Age" ></label> 
                    <br /> 
                    <input type="radio" name="age"
                        value="" id="0-10" /> 0-10 

                    <input type="radio" name="age"
                        value="" id="female" /> 
                    10-15 
                    <input type="radio" name="age"
                        value="" id="other" /> 
                    15-20


                    </fieldset>







    </div>
  )
}
export default InputData;
