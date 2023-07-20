import React from 'react';
import './Cards.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

function Partner() {
  return (
    
    <div className='cards2'>
      <h1>Our partener!</h1>
      <br></br>
      <div className='cards__container'>
        <div className='cards__container'>
        At GoKart Xtreme,   we believe in delivering the best possible go-karting experience to our valued customers. That's why we have partnered with some of the most reputable and reliable names in the industry to enhance your thrill-seeking journey. Our partners share our passion for excellence and safety, making them an integral part of the unforgettable adventures we offer.
        </div>
      </div>
      <Carousel responsive={responsive}>
        <div><img src={process.env.PUBLIC_URL +'/images/F1-logo.png'} alt="logo" className='imgsize'/></div>
        <div><img src={process.env.PUBLIC_URL +'/images/FIA.jpg'} alt="logo" className='imgsize'/></div>
        <div><img src={process.env.PUBLIC_URL +'/images/safetycar-2-logo.png'} alt="logo" className='imgsize'/></div>
        <div><img src={process.env.PUBLIC_URL +'/images/New-Bridgestone-Logo-Design-2011-BPO.jpg'} alt="logo" className='imgsize'/></div>
        <div><img src={process.env.PUBLIC_URL +'/images/logo.tillotson.webp'} alt="logo" className='imgsize'/></div>
        <div><img src={process.env.PUBLIC_URL +'/images/Honda-Logo.png'} alt="logo" className='imgsize'/></div>
      </Carousel>
      
    </div>
  );
}

export default Partner;
