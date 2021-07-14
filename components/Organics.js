import React,{useState} from 'react';
import '../App.css';
import Navbar from './Navbar';

function Organics(){
  const [state,setState]=useState(false);
  let url = "https://elearningindustry.com/adaptive-learning-for-schools-colleges#:~:text=With%20adaptive%20learning%2C%20instead%20of,any%20learning%20difficulties%20they%20have.";
    return (
        <>
        <Navbar/>
        {/*<h4 style={{"color":"white","textAlign":"center"}}>Read The Article about Adaptive E-Learning</h4> */}
      <p className='organics'><a style={{"color":"white" }} href={url}>Article For Adaptive E-learning</a></p>;
      </>
      );
    
}
export default Organics;