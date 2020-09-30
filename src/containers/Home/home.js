import React from 'react';
import './home.css';
import { Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


/**
* @author
* @function Home
**/

const Home = (props) => {
  return (
    <React.Fragment>
      <div className="container">
        In the criminal justice system, the people are represented by two separate
        yet equally important groups. The police who investigate crime and the district attorneys
        who prosecute the offenders.
        These are their stories.
      </div>
      <div className="back">
        <h1>About Naturopathy</h1>
        <p>
          Naturopathy or naturopathic medicine is a form of alternative medicine that employs an array of
          pseudoscientific practices branded as "natural", "non-invasive", or promoting "self-healing".
          The ideology and methods of naturopathy are based on vitalism and folk medicine,
          rather than evidence-based medicine.Naturopathy is based on principles and employs various therapies
          and diagnostic tools.
          As long as a therapist follows these Naturopathic Principles he can be called a Naturopathic Therapist.
          The Naturopathic Principles are:
        </p>
        <Row>
          <Col md={2} sm={5}> <img className="profile" src="../images/pic1.jpg" alt="Profile"></img></Col>
          <Col md={10} sm={7}> <h2 className="profilecontent">This Dr Sonal Chopra .<br /> The Awesome NAutropathy</h2></Col>
        </Row>
      </div>


    </React.Fragment>
  )

}

export default Home