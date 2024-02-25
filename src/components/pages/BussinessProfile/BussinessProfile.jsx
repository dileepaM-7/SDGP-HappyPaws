import React, { useEffect, useState } from 'react';
import { auth } from "../../../firebase-config";
import './BussinessProfile.css';
import { Link } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { getDatabase, ref, child, get, set } from 'firebase/database';

const BussinessProfile = () => {
  const [emailLogged, setEmailLogged] = useState('');
  const [userData, setUserData] = useState(null);
  const [userDetails, setUserDetails] = useState(null);

  const [formData, setFormData] = useState({
    bussinessName: '',
    shopName: '',
    specialty: '',
    contactNo: '',
    emailAddress: '',
    address: '',
  });

  useEffect(() => {
    const dbRef = ref(getDatabase());
    const userRef = child(dbRef, 'UserData');
    
    get(userRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          const users = Object.values(snapshot.val());
          const currentUser = users.find(user => user.Email === auth.currentUser?.email);
          setUserData(currentUser);
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleReset = () => {
    setFormData({
      bussinessName: '',
      shopName: '',
      specialty: '',
      contactNo: '',
      emailAddress: '',
      address: '',
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const dbRef = ref(getDatabase());
    const userRef = child(dbRef, 'UserData', userDetails?.Email);
    const updatedData = {
      ...userData,
      bussinessDetails: formData,
    };

    set(userRef, updatedData)
      .then(() => {
        console.log('Data saved successfully');
      })
      .catch((error) => {
        console.error('Error saving data:', error);
      });
  };

  const logout = async () => {
    await signOut(auth);
  };


  return (
    <div className='bussiness-content'>
      <h2>Business Profile</h2>
      <div className='bussiness-profile-content'>
        <Link to="/">
          <button onClick={logout} className='signout-btn'>Sign Out</button>
        </Link>
        <form onSubmit={handleSubmit} onReset={handleReset} className='bussiness-account'>
          <label htmlFor="name" className='bussines-name-lbl'>Name:</label>
          <input
            type="text"
            id="name"
            name="bussinessName"
            value={formData.bussinessName}
            onChange={handleChange}
            required
            className='bussines-name-input'
          />

          <label htmlFor="shopName">Shop Name:</label>
          <input
            type="text"
            id="shopName"
            name="shopName"
            value={formData.shopName}
            onChange={handleChange}
            required
          />

          <label htmlFor="specialty">Specialty:</label>
          <input
            type="text"
            id="specialty"
            name="specialty"
            value={formData.specialty}
            onChange={handleChange}
            required
          />

          <label htmlFor="contactNo">Contact No:</label>
          <input
            type="tel"
            id="contactNo"
            name="contactNo"
            value={formData.contactNo}
            onChange={handleChange}
            required
          />

          <label htmlFor="emailAddress">Email Address:</label>
          <input
            type="email"
            id="emailAddress"
            name="emailAddress"
            value={formData.emailAddress}
            onChange={handleChange}
            required
          />
          
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />

          <div className='button-set'>
            <button type="reset" className='bussiness-resetbtn'>Reset</button>
            <button type="submit" className='bussiness-savebtn'>Save</button>
            <button type="submit" className='bussiness-publishbtn'>Publish</button>
          </div>
          <p className='account-status'>Account status: Not Active</p>
        </form>
      </div>
    </div>
  );
}

export default BussinessProfile;
