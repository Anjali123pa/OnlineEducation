import React from 'react';
import '../App.css';
import Navbar from './Navbar';

function SignUp() {
  
  return (
  
    <>
    <Navbar/>
    {/*<h4 style={{"color":"white","textAlign":"center"}}>Read The Article about Asynchronous Online Learning</h4> */}
  <p className='sign-up'><a style={{"color":"white" }} href="https://er.educause.edu/articles/2008/11/asynchronous-and-synchronous-elearning">Article For Asynchronous Online Learning</a></p>;
  </>
  );
}
export default SignUp;
