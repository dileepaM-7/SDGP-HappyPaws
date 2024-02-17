import React, { useEffect, useState } from 'react';
import './Profile.css';
import { Link } from 'react-router-dom';
import { auth } from "../../../firebase-config";
import { signOut } from "firebase/auth";
import { getDatabase, ref, child, get } from "firebase/database";

const Profile = () => {
  const [userData, setUserData] = useState(null);

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
    <div>
      {userData ? (
        <div>
          <p>User Name: {userData.Name}</p>
          {/* Display other user data as needed */}
        </div>
      ) : (
        <p>Loading user data...</p>
      )}
      <Link to="/">
        <button onClick={logout}>Sign Out</button>
      </Link>
    </div>
  );
};

export default Profile;
