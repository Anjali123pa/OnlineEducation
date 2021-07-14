import React from 'react';
import '../css/Cards.css';
import CardItem from './CardItem';
import im8 from '../images/img8.jpg';
import im9 from '../images/img9.jpg';
import im10 from '../images/img10.jpg';
 
function TeacherCard() {
  return (
    <div className='cards'>
      <h3 className= 'studentdash'> Welcome </h3>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={im8}
              text='A Session is an oral presentation to teach people'
              label='Sessions'              
              path="/session"
            />
            <CardItem
              src={im9}
              text='Dont watch the clock. Do what it does....'
              label='Tests'
              path='/add-test'
            />
            <CardItem
              src={im10}
              text='"Attend today, and achieve tomorrow.” ....'
              label='Attendance'
              path='/attendance'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}
 
export default TeacherCard;