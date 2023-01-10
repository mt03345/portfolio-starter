
import React from 'react'
import './Services.css'
import Heartemoji from "../../img/heartemoji.png"
import Glasses from "../../img/glasses.png"
import Humble from "../../img/humble.png"
const Services = () => {
  return (
    <div className='Services'>
        {/* left side */}
            <div className="awesome">
                <span>my awesome</span>
                <span>Services</span>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                <br />
                Itaque sunt voluptate quisquam totam officia saepe?</span>
                <button className="button s-button">Download CV </button>
                <div className="blur s-blur" style={{Background:"#ABF1FF94"}}></div>
            </div>
      {/* right silde  */}
      <div className="cards">
        iam right 
      </div>
    </div>
  )
}

export default Services
