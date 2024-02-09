import React from 'react'
import './ForgotPassword.css'
import { Navbar } from '../../NavigationBar/Navbar'
import MainContent from '../../MainContent/MainContent'
import backbtn from '../../../assets/back.png'
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const ForgotPassword = () => {
  return (
    <div className=''>
      <Navbar/>
      <MainContent/>
      <div className="forgotPw-content">
        <h3>Reset Password</h3>
        <p>An email with a verification link will be sent shortly,<br />
           Try to reset your password Using that.</p>
      </div>
      <Link to="/Login">
      <img src={backbtn} alt="" className='back-img'/>
      </Link>
      
      <form className="reset-content">
      <label className='resetPw-lbl'>
            Email :
            <br />
            <input
              type="text"
              required
              className='input-field'
            />
          </label>
          <button type="submit" className='reset-btn'>Send</button>
      </form>
    </div>
  )
}

export default ForgotPassword
