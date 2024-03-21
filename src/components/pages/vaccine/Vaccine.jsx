import React, { useState } from 'react';
import { generateDate, months } from './Calender';
import "./Vaccine.css";
import dayjs from 'dayjs';
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

const Vaccine = () => {
  
  const days = ["S", "M", "T", "W", "T", "F", "S"];
  const currentDate = dayjs();
  const [today, setToday] = useState(currentDate);
  const [selectDate, setSelectDate] = useState(currentDate);
  const [vaccinationDetails, setVaccinationDetails] = useState('');

  const handleVaccinationDetailsChange = (event) => {
    setVaccinationDetails(event.target.value);
  }

  const handleAddVaccination = () => {
    // Here you can add the logic to save vaccination details for the selected date
    console.log(`Vaccination details for ${selectDate.toDate().toDateString()}: ${vaccinationDetails}`);
  }

  return (
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
        <input type="text" value={vaccinationDetails} onChange={handleVaccinationDetailsChange} />
        <button onClick={handleAddVaccination}>Add Vaccination</button>
      </div>
    </div>
  );
}

export default Vaccine;
