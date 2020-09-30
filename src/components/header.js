import React from 'react';
import './header.css';
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from 'react-bootstrap';



/**
* @author
* @function Header
**/

const Header = (props) => {
  return (
    <header className="header">    
      {/* <img className="logo" src="./Images/logo1.png"></img> */}
      <h2>Naturopathy Clinic</h2>
      <nav className="headerMenu">
        <a href="home.js">Home</a>
        <a href="about.js">About</a> 
        <a href ="#">Contact</a>
        <a href="#">Form</a>
      </nav>

    </header>
  )

}

export default Header