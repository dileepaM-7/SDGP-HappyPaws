import React, { useState, useEffect } from 'react';
import { generateDate, months } from './Calender';
import "./Vaccine.css";
import dayjs from 'dayjs';
import { getDatabase, ref, set, child, get, push, onValue } from 'firebase/database';
import { auth } from "../../../firebase-config";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { Navbar } from "../../NavigationBar/Navbar"
import Footer from "../../Footer/Footer";

const Vaccine = () => {
  const days = ["S", "M", "T", "W", "T", "F", "S"];
  const currentDate = dayjs();
  const [today, setToday] = useState(currentDate);
  const [selectDate, setSelectDate] = useState(currentDate);
  const [vaccinationDetails, setVaccinationDetails] = useState('');
  const [userId, setUserId] = useState(null);
  const [userData, setUserData] = useState(null);
  const [emailLogged, setEmailLogged] = useState('');
  const [vaccineData, setVaccineData] = useState([]);
  const [showDetails, setShowDetails] = useState(false); // State to control visibility of details

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setEmailLogged(user.email);
        fetchUserDetails();
      } else {
        console.log("User is signed out");
        setEmailLogged('');
      }
    }, (error) => {
      console.error("Auth state change error:", error);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (userId) {
      fetchVaccineDetails();
    }
  }, [userId]);

  const fetchVaccineDetails = () => {
    const db = getDatabase();
    const userVaccineRef = ref(db, `UserData/${userId}/vaccinationDetails`);

    onValue(userVaccineRef, (snapshot) => {
      if (snapshot.exists()) {
        const vaccineData = snapshot.val();
        setVaccineData(Object.values(vaccineData));
      } else {
        console.log("No vaccine data available");
        setVaccineData([]);
      }
    });
  };

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

    const newref = push(userRef);

    set(newref, vaccinationData)
      .then(() => {
        console.log('Vaccination details saved successfully');
        fetchVaccineDetails(); // Fetch updated details after adding new one
        setVaccinationDetails(''); // Clear the input field after successful addition
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
          fetchVaccineDetails(); // Fetch vaccine details after user is authenticated
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

  return (
    <section>
      <Navbar />
      <p className='Title'>VACCINATION CALENDAR</p>
      <div className='vaccinate-container'>
        <div className='custom-grid'>
          <div className='month-year-division'>
            <p className='month-tag'>{months[today.month()]},{today.year()}</p>
            <div className='Today-division'>
              <GrFormPrevious className='previous-button' onClick={() => {
                setToday(today.month(today.month() - 1));
              }} />
              <p className='Today-tag' onClick={() => {
                setToday(currentDate);
              }}>Today</p>
              <GrFormNext className='next-button' onClick={() => {
                setToday(today.month(today.month() + 1));
              }} />
            </div>
          </div>
          <div className='custom-date-grid'>
            {days.map((day, index) => (
              <p key={index} className='date-content-upper'> {day} </p>
            ))}
          </div>
          <div className='custom-date-grid'>
            {generateDate(today.month(), today.year()).map(({ date, currentMonth, today }, index) => (
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
          {/* Button to toggle visibility of vaccine details */}
          <button onClick={() => setShowDetails(!showDetails)} className='saved-details-button'>Saved Details</button>
        </div>
      </div>
      {/* Separate container for displaying vaccine details */}
      {showDetails && (
        <div className="vaccine-details-container">
          <div className="vaccine-list">
            <h2>Vaccine Details</h2>
            <div className='loaded-vaccination-dates'>
            {vaccineData.length > 0 ? (
              <ul>
                {vaccineData.map((vaccine, index) => {
                  const nextDate = dayjs(vaccine.date).add(1, 'year').toDate();
                  const formattedDate = `${nextDate.getFullYear()}-${nextDate.getMonth() + 1}-${nextDate.getDate()}`;
                  return (
                    <li key={index}>
                      <p>Next Date: {formattedDate}</p>
                      <p>Note: {vaccine.note}</p>
                    </li>
                  );
                })}
              </ul>
            ) : (
              <p>No saved vaccination details</p>
            )}
            </div>
          </div>
        </div>
      )}
      <div className='footer-in-vaccine'>
      <Footer />
      </div>
      
    </section>
  );
}

export default Vaccine;
