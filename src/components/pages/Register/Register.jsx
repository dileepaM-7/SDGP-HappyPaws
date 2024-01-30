import React, { useState } from 'react';
import MainContent from '../../MainContent/MainContent';
import { Navbar } from '../../NavigationBar/Navbar';
import './Register.css'; // Import a separate CSS file for styling

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
          <label>
            Username:
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </label>
          <br />
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
          <br />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
