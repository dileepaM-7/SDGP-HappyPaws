import React from 'react'
import './MainContent.css'
import doggy_Image from '../../assets/doggy.png'

const MainContent = () => {
  return (
    <div className='main_content'>
      <img className='dogImage' src={doggy_Image} alt="" />
    </div>
  )
}

export default MainContent
