import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/HomePage/Home';
import ContactUs from './Pages/ContactUsPage/ContactUs';

const App = () => {
  let Component
  switch(window.location.pathname){
    case "/":
      Component = Home
      break;
    case '/../ContactUspage/ContactUs':
      Component = ContactUs
      break;
  }
  
  return (
    <div className='container'>
      <Home/>
      
    </div>
  );
}

export default App;
