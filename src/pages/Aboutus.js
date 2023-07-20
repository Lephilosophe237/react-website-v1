import React from 'react';
import '../App.css';
import '../components/Cards.css';
import Video from '../components/Headervid';
import 'bootstrap/dist/css/bootstrap.min.css';
import Bots from '../components/bots';
export default function Aboutus() {
  return(
  <>
  <Video videoUrl={'/videos/gallery.mp4'} speech={"About Us"} btntxt={"Contact Us"} />
  <div className='cards'>

      <h1>About us</h1>
      <div className='cards__container'>
          <div className='cards__container'>
          At GoKart Xtreme, we are passionate about fueling your need for speed and adrenaline. Step into the driver's seat and embark on an exhilarating journey that will leave you craving for more. Whether you're a seasoned racer or a first-timer, our state-of-the-art go-karting facility offers the perfect blend of excitement, competition, and pure joy.
          Our faility, on Gatineau, Montreal, Ottawa and Alberta make us the best gakarting institution on Canad
          </div>
      </div>
  </div>
  <div className="cards pt-5">
    <h1>Experienced & Professional Team</h1>
    <div className='cards__container'>
      <div className='cards__container'>
        <p>Our teams consist of talented drivers, experienced mechanics, and dedicated support staff, all working together to create a winning combination. We believe in the power of teamwork, supporting and motivating each other to reach new heights of success. </p>
      </div>
      <div className="container marketing">

              
              <div className="row ms-5">
                <div className="col-lg-4">
                  <img src="images/roa110120fea-hamilton-02-1602261061.jpg" className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false" />
                  <h2 className="fw-normal">Sir Lewis Hamilton</h2>
                  <h2 className="fs-6">Senior Karting Coach</h2>
                  <p>Certification in bicycle maintenance for skilled technicians obtained in 2005.</p>
                  <p><a className="btn btn-secondary" href="#">View details »</a></p>
                </div>
                <div className="col-lg-4">
                  <img src="images/00121045_640-scaled-e1639322245833.jpg" className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg"  aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false" />
                  <h2 className="fw-normal">Carlos Sainz</h2>
                  <h2 className="fs-6">Senior Karting Coach</h2>
                  <p>Certification in bicycle maintenance for skilled technicians obtained in 2012</p>
                  <p><a className="btn btn-secondary" href="#">View details »</a></p>
                </div>
                <div className="col-lg-4">
                  <img src="images/195075.jpg" class="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg"  aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false" />
                  <h2 className="fw-normal">Valteri Bottas</h2>
                  <h2 className="fs-6">Senior Karting Coach</h2>
                  <p>Certification in bicycle maintenance for skilled technicians obtained in 2016</p>
                  <p><a className="btn btn-secondary" href="#">View details »</a></p>
                </div>
              </div>
          
        
          
              <hr className="featurette-divider"/>
          
              <div className="row featurette">
                <div className="col-md-7">
                  <h2 className="featurette-heading fw-normal lh-1">First featurette heading. <span className="text-body-secondary">It’ll blow your mind.</span></h2>
                  <p className="lead">Some great placeholder content for the first featurette here. Imagine some exciting prose here.</p>
                </div>
                <div className="col-md-5">
                  <img src="images/roa110120fea-hamilton-02-1602261061.jpg" className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg"  aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false" />
                </div>
              </div>
          
              <hr className="featurette-divider" />
          
              <div className="row featurette">
                <div className="col-md-7 order-md-2">
                  <h2 className="featurette-heading fw-normal lh-1">Oh yeah, it’s that good. <span className="text-body-secondary">See for yourself.</span></h2>
                  <p className="lead">Another featurette? Of course. More placeholder content here to give you an idea of how this layout would work with some actual real-world content in place.</p>
                </div>
                <div className="col-md-5 order-md-1">
                  <img src="images/63a3fd28954ef1b9fa2d43f208f958a8b93ed005.jpeg" className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg"  aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false" />
                </div>
              </div>
          
              <hr className="featurette-divider" />
          
              <div className="row featurette">
                <div className="col-md-7">
                  <h2 className="featurette-heading fw-normal lh-1">And lastly, this one. <span className="text-body-secondary">Checkmate.</span></h2>
                  <p className="lead">And yes, this is the last block of representative placeholder content. Again, not really intended to be actually read, simply here to give you a better view of what this would look like with some actual content. Your content.</p>
                </div>
                <div className="col-md-5">
                  <img src="images/b3dbb028d950ce49f020e640033f2735_1.jpg" className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg"  aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false" />
                </div>
              </div>
          
            </div>
    </div>
    <Bots />
   
  </div>
  </>
    );
}
