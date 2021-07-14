import React from 'react';
import '../css/Cards.css';
import CardItem from './CardItem';
import a1 from '../images/a1.jpeg';
import im5 from '../images/im5.jpg';
import im4 from '../images/img4.png';

function StudentCard() {
  return (
    <div className='cards'>
      <h3 className= 'studentdash'> Welcome Students </h3>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={a1}
              text='A Session is an oral presentation to teach people'
              label='Sessions'              
              path="/show-session"
            />
            <CardItem
              src={im5}
              text='Dont watch the clock. Do what it does....'
              label='Tests'
              path='/test'
            />
            <CardItem
              src={im4}
              text='If there is no struggle, there is no progress.'
              label='Progress'
              path='/progress'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default StudentCard;
