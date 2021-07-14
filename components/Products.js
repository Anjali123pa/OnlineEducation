import React from 'react';
import '../App.css';
import Navbar from './Navbar';

function Products() {
  return (
    <>
     <Navbar/>
    {/*<h4 style={{"color":"white","textAlign":"center"}}>Read The Article about Synchronous Online Learning</h4> */}
  <p className='products'><a style={{"color":"white" }} href="https://er.educause.edu/articles/2008/11/asynchronous-and-synchronous-elearning">Article For Synchronous Online Learning</a></p>;
  </>
  );

}
export default Products;