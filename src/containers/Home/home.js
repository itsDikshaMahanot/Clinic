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
            <div className="my-container">  
                  
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
                <p>
                    <Row className="row">
                        <Col md={3} sm={5} style={{ paddingLeft: "120px" }}> <img className="profile" src="../images/pic1.jpg" alt="Profile"></img></Col>
                        <Col md={9} sm={7}>
                            <h2 className="profilecontent">This Dr Sonal Chopra .<br /> In the criminal justice system, the people are represented by two separate
                    yet equally important groups. The police who investigate crime and the district attorneys
                    who prosecute the offenders.
                    These are their stories.</h2></Col>
                    </Row>
                    {/* <Row>
                    <Col className = "carouselPic" md={1} sm={2}><img  src = "../images/realx.jpg"></img></Col>
                
                </Row> */}

                    <div>

                    </div>
                </p>

            </div>


        </React.Fragment>
    )

}

export default Home