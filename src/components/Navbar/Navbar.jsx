// rafce 
import React from 'react'
import '../Navbar/Navbar.css';
import Toggle from '../Toggle/Toggle';
const Navbar = () => {
  return (
    <div className='n-wrapper'>
      <div className="n-left">
        <div className="n-name">Andrew</div>
        <Toggle/>
      </div>
      <div className="n-right">
            <div className="n-list">
               <ul>
               <li>Home</li>
               <li>Services</li>
               <li>Experience</li>
               <li>Portfolio</li>
               <li>Testimonials</li> 
               </ul>
            </div>
            <button className='button n-button'>
                Contact Us
            </button>
            </div>
    </div>
  )
}

export default Navbar
