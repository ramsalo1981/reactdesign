import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import img9 from "../images/img-9.jpg"
import img2 from "../images/img-2.jpg"
import img3 from "../images/img-3.jpg"
import img4 from "../images/img-4.jpg"
import img8 from "../images/img-8.jpg"

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these Products!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={img9}
              text='Lorem Ipsum is simply dummy text of the printing and typesetting industry'
              label='Adventure'
              path='/services'
            />
            <CardItem
              src={img2}
              text='Lorem Ipsum is simply dummy text of the printing and typesetting industry'
              label='Luxury'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={img3}
              text='Lorem Ipsum is simply dummy text of the printing and typesetting industry'
              label='Mystery'
              path='/services'
            />
            <CardItem
              src={img4}
              text='Lorem Ipsum is simply dummy text of the printing and typesetting industry'
              label='Adventure'
              path='/products'
            />
            <CardItem
              src={img8}
              text='Lorem Ipsum is simply dummy text of the printing and typesetting industry'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;