import React from 'react';
import '../App.css';
import Video from '../components/Headervid';
import Partner from '../components/Partner';
import '../components/Cards.css';
import CardItem from '../components/CardItem';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaFlagCheckered, FaStopwatch,FaHeart} from "react-icons/fa6";
import { RiPresentationFill } from "react-icons/ri";
import { GiMicrophone } from "react-icons/gi";
import Bots from '../components/bots';
import Disqus from '../components/disqus';
function Event() {
    return (
      <>
        <Video videoUrl={'/videos/promotional.webm'} speech={""} btntxt={"Participate in the Event"} />
        <div className='cards'>
      
            <h1>Event</h1>
            <br></br>
            <div className='cards__container'>
                <div className='cards__container'>
                At GoKart Xtreme, we are passionate about fueling your need for speed and adrenaline. Step into the driver's seat and embark on an exhilarating journey that will leave you craving for more. Whether you're a seasoned racer or a first-timer, our state-of-the-art go-karting facility offers the perfect blend of excitement, competition, and pure joy.
                <VerticalTimeline>
                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  date="11:00 AM"
                  iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                  icon={<FaStopwatch/>}>
                  <h3 className="vertical-timeline-element-title">MEET & GREET</h3>
                  <h4 className="vertical-timeline-element-subtitle">In the stand</h4>
                  <p>
                    Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                  </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  date="11:20 AM"
                  iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                  icon={<GiMicrophone/>}
                >
                  <h3 className="vertical-timeline-element-title">PRESENTATIONS</h3>
                  <h4 className="vertical-timeline-element-subtitle">On grid</h4>
                  <p>
                  Add a short description to summarize the presentations section
                  </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  date="13:30 PM"
                  iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                  icon={<RiPresentationFill/>}
                >
                  <h3 className="vertical-timeline-element-title">BRIEFING SESSION FOR THE DRIVERS</h3>
                  <h4 className="vertical-timeline-element-subtitle">Conferance room</h4>
                  <p>
                  Add a short description 
                  </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  date="14:30 PM"
                  iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                  icon={<FaFlagCheckered/>}
                >
                  <h3 className="vertical-timeline-element-title">RACE EVENT</h3>
                  <h4 className="vertical-timeline-element-subtitle">Outdoors B5 circuit</h4>
                  
                </VerticalTimelineElement>
              </VerticalTimeline>
                </div>
            </div>
            <div className='container'>
              <Disqus/>
            </div>
        </div>
        
        
        <Partner />
        <Bots />
      </>
    );
  }
  
  export default Event;