import React from 'react'
import './Register.css'
import { Navbar } from '../../NavigationBar/Navbar'
import MainContent from '../../MainContent/MainContent'
const Register = () => {
  return (
    <div >
      <Navbar/>
      <MainContent className="main-content" />
      <div className="form-content">
        <form >
          <label className='Name-lbl'>
          Username :
          <input
              type="text"
              required
              className='input-field'
            />
          </label>
          <label className='email-lbl'>
          Email :
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
        </form>
      </div>
      
    </div>
  )
}

export default Register
