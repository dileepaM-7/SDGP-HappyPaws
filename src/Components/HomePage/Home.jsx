import React from 'react'
import './Home.css'
import doggy_Image from '../../assets/doggy.png'

const Home = () => {
  return (
    <div className='main_content'>
        <img className='dogImage' src={doggy_Image} alt="" />
        <div className='text'>
            <span className='welcome_txt'>Welcome... <br /><br /></span>
            <span className='first_content' >Welcome to a <br /> world of care for </span>
            <span className='second_content'>your <br />beloved pets <br /></span>
            <span className='last_txt'>Discover expert pet care tips and advice to ensure your furry <br />
                  friend's well-being and happiness at every stage of their life.</span>
        </div>
        <div className='features-button'>
            <h4>Our Services</h4>
        </div>
    </div>
  )
}

export default Home