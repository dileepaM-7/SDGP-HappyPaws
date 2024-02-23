import React, { useEffect, useState } from 'react';
import './Profile.css';
import { Navbar } from '../../NavigationBar/Navbar'
import Footer from "../../Footer/Footer";
import { useParams } from 'react-router-dom'; // Import useParams hook
import { Link } from 'react-router-dom';
import { auth } from "../../../firebase-config";
import { signOut } from "firebase/auth";
import { getDatabase, ref, child, get } from "firebase/database";
import UserSidebar from '../../UserProfile/UserSidebar';
import AccountSettings from '../../UserProfile/AccountSettings';
import PetProfiles from '../../UserProfile/PetProfiles';


const Profile = () => {
  const [userData, setUserData] = useState(null);

  const { activepage } = useParams();

  useEffect(() => {
    // Reference to the database
    const dbRef = ref(getDatabase());
    // Reference to the user's data in the database
    const userRef = child(dbRef, `PetOwners`);

    // Fetch user data from the database
    get(userRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          // Set the user data in the state
          setUserData(snapshot.val());
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []); // Empty dependency array to run the effect only once on mount

  // Log out function
  const logout = async () => {
    await signOut(auth);
  };

  return (
    <div className='userprofile'>
      <Navbar/>
      <h2>My Profile</h2>
      <div className='ProfileDetails'>
      {/*Profile , showing {activepage}*/}
        <div>
          <p>User Name: </p>
          <p>User Email: user@example.com</p>
          <p>Account Created Date: January 1, 2024</p>
        </div>
      </div>

      <div className='userprofilein'>
        <div className='left'>
          <UserSidebar activepage={activepage}/>
        </div>
        <div className='right'>
          {activepage === 'petprofiles' && <PetProfiles/>}
          {activepage === 'accountsettings' && <AccountSettings/>}
        </div>
      </div>
      
      <Link to="/">
        <button onClick={logout}>Sign Out</button>
      </Link>
      <Footer />
    </div>
  );
};

export default Profile;
