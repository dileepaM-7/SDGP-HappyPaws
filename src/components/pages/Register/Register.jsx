import React from 'react'
import './Register.css'
import { Navbar } from '../../NavigationBar/Navbar'
import MainContent from '../../MainContent/MainContent'
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import googleImg from "../../../assets/google.png"

const Register = () => {
  return (
    <div >
      <Navbar/>
      <MainContent className="main-content" />
      <div className="form-content">
        <h3>Please enter your details</h3>
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
        <h6 className='log-label'>- Already have an account -</h6>
        </Link>
        <button className='google-btn'><img src={googleImg} alt="" className='google-image'/> Sign with google</button>
      </div>
    </div>
  )
}

export default Register
