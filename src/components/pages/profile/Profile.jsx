import React from 'react';
import './Profile.css';
import { Link } from 'react-router-dom';
import {auth} from "../../../firebase-config";
import {
    signOut
  } from "firebase/auth";

const Profile = () => {

    const logout = async () => {
        // Implement your logout logic here
        await signOut(auth);
      };
  return (
    <div>
      <Link to="/"><button onClick={logout}>signout</button></Link>
    </div>
    //Comment
  )
}

export default Profile
