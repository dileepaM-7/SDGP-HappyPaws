import React, { useState } from 'react';
import './Register.css';
import { Navbar } from '../../NavigationBar/Navbar';
import MainContent from '../../MainContent/MainContent';
import { Link } from 'react-router-dom';
import googleImg from '../../../assets/google.png';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const register = (event) => {
    event.preventDefault(); // Prevent default form submission

    // Perform form validation
    if (!username || !email || !password || !confirmPassword) {
      setError('Please fill in all the fields.');
      return;
    }
    window.location.href = '/';
  };

  return (
    <div>
      <Navbar />
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
            />
          </label>
          <label className="password-lbl">
            Password :
            <input
              type="text"
              required
              className="input-field"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <label className="confirmPassword-lbl">
            Confirm Password :
            <input
              type="text"
              required
              className="input-field"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
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
