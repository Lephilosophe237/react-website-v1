import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { FaUser, FaCartArrowDown,FaHeart} from "react-icons/fa6";

function Navbar() {
  const [click, setClick] = useState(false);
 

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            GoKart
            <img src={process.env.PUBLIC_URL +'/images/logo.png'} alt="logo" className='imglogo'/>
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/kart'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Kart
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/services'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Services
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/gallery'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Gallery
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/event'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Event
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/Aboutus'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                About us
              </Link>
            </li>

            <li>
              <Link
                to='/Book'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
            <li className='nav-links-mobile'>
              <Link className='nav-links '><FaHeart/><span>  </span><FaUser /><span>  </span><FaCartArrowDown/></Link>
            </li>
          </ul>
          <Link className='nav-links hide'><FaHeart/></Link>
          <Link className='nav-links hide'><FaUser /></Link>
          <Link className='nav-links hide'><FaCartArrowDown/></Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
