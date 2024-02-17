import React from 'react';
import './UserSelection.css';
import MainContent from '../../MainContent/MainContent';
import petconsultantchoose from '../../../assets/petConsultant-choose.png';
import petownerchoose from '../../../assets/petOwner-choose.png'
import { Link } from 'react-router-dom';

const UserSelection = () => {
  return (
    <div className='user-selection'>
      <MainContent/>
      <div className='selection'>
        <h2>Select the User Type</h2>
        <Link to="/bussinessProfile">
        <img src={petconsultantchoose} alt="" className='petConsultant-choose'/>
        </Link>
        <h4 className='consultant-choose-txt'>Consultant</h4>
        <Link to="/">
        <img src={petownerchoose} alt="" className='petowner-choose'/>
        </Link>
        <h4 className='owner-choose-txt'>Pet Owner</h4>
      </div>
    </div>
  )
}

export default UserSelection
