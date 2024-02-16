import React, { useState } from 'react';
import './Register.css';
import MainContent from '../../MainContent/MainContent';
import { Link } from 'react-router-dom';
import googleImg from '../../../assets/google.png';
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from '../../../firebase-config';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [userType, setUserType] = useState('petOwner'); // Default to pet owner
  const [error, setError] = useState('');

  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentuser) => {
    setUser(currentuser);
  });

  const register = async (event) => {
    event.preventDefault();

    // Perform form validation
    if (!username || !email || !password || !confirmPassword) {
      setError('Please fill in all the fields.');
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    // Check if password and confirm password match
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    try {
      // Call registerAuthentication function
      await registerAuthentication();

      // Navigate to the home page if registration is successful
      window.location.href = '/selectUser'; // You may use React Router's history.push('/') here for a better approach
    } catch (error) {
      // Handle registration error
      setError('Registration failed. Please try again.');
    }
  };

  const registerAuthentication = async () => {
    // Implement your registration authentication logic here
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password); // Call the function with email and password
      // Registration successful, you may want to perform additional actions
    } catch (error) {
      setError('Registration failed. Please try again.'); // Set an error message for the user
    }
  };

  return (
    <div className='regform-content'>
      <MainContent className="main-content" />
      <div className="form-content">
        <h3>Please enter your details</h3>
        <form onSubmit={register}>
          <label className="userName-lbl">
            Username :
            <input
              type="text"
              required
              className="input-field"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder='Your Name'
            />
          </label>
          <label className="email-lbl">
            Email :
            <br />
            <input
              type="text"
              required
              className="input-field"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='username@gmail.com'
            />
          </label>
          <label className="password-lbl">
            Password :
            <input
              type="password"
              required
              className="input-field"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder='password'
            />
          </label>
          <label className="confirmPassword-lbl">
            Confirm Password :
            <input
              type="password"
              required
              className="input-field"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder='password'
            />
          </label>
          {error && <p className="error-message">{error}</p>}
          <button type="submit" className="reg-btn">
            Register
          </button>
        </form>
        <Link to="/Login">
          <h6 className="log-label">- Already have an account -</h6>
        </Link>
        <button className="google-btn">
          <img src={googleImg} alt="" className="google-image" /> Sign with
          google
        </button>
      </div>
    </div>
  );
};

export default Register;
