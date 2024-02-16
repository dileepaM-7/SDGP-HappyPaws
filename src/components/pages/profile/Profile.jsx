import React from 'react';
import './Profile.css';
import { Link } from 'react-router-dom';
import { auth } from "../../../firebase-config";
import { signOut } from "firebase/auth";

const Profile = () => {

  //Log out function
  const logout = async () => {
      await signOut(auth);
    };

  return (
    <div>
      <Link to="/"><button onClick={logout}>signout</button></Link>
    </div>
  )
}

export default Profile;