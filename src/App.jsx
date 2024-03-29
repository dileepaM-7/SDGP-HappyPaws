import { Route, Routes, Navigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { auth } from "./firebase-config";
import "./App.css";
import { About, Contact, Home, Services } from "./components/pages";
import Login from "./components/pages/Login/Login";
import Register from "./components/pages/Register/Register";
import ForgotPassword from "./components/pages/ForgotPassword/ForgotPassword";
import Profile from "./components/pages/profile/Profile";
import ExcerisePlanner from "./components/pages/excerise planner/ExcerisePlanner";
import InputData from "./components/pages/excerise planner/inputData/inputData";
import Consultant from "./components/pages/consultant search/Consultant";
import Vaccine from "./components/pages/vaccine/Vaccine";
import Medical from "./components/pages/Medical Data/Medical";
import UserSelection from "./components/pages/select user/UserSelection";
import BussinessProfile from "./components/pages/BussinessProfile/BussinessProfile";
import Meals from "./components/pages/Meal-suggestion/Meals";
import PetProfiles from "./components/pages/UserProfile/PetProfiles";
import AccountSettings from "./components/pages/UserProfile/AccountSettings";
import Indoorgames from "./components/pages/excerise planner/Indoorgames";

function PrivateRoute({ element }) {
  const [user, setUser] = useState(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('userLoggedIn');

    if (isLoggedIn === 'true') {
      setUser(true);
    } else {
      setUser(false);
    }

    setIsMounted(true);

    return () => setIsMounted(false);
  }, []);

  if (!isMounted) {
    return null; // Render nothing until the effect is complete
  }

  if (!user) {
    return <Navigate to="/Login" />;
  }

  return element;
}

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/ForgotPassword" element={<ForgotPassword />} />
        <Route path="/profile" element={<PrivateRoute element={<Profile />} />} />
        <Route path="/exceisePlanner" element={<PrivateRoute element={<ExcerisePlanner />} />} />
        <Route path="/exerciseInput" element={<PrivateRoute element={<InputData />} />} />
        <Route path="/consultant" element={<PrivateRoute element={<Consultant />} />} />
        <Route path="/vaccine" element={<PrivateRoute element={<Vaccine />} />} />
        <Route path="/medical" element={<PrivateRoute element={<Medical />} />} />
        <Route path="/selectUser" element={<PrivateRoute element={<UserSelection />} />} />
        <Route path="/bussinessProfile" element={<PrivateRoute element={<BussinessProfile />} />} />
        <Route path="/meals" element={<PrivateRoute element={<Meals />} />} />
        <Route path="/petProfiles" element={<PrivateRoute element={<PetProfiles />} />} />
        <Route path="/accounntSettings" element={<PrivateRoute element={<AccountSettings />} />} />
        <Route path="/indoor" element={<PrivateRoute element={<Indoorgames />} />} />
      </Routes>
    </div>
  );
}

export default App;