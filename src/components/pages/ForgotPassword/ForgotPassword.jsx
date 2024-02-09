import React from 'react'
import './ForgotPassword.css'
import { Navbar } from '../../NavigationBar/Navbar'
import MainContent from '../../MainContent/MainContent'

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
    </div>
  )
}

export default ForgotPassword
