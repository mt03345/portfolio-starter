
import React from 'react'
import './Services.css'
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from '../Card/Card';
import Resume from '../../img/resume.pdf';
const Services = () => {
  return (
    <div className='Services'>
        {/* left side */}
            <div className="awesome">
                <span>My Awesome</span>
                <span>Services</span>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                <br />
                Itaque sunt voluptate quisquam totam officia saepe?</span>
                <a href={Resume} ><button className="button s-button">Download CV </button></a>
                
                <div className="blur s-blur" style={{Background:"#ABF1FF94"}}></div>
            </div>
      {/* right silde  */}
      <div className="cards">
               <div style={{left:'40rem'}}>
                <Card 
                 emoji={HeartEmoji}
                 heading={'Design'}
                 detail={'Figma,sketch,photshop,Adob,Adob xd'}
                />
                </div> 
                <div style={{top:'12rem', left:'17rem'}}>
                <Card 
                 emoji={Glasses}
                 heading={'Developer'}
                 detail={'Html,Css,Javascript,React js'}
                />
                </div>
                <div style={{top:'20rem', left:'35rem'}}>
                <Card 
                 emoji={Humble}
                 heading={'UI/UX'}
                 detail={'Html,Css,Javascript,React js'}
                />
                </div>
      </div>
    </div>
  )
}

export default Services
