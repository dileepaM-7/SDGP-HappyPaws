import React, { useState } from 'react';
import './Register.css';
import MainContent from '../../MainContent/MainContent';
import { Link } from 'react-router-dom';
import googleImg from '../../../assets/google.png';
import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth } from '../../../firebase-config';
import { v4 as uuidv4 } from 'uuid'; // Import uuidv4 from uuid
import { getDatabase, ref, set } from "firebase/database";

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [userType, setUserType] = useState(''); // Default to pet owner
  const [error, setError] = useState('');
  const [userId, setUserId] = useState(''); // State to store the generated user ID
  const [user, setUser] = useState({
    Name: '',
    Email: ''
  });

  let name, value
  const data = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
    console.log(user);
  };
  
  onAuthStateChanged(auth, (currentuser) => {
    setUserId(currentuser?.uid); // Set user ID when the authentication state changes
  });

  const register = async (event) => {
    event.preventDefault();

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(user.Email)) {
      setError('Please enter a valid email address.');
      return;
    }

    // Check if password and confirm password match
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    // Generate a unique ID for the user
    const newUserId = uuidv4();
    setUserId(newUserId);

    try {
      // Call registerAuthentication function
      await registerAuthentication(newUserId);
      // Navigate to the home page if registration is successful
      window.location.href = '/selectUser'; // You may use React Router's history.push('/') here for a better approach
    } catch (error) {
      // Handle registration error
      setError('Registration failed. Please try again.');
    }
  };

  const registerAuthentication = async (userId) => {
    // Implement your registration authentication logic here
    try {
      const userAuth = await createUserWithEmailAndPassword(auth, user.Email, password);
      const newUser = userAuth.user;

      // Call writeUserData function to store user details in the database
      writeUserData(userId, user.Name, user.Email);
    } catch (error) {
      setError('Registration failed. Please try again.'); // Set an error message for the user
    }
  };

  const writeUserData = (userId, name, email) => {
    const db = getDatabase();
    set(ref(db, `users/${userId}`), {
      username: name,
      email: email,
      userId: userId,
    });
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
              name='Name'
              required
              className="input-field"
              value={user.Name}
              onChange={data}
              placeholder='Your Name'
            />
          </label>
          <label className="email-lbl">
            Email :
            <br />
            <input
              type="text"
              name='Email'
              required
              className="input-field"
              value={user.Email}
              onChange={data}
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
