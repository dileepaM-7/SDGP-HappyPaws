import React, { useState } from 'react';
//import { useHistory } from 'react-router-dom';
import MainContent from '../../MainContent/MainContent';
import { Navbar } from '../../NavigationBar/Navbar';
import './Login.css';
import { Link } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../firebase-config';
import { getDatabase, ref, child, get, set } from 'firebase/database';
const Login = () => {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleFormSubmit = async (event) => {
    event.preventDefault();
  
    // Perform form validation
    if (!email || !password) {
      setError('Please fill in all the fields.');
      return;
    } else {
      try {
        const user = await signInWithEmailAndPassword(auth, email, password);
  
        // Check if the user has business details
        const dbRef = ref(getDatabase());
        const userRef = child(dbRef, 'UserData');
  
        const snapshot = await get(userRef);
        if (snapshot.exists()) {
          const users = Object.entries(snapshot.val());
          const currentUserEntry = users.find(([key, user]) => user.Email === email);
  
          if (currentUserEntry) {
            const [, currentUser] = currentUserEntry;
  
            if (currentUser.bussinessDetails) {
              // If business details exist, navigate to the business profile page
              window.location.href = '/bussinessProfile';
            } else {
              // If no business details, navigate to the home page
              window.location.href = '/';
            }
          }
        }
      } catch (error) {
        console.log(error.message);
        setError('Login failed. Please try again.'); // Set an error message for the user
      }
    }
  };
  
  
  return (
    <div className="login-container">
      
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
          <button type="submit" className='login-btn' >Log In</button>
        </form>
        <Link to="/Register">
          <h6 className='create-account-link'>- Create an account -</h6>
        </Link>
      </div>
    </div>
  );
};

export default Login;
