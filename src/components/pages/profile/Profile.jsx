import React, { useEffect, useState } from 'react';
import './Profile.css';
import { Link } from 'react-router-dom';
import { auth } from "../../../firebase-config";
import { signOut } from "firebase/auth";
import { getDatabase, ref, child, get } from "firebase/database";
import { useParams } from 'react-router-dom'; // Import useParams hook
import ProfilePic from '../../../assets/Profilepic.jpg'




const Profile = () => {
  const [userData, setUserData] = useState(null);
  const [emailLogged, setEmailLogged] = useState('');
  const [isEditingName, setIsEditingName] = useState(false); // State to manage the visibility of the input field
  const [newName, setNewName] = useState(''); // State to store the new name value

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
    localStorage.removeItem('userLoggedIn');
    await signOut(auth);
  };

  // Function to toggle the visibility of the input field for updating the name
  const toggleEditName = () => {
    setIsEditingName(prevState => !prevState);
  };

  // Function to handle name update
  return (
    <section>
      <div className='profile-heading'>
        <h2>My Profile</h2>
      </div>
      <div className='User-profile'>
        <div className='user-image'>
          <img src={ProfilePic} alt='Profile-Picture' />
          <div className="user-info">
            <div>
              <p className='user-name1'>User Name</p>
              {isEditingName ? (
                <input
                  type="text"
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                />
              ) : (
                <p className='user-data'>{userData?.Name}</p>
              )}
            </div>
            <div>
              <p className='user-email'>User Email </p><p className='user-data'>{auth.currentUser?.email}</p>
            </div>
            <div>
              <p className='user-id'>User ID</p> <p className='user-data'>{auth.currentUser?.uid}</p>
            </div>
           
            <Link to="/">
              <button onClick={logout}>Sign Out</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
