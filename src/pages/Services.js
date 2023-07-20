import React, { useEffect} from 'react';
import '../App.css';
import Video from '../components/Headervid';
import Partner from '../components/Partner';
import Bots from '../components/bots';
import '../components/Cards.css';
import CardItem from '../components/CardItem';
import { Link } from 'react-router-dom';

function Services() {
    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);
    return (
      <>
        <Video videoUrl={'/videos/gallery.mp4'} speech={"Best Services in the region"} btntxt={"Reserve Free Pratice"} />
        <div className='cards'>
      
            <h1>Our Services</h1>
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
                    text='Short Race: The price depend of you are ages. 15 min session for'
                    price="$30-75$"
                    classcenter="cards__text__center"
                    label='Indoors'
                    path='/Book'
                    pathbutton='/Book'
                    />
                    <CardItem
                    src='images/istockphoto-526931739-612x612.jpg'
                    text='Long Race : The price depend of you are ages. 30 min session for'
                    price="$50-100$"
                    classcenter="cards__text__center"
                    label='Outdoor'
                    path='/Book'
                    pathbutton='/Book'
                    />
                    <CardItem
                    src='images/mohammad-samir-oHHTqm4gWTY-unsplash.jpg'
                    text='Gokart Camp, Where Young Talent Drives Towards Greatness!'
                    price="$450 for 3 month"
                    classcenter="cards__text__center"
                    label='Camp'
                    path='/Book'
                    pathbutton='/Book'
                    />
                </ul>
                <ul className='cards__items'>
                    <CardItem
                    src='images/formula-k-2.jpg'
                    text='Master the Mechanics, Rev Up Your Skills: Gokart Camps Mechanical Class, Unleash the Engineer in You!'
                    price="$200 for 3 month"
                    classcenter="cards__text__center"
                    label='Lear your Kart'
                    path='/Book'
                    pathbutton='/Book'
                    />
                    <CardItem
                    src='images/shawnanggg-VCcOKH7EULE-unsplash.jpg'
                    text='Karting league: Unleash the Racer in you and Conquer the Karting League!'
                    price="$750 for 3 month"
                    classcenter="cards__text__center"
                    label='League'
                    path='/Book'
                    pathbutton='/Book'
                    />
                    <CardItem
                    src='images/photo-1560990817-aaa93354ea9c.avif'
                    text='Competitive Go Kart Racing Events, each saturday and sunday. To particiapte is '
                    price="$150 per Event"
                    classcenter="cards__text__center"
                    label='Local competition'
                    path='/Book'
                    pathbutton='/Book'
                    />
                </ul>
                </div>
            </div>
            <div className='cards__container'>
                For more information consult our <Link to='/FAQ'>FAQ page</Link>
            </div>
        </div>
        <Partner />
        <Bots />
      
      </>
    );
  }
  
  export default Services;