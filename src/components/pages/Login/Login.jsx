import React, { useState } from 'react';
import MainContent from '../../MainContent/MainContent';
import { Navbar } from '../../NavigationBar/Navbar';
import './Login.css';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();

    // Perform form validation
    if (!email || !password) {
      setError('Please fill in all the fields.');
      return;
    }

    // If form is valid, navigate to the home page
    // Replace '/' with the actual path to your home page
    window.location.href = '/';
  };

  return (
    <div className="login-container">
      <Navbar />
      <MainContent className="main-content" />

      <div className="login-form-content">
        <h3>Enter your Credentials</h3>
        <form onSubmit={handleFormSubmit}>
          <label className='login-email-lbl'>
            Email :
            <br />
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className='input-field'
            />
          </label>
          <br />
          <label className='login-password-lbl'>
            Password :
            <br />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className='input-field'
            />
          </label>
          <Link to="/ForgotPassword">
            <span className='forgot-password-link'>Forgot Password?</span>
          </Link>
          {error && <p className="error-message">{error}</p>}
          <br />
          <Link to="/"><button type="submit" className='login-btn'>Log In</button></Link>
          
        </form>
        <Link to="/Register">
          <h6 className='create-account-link'>- Create an account -</h6>
        </Link>
      </div>
    </div>
  );
};

export default Login;
