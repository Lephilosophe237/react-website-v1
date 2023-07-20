import React, { useEffect} from 'react';
import '../App.css';
import Cards from '../components/Cards';
import Video from '../components/Headervid';
import Partner from '../components/Partner';
import Bots from '../components/bots';

function Home() {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);
  return (
    
    <>
      <Video videoUrl={'/videos/videoplayback.mp4'} speech={"What are you waiting for?"} btntxt={"Get Your Kart"} />
      <Cards />
      <Partner />
      <Bots />
    </>
  );
}

export default Home;
