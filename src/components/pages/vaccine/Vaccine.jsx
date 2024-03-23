import React, { useState, useEffect } from 'react';
import { generateDate, months } from './Calender';
import "./Vaccine.css";
import dayjs from 'dayjs';
import { getDatabase, ref, set, child, get } from 'firebase/database';
import { auth } from "../../../firebase-config";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import {Navbar} from "../../NavigationBar/Navbar"

const Vaccine = () => {
  
  const days = ["S", "M", "T", "W", "T", "F", "S"];
  const currentDate = dayjs();
  const [today, setToday] = useState(currentDate);
  const [selectDate, setSelectDate] = useState(currentDate);
  const [vaccinationDetails, setVaccinationDetails] = useState('');
  const [userId, setUserId] = useState(null);
  const [userData, setUserData] = useState(null);
  const [emailLogged, setEmailLogged] = useState('');

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setEmailLogged(user.email); // Use user object directly
        fetchUserDetails();
      } else {
        console.log("User is signed out");
        setEmailLogged(''); // Reset emailLogged state when user is signed out
      }
    }, (error) => {
      console.error("Auth state change error:", error);
      // Handle any errors that occur during authentication state change
    });
    
    return () => unsubscribe();
  }, []);

  const handleVaccinationDetailsChange = (event) => {
    setVaccinationDetails(event.target.value);
  }

  const handleAddVaccination = () => {
    if (!userId) {
      console.error("User ID not available.");
      return;
    }

    const db = getDatabase();
    const userRef = ref(db, `UserData/${userId}/vaccinationDetails`);
    const vaccinationData = {
      date: selectDate.toISOString(),
      note: vaccinationDetails
    };

    set(userRef, vaccinationData)
      .then(() => {
        console.log('Vaccination details saved successfully');
        // Optionally, you can update the UI or show a confirmation message
      })
      .catch((error) => {
        console.error('Error saving vaccination details:', error);
      });
  }
  const fetchUserDetails = async () => {
    const dbRef = ref(getDatabase());
    const userRef = child(dbRef, 'UserData');
  
    try {
      const snapshot = await get(userRef);
  
      if (snapshot.exists()) {
        const users = Object.entries(snapshot.val());
        const currentUserEntry = users.find(([key, user]) => user.Email === auth.currentUser?.email);
  
        if (currentUserEntry) {
          const [userId, currentUser] = currentUserEntry;
          setUserData(currentUser);
          setUserId(userId);
          console.log("userData:", currentUser);
          console.log("User ID:", userId);
        } else {
          console.log("User not found");
        }
      } else {
        console.log("No data available");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <section>
      <Navbar />
        <div className='vaccinate-container'>
        <div className='custom-grid'>
          <div className='month-year-division'>
            <p className='month-tag'>{months[today.month()]},{today.year()}</p>
            <div className='Today-division'>
              <GrFormPrevious className='previous-button' onClick={() => {
                setToday(today.month(today.month() - 1));
              }}/>
                <p className='Today-tag'  onClick={() => {
                setToday(currentDate);
              }}>Today</p>
              <GrFormNext className='next-button' onClick={() => {
                setToday(today.month(today.month() + 1));
              }}/>
            </div>
          </div>
          <div className='custom-date-grid'>
            {days.map((day, index) => (
              <p key={index} className='date-content-upper'> {day} </p>
            ))}
          </div>
          <div className='custom-date-grid'>
            {generateDate(today.month(),today.year()).map(({ date, currentMonth, today }, index) => (
              <div key={index} className='date-content-upper'>
                <p className={
                  (currentMonth ? "" : "gray-text-number") + " " + (currentMonth && today ? "red-color-today" : "")
                }
              onClick={() => {
                setSelectDate(date); 
              }}     
              >
                  {date.date()}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className='vaccine-details-display'>
          <p className='command-adding'>Add your pets' vaccination dates for {selectDate.toDate().toDateString()}</p>
          <input type="text" value={vaccinationDetails} onChange={handleVaccinationDetailsChange} className='vaccination-detail-input' />
          <button onClick={handleAddVaccination} className='vaccination-detail-btn'>Add</button>
        </div>
      </div>
    </section>
  );
}

export default Vaccine;
