import React from 'react';
import '../App.css';
import '../components/Cards.css';
import CardItem from '../components/CardItem';
import Video from '../components/Headervid';
import Bots from '../components/bots';
function Gallery() {
    return (
      <>
        <Video videoUrl={'/videos/gallery.mp4'} speech={"Gallery"} btntxt={"Reserve Free Pratice"} />
        <div className='cards'>
      
      <h1>Our gallery</h1>
      <br></br>
      <div className='cards__container'>
          <div className='cards__container'>
          At GoKart Xtreme, we are passionate about fueling your need for speed and adrenaline. Step into the driver's seat and embark on an exhilarating journey that will leave you craving for more. Whether you're a seasoned racer or a first-timer, our state-of-the-art go-karting facility offers the perfect blend of excitement, competition, and pure joy.
          </div>
      </div>
      <div className='cards__container'>
          <div className='cards__wrapper'>
          <ul className='cards__items'>
              <CardItem
              src='images/karts.jpg'
              text='Short Race'
              classcenter="cards__text__center"
              label='Indoors'
              path='/kart'
              />
              <CardItem
              src='images/istockphoto-526931739-612x612.jpg'
              text='Long Race'
              classcenter="cards__text__center"
              label='Outdoor'
              path='/kart'
              />
              <CardItem
              src='images/mohammad-samir-oHHTqm4gWTY-unsplash.jpg'
              text='Gokart Camp night trainig session'
              classcenter="cards__text__center"
              label='Outdoor'
              path='/kart'
              />
          </ul>
          <ul className='cards__items'>
              <CardItem
              src='images/formula-k-2.jpg'
              text='Mechanical Workshop'
              classcenter="cards__text__center"
              label='Kart'
              path='/kart'
              />
              <CardItem
              src='images/shawnanggg-VCcOKH7EULE-unsplash.jpg'
              text='Competitive Outdoor circuit'
              classcenter="cards__text__center"
              label='Outdoor'
              path='/products'
              />
              <CardItem
              src='images/photo-1560990817-aaa93354ea9c.avif'
              text='Competitive Go Kart Racing Events, each saturday and sunday. '
              classcenter="cards__text__center"
              label='Adrenaline'
              path='/sign-up'
              />
          </ul>
          <ul className='cards__items'>
              <CardItem
              src='images/diego-gavilanez-LhqVcf1rga8-unsplash.jpg'
              text='Diego Gavilanez our champions student in 125 cm3 division'
              classcenter="cards__text__center"
              label='Student'
              path='/kart'
              />
              <CardItem
              src='images/photo-1685674594304-189b8f1a5067.avif'
              text='Todd Jiang, our rising start on kids division'
              classcenter="cards__text__center"
              label='Students'
              path='/products'
              />
              <CardItem
              src='images/photo-1628468490086-36cfe5c4fb7d.avif'
              text='Our instructor on race battle simulation for the students'
              classcenter="cards__text__center"
              label='Adrenaline'
              path='/sign-up'
              />
          </ul>
          </div>
      </div>
  </div>
  <Bots />
      </>
    );
  }
  
  export default Gallery;