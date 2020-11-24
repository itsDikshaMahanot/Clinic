import React from 'react';
import { Link, NavLink } from "react-router-dom";
import './header.css';
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from 'react-bootstrap';



/**
* @author
* @function Header
**/

const Header = (props) => {
  return (
    <React.Fragment>

      <header className="header">
        <div>
          <img edge="start" className="logo" src="./images/Makeup.png"></img>
         <Link to="#">MakeUp World</Link>
        </div>
        <nav  >
          <NavLink className="headerMenu" to="/home.js">Home</NavLink>
          <NavLink className="headerMenu" to="/about.js">About</NavLink>
          <NavLink className="headerMenu" to="/about.js">Products</NavLink>
          <NavLink className="headerMenu" to="/about.js">Contact</NavLink>
          {/* <NavLink to="/home.js">Products</NavLink>
          <NavLink to="/about.js">Contact</NavLink> */}
        </nav>
      </header>
    </React.Fragment>

  )

}

export default Header