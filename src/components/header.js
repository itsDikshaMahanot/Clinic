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
      <Row>
        <Col md={1} sm={2}> <img className="logo" src="./Images/logo1.png"></img></Col>
        <Col md={2} sm={5}> <h4 className="">Clinic</h4></Col>
      </Row>
      <nav className="headerMenu">
        <a href="/home.js">Home</a>
        <a href="/about.js">About</a>
        <a href="#">Contact Us</a>
        <a href="#">Form</a>
      </nav>

    </header>
  )

}

export default Header