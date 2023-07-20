import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    
    <div className='cards'>
      <div className='cards2'>
      <h1>Welcome to the Ultimate GoKart Experience!</h1>
      <br></br>
      <div className='cards__container'>
        <div className='cards__container'>
        At GoKart Xtreme, we are passionate about fueling your need for speed and adrenaline. Step into the driver's seat and embark on an exhilarating journey that will leave you craving for more. Whether you're a seasoned racer or a first-timer, our state-of-the-art go-karting facility offers the perfect blend of excitement, competition, and pure joy.
        </div>
      </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <h1>Unleash Your Inner Speedster: Ride the Thrills with GoKart</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/josh-fincher-ALSyG2e6dd4-unsplash.jpg'
              text='The largest indoor track in the region'
              label='Indoors'
              path='/kart'
              
            />
            <CardItem
              src='images/mohammad-samir-oHHTqm4gWTY-unsplash.jpg'
              text='Ignite the Night: Race Under the Stars with GoKart'
              label='Outdoor'
              path='/kart'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/appic-jRwJ4zlUkRc-unsplash.jpg'
              text='The largest fleet of karts of different types'
              label='Kart'
              path='/kart'
            />
            <CardItem
              src='images/shawnanggg-VCcOKH7EULE-unsplash.jpg'
              text='More than one kilometer of outdoor track'
              label='Outdoor'
              path='/products'
            />
            <CardItem
              src='images/atharva-dandekar-2rkw3EkYy48-unsplash.jpg'
              text='Competitive Go Kart Racing Events'
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
