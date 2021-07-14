import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import '../css/Navbar.css';
import '../css/Button.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUserGraduate, faUserCog, faAdmin,faLaptop,faPhone, faEnvelope, faLock, faUndo, faUserPlus, faUser, faLaptopHouse, faLaptopCode } from "@fortawesome/free-solid-svg-icons";


function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const logout =() =>{
    localStorage.removeItem("token")
      window.location.href = '/';
  }

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            <h3 style={{"marginBottom":"26px"}}>
              <FontAwesomeIcon icon={faLaptopHouse} />
              EduCare </h3>
            <i class='fab fa-typo3' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              <FontAwesomeIcon icon={faHome} />&nbsp;
              Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/admin-login'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                <FontAwesomeIcon icon={faUserCog} />&nbsp;
                Principle
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/teacher-login'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                <FontAwesomeIcon icon={faUser} />&nbsp;
                Teacher
              </Link>
            </li>

            <li className='nav-item'>
              <Link
                to='/registration'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                <FontAwesomeIcon icon={faUserGraduate} />&nbsp;
                Student
              </Link>
            </li>
               
           
            </ul>
       
      
        </div>
      </nav>
    </>
  );
}

export default Navbar;
