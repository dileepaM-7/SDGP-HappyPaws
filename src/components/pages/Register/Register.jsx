import React from 'react'
import './Register.css'
import { Navbar } from '../../NavigationBar/Navbar'
import MainContent from '../../MainContent/MainContent'
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const Register = () => {
  return (
    <div >
      <Navbar/>
      <MainContent className="main-content" />
      <div className="form-content">
        <form >
          <label className='userName-lbl'>
          Username :
          <input
              type="text"
              required
              className='input-field'
            />
          </label>
          <label className='email-lbl'>
          Email :
          <br />
          <input
              type="text"
              required
              className='input-field'
            />
          </label>
          <label className='password-lbl'>
          Password :
          <input
              type="text"
              required
              className='input-field'
            />
          </label>
          <label className='confirmPassword-lbl'>
          Confirm Password :
          <input
              type="text"
              required
              className='input-field'
            />
          </label>
          <button type="submit" className='reg-btn'>Register</button>
        </form>
        <Link to="/Login">
        <button className='log-btn'>Login</button> 
        </Link>  
      </div>
      
    </div>
  )
}

export default Register
