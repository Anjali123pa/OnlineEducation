import React from 'react';
import '../css/Cards.css';
import CardItem from './CardItem';
import im1 from '../images/im1.png'
import im2 from '../images/im2.png'
import im6 from '../images/im6.png'
import im5 from '../images/im5.png'
import im4 from '../images/im4.png'


function Cards() {
  return (
    <div className='cards'>
      <h1>Some Interesting Fatcts Of Online Education System!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={im1}
              text='System is a suite of computer programs for MS​-DOS'
              label='Computer Managed'              
              to="https://www.britannica.com/topic/shifting-agriculture"
              path="/services"
            />
            <CardItem
              src= {im2}
              text='interact in a specific virtual place at a set time'
              label='Synchronous Online Learning'
              path='/products'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={im6}
              text='Take a more non-traditional approach'
              label='ASynchronous Online Learning'              
              path="/sign-up"
            />
            <CardItem
              src={im5}
              text='Set of techniques oriented to offer online students'
              label='Adaptive E-Learning'
              path='/organics'
            />
            <CardItem
              src= {im4}
              text='Uses a traditional structure of passing down information to students'
              label='Fixed E-Learning'
              path='/shiftings'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
