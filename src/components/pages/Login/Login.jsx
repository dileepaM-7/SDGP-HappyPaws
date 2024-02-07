import React, { useState } from 'react';
import MainContent from '../../MainContent/MainContent';
import { Navbar } from '../../NavigationBar/Navbar';
import './Login.css'; // Import a separate CSS file for styling
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const Register = () => {
  // State variables to store the input values
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Function to handle form submission
  const handleFormSubmit = (event) => {
    event.preventDefault();

    // Perform authentication or any other logic here with the username and password
    console.log('Username:', username);
    console.log('Password:', password);

    // Reset the form fields
    setUsername('');
    setPassword('');
  };

  return (
    <div className="register-container">
      <Navbar />
      <MainContent className="main-content" />
      
      <div className="form-content">
        <form onSubmit={handleFormSubmit}>
          <label className='userName-lbl'>
            Username :
            <br />
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className='input-field'
            />
          </label>
          <br />
          <label className='password-lbl'>
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
          <a href="" className='forgetPw-lbl'>Forgot Password?</a>
          </Link>
          
          <br />
          <button type="submit" className='login-btn'>Login</button>
        </form>
        <Link to="/Register">
        <button className='Register-btn'>Register</button> 
        </Link>    
      </div>
    </div>
  );
};

export default Register;
