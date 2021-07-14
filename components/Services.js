import React from 'react';
import '../App.css';
import Navbar from './Navbar';

function Services() {
  
  //<p className='services'>Read The Article about Organic Farming</p>
  return (
    <>
    <Navbar/>
    {/*<h4 style={{"color":"white","textAlign":"center"}}>Read The Article about Computer Managed Learning</h4>*/}
  <p className='services'><a style={{"color":"white" }} href="https://educationaltechnologyjournal.springeropen.com/articles/10.1186/s41239-017-0063-0">Article For Computer Managed Learning</a></p>;
  </>
  );
}
export default Services;