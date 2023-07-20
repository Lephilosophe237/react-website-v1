import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Kart from './pages/Kart';
import Aboutus from './pages/Aboutus';
import Book from './pages/Book';
import Gallery from './pages/Gallery';
import Event from './pages/Event';
import Services from './pages/Services';
import FAQ from './pages/FAQ';
import Footer from './components/Footer';
import { useEffect } from "react";
const App = () => {
  const googleTranslateElementInit = () => {
    new window.google.translate.TranslateElement(
      {
        pageLanguage: "en",
        autoDisplay: false
      },
      "google_translate_element"
    );
  };
  useEffect(() => {
    var addScript = document.createElement("script");
    addScript.setAttribute(
      "src",
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
    );
    document.body.appendChild(addScript);
    window.googleTranslateElementInit = googleTranslateElementInit;
  }, []);
  return (
    <>
    <div id="google_translate_element" className='bg-white'></div>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/kart' component={Kart} />
          <Route path='/services' component={Services} />
          <Route path='/gallery' component={Gallery} />
          <Route path='/event' component={Event} />
          <Route path='/Aboutus' component={Aboutus} />
          <Route path='/Book' component={Book} />
          <Route path='/FAQ' component={FAQ} />
        </Switch>
      <Footer />
      </Router>
      
    </>
  );
}

export default App;
//https://codesandbox.io/s/google-translate-in-react-js-qzdjj?file=/src/App.js:617-658