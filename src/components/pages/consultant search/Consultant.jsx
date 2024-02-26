import React, { useState } from 'react';
import './Consultant.css';
import { Navbar } from '../../NavigationBar/Navbar';
import { FiSearch } from 'react-icons/fi';
import { getDatabase, ref, child, get } from 'firebase/database';
import Footer from "../../Footer/Footer";

const Consultant = () => {
  const [searchText, setSearchText] = useState('');
  const [consultants, setConsultants] = useState([]);

  const handleSearch = async () => {
    // Initialize Firebase database reference
    const dbRef = ref(getDatabase());
    const userRef = child(dbRef, 'UserData');

    try {
      // Fetch all user data
      const snapshot = await get(userRef);

      if (snapshot.exists()) {
        // Convert the snapshot to an array of user objects
        const users = Object.values(snapshot.val());

        // Filter users with business details based on searchText
        const filteredConsultants = users.filter((user) =>
          user.bussinessDetails &&
          (user.bussinessDetails.bussinessName.toLowerCase().includes(searchText.toLowerCase()) ||
            user.bussinessDetails.shopName.toLowerCase().includes(searchText.toLowerCase()) ||
            user.bussinessDetails.specialty.toLowerCase().includes(searchText.toLowerCase()) ||
            user.bussinessDetails.contactNo.toLowerCase().includes(searchText.toLowerCase()) ||
            user.bussinessDetails.address.toLowerCase().includes(searchText.toLowerCase()) ||
            user.bussinessDetails.emailAddress.toLowerCase().includes(searchText.toLowerCase()))
        );

        // Set the filtered consultants in the state
        setConsultants(filteredConsultants);
      } else {
        // No data available
        setConsultants([]);
      }
    } catch (error) {
      console.error(error);
      setConsultants([]);
    }
  };

  return (
    <div className='consultants'>
      <Navbar />
      <div className='consultant-container'>
        <div className='search-container'>
          <input
            type='text'
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder='Search Consultants...'
            className='search-bar'
          />
          <button onClick={handleSearch} className='search-btn'>
            <FiSearch />
          </button>
        </div>

        {consultants.length > 0 && (
          <div className='consultant-details'>
            <ul>
              {consultants.map((consultant) => (
                <li key={consultant.userId}>
                  <p>Business Name: {consultant.bussinessDetails?.bussinessName || 'N/A'}</p>
                  <p>Shop Name: {consultant.bussinessDetails?.shopName || 'N/A'}</p>
                  <p>Specialty: {consultant.bussinessDetails?.specialty || 'N/A'}</p>
                  <p>Contact No: {consultant.bussinessDetails?.contactNo || 'N/A'}</p>
                  <p>Address: {consultant.bussinessDetails?.address || 'N/A'}</p>
                  <p>Email: {consultant.bussinessDetails?.emailAddress || 'N/A'}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Consultant;
