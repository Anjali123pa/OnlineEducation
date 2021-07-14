import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import '../css/Navbar.css';
import '../css/Button.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUserGraduate, faUserCog, faAdmin,faLaptop,faPhone, faEnvelope, faLock, faUndo, faUserPlus, faUser, faLaptopHouse, faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import { Redirect } from "react-router-dom";


function TeacherNavbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const teacherLogout = () => {
    localStorage.removeItem("loggedTeacher");
    <Redirect to="/" />;
  };
  

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
              <Link to='/teacherdash' className='nav-links' onClick={closeMobileMenu}>
              <FontAwesomeIcon icon={faHome} />&nbsp;
              Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/session'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                <FontAwesomeIcon icon={faUserCog} />&nbsp;
                Session
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/add-test'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                <FontAwesomeIcon icon={faUser} />&nbsp;
                Test
              </Link>
            </li>

            <li className='nav-item'>
              <Link
                to='/attendance'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                <FontAwesomeIcon icon={faUserGraduate} />&nbsp;
                Attendance
              </Link>
            </li>
           
              
            </ul>
        <button style={{"color":"white","marginBottom":"21px","width":"100px","borderRadius":"10px", "marginRight":"200px"}}><span  style={{"color":"black"}} ><Link to="/" style={{"color":"black"}} onClick={teacherLogout}>Logout </Link></span></button>
      
        </div>
      </nav>
    </>
  );
}

export default TeacherNavbar;
