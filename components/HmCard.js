import React from 'react';
import '../css/Cards.css';
import CardItem from './CardItem';
import hm1 from '../images/hm1.png'
import hm2 from '../images/hm2.png'
import hm3 from '../images/hm3.png'
 
function HmCard() {
  return (
    <div className='cards'>
      <h3 className= 'studentdash'> Welcome </h3>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={hm1}
              text='Teachers dont just teach they prepare us for the road ahead....'
              label='Teachers'              
              path="/teacher-list"
            />
            <CardItem
              src={hm2}
              text='Strive for progress, not perfection.'
              label='Students'
              path='/hm-student-list'
            />
            <CardItem
              src={hm3}
              text='A Session is an oral presentation to teach people.'
              label='Sessions'
              path='/hm-show-session'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}
 
export default HmCard;