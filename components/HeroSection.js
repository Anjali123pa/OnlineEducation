import React from 'react';
import '../App.css';
import { Button } from './Button';
import '../css/HeroSection.css';
import bg1 from '../images/bg1.jpeg';

function HeroSection() {
  return (
    <div className='hero-container'>
      
      <img src={bg1} alt=""></img>
     
      <h2 style={{"marginBottom":"100px"}}>EDUCARE! Where Wisdom Lies...</h2>
      <p style={{"marginLeft":"130px"}}>Begin your learning Journey!</p>
      <div className='hero-btns'>
      </div>
      
    </div>
  );
}

export default HeroSection;
