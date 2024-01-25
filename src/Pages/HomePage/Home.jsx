import React from 'react'
import './Home.css'
import doggy_Image from '../../assets/doggy.png'
import Navbar from '../../Components/Navbar/Navbar'

const Home = () => {
  return (
    <div className='main_content'>
      <Navbar/>
      <h2>THis is home page</h2>
    </div>
  )
}

export default Home