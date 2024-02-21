import React, { useEffect, useState } from 'react';
import './Profile.css';
import { Link } from 'react-router-dom';
import { auth } from "../../../firebase-config";
import { signOut } from "firebase/auth";
import { getDatabase, ref, child, get } from "firebase/database";

const Profile = () => {
  const [userData, setUserData] = useState(null);
  const [emailLogged, setEmailLogged] = useState('');

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        // User is signed in
        const userId = user.uid;
        // Reference to the database
        const dbRef = ref(getDatabase());
        // Reference to the user's data in the database based on the user ID
        setEmailLogged(auth.currentUser?.email)
        const userRef = child(dbRef, 'UserData');

        // Fetch all user data
        get(userRef)
          .then((snapshot) => {
            if (snapshot.exists()) {
              // Convert the snapshot to an array of user objects
              const users = Object.values(snapshot.val());

              // Find the user with the matching email
              const currentUser = users.find(user => user.Email === auth.currentUser?.email);

              if (currentUser) {
                // Set the user data in the state
                setUserData(currentUser);
                console.log("userData:", currentUser);
              } else {
                console.log("User not found");
              }
            } else {
              console.log("No data available");
            }
          })
          .catch((error) => {
            console.error(error);
          });
      } else {
        // User is signed out
        console.log("User is signed out");
      }
    });

    // Clean up the subscription when the component unmounts
    return () => unsubscribe();
  }, []); // Empty dependency array to run the effect only once on mount

  // Log out function
  const logout = async () => {
    await signOut(auth);
  };

  return (
    <div>
      <div>
        {/* Update property name from 'username' to 'Name' */}
        <p>User Name: {userData?.Name}</p>
        <p>User Email: {auth.currentUser?.email}</p>
        <p>User Age: {userData?.Age}</p>
        <p>User ID: {auth.currentUser?.uid}</p>
      </div>
      <Link to="/">
        <button onClick={logout}>Sign Out</button>
      </Link>
    </div>
  );
};

export default Profile;
