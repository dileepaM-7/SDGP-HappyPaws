import React from 'react'
import './searchConsultants.css';
import Serach from '../../../assets/Search.png';
import ConsultantsInfo from './ConsultantsInfo';

function SearchConsultants() {
  return(
    <div className="main">
    
    <div className='container'>
  
       <div className='content_box'>
       <div className='header1'>
            <h2>Search For Consultants</h2>
        </div>
       <div className='Search'>
        <input type="search" className='Search-bar' placeholder='Enter the Name'/>
        <button className='search-button'>
          <img src={Serach} alt='button'></img>

        </button>
          
        </div>
        <div className='container1'>
          <ConsultantsInfo/>
          <ConsultantsInfo/>
          <ConsultantsInfo/>
          <ConsultantsInfo/>
          <ConsultantsInfo/><ConsultantsInfo/>
          
          
          
          

        </div>
        </div>
        
    </div>
    </div>
    
  )
}

export default SearchConsultants