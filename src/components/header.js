import React from 'react';
import './header.css';
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';



/**
* @author
* @function Header
**/

const Header = (props) => {
  return(
    <header className = "header">     
       <img className="logo" src="./Images/logo1.png"></img>        
      <nav className ="headerMenu">
        <a href="#">Home</a>
        <a href="#">Services</a>
        <a href="#">Contact Us</a>
        <a href="#">Form</a>
      </nav>
      
       
    </header>
   )

 }

export default Header