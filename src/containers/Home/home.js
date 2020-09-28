import React from 'react';
import './home.css';
import { Row, Col } from 'react-bootstrap';


/**
* @author
* @function Home
**/

const Home = (props) => {
  return(
    <div className = "back">
      <Row>
      <Col md={2} sm={5}> <img className="profile" src="../Images/pic1.jpg" alt ="Profile"></img></Col>
      <Col md={10} sm={7}> <h4 className="">This Dr Sonal Chopra .<br/> The Awesome NAutropathy <i class="fa fa-align-center" aria-hidden="true"></i></h4></Col>
      </Row>
         
   </div>
   )

 }

export default Home