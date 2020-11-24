import React from 'react';
import './home.css';
import { Row, Col, Carousel, CarouselItem, Card,  } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


/**
* @author
* @function Home
**/

const Home = (props) => {
    let slidearr = [1, 2, 3, 4, 5]
    return (
        <React.Fragment>
            <div className="my-container">
                <div className="row">
                    <div className="col-sm-12">
                        <Carousel className="carouselInner" >
                            <Carousel.Item >
                                <img className="d-block w-100" src="https://dev.rodpub.com/images/178/915_main.jpg" alt="image1"></img>
                                <Carousel.Caption>
                                    <h3>First slide label</h3>
                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            {/* <Carousel.Item >
                                <img className="d-block w-100" src ="https://images.creativemarket.com/0.1.0/ps/7072219/910/456/m1/fpnw/wm1/k8hiz26iu7xe24vqst7qavteq8cjllf5ndhdw9yxn4q5kwz0pd4lk08rcctl4i8j-.jpg?1570084558&s=adc0e9f1607bfda41d63ecd822cee2ba" alt = "image1"></img>
                                <Carousel.Caption>
                                        <h3>Second slide label</h3>
                                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                    </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                    <img className="d-block w-100" src="https://cdsco.gov.in/opencms/export/system/modules/CDSCO.WEB/resources/img/slider/cosmetic_new1.png" alt="Second slide"
                                    />
                                    <Carousel.Caption>
                                        <h3>Third slide label</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>                                */}
                        </Carousel>
                    </div>
                </div>
                <p>
                    Cosmetics are a category of health and beauty products that are used to care for the face and body,
                    or used to accentuate or change a person's appearance.
                    Though cosmetics are commonly thought of as only makeup used to alter a person's appearance,
                    cosmetics can also refer to a number of products used to care for the skin and the body,
                    as well as those used to add fragrance to it.
                    There are a large number of cosmetics available under these various categories,
                    each designed for different purposes and featuring different characteristics
                </p>
                <div className ="col-sm-12 row">
                <Card raised className="bg-dark text-white card">
                    <Card.Img   className= "card-img"
                     src="https://cdsco.gov.in/opencms/export/system/modules/CDSCO.WEB/resources/img/slider/cosmetic_new1.png" alt="Card image" />
                    <Card.ImgOverlay>
                        <Card.Title ><h2> AMWAY</h2></Card.Title>
                        <Card.Text className="cardText">
                            <h6 className="cardText">This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer. </h6>
                         </Card.Text>
                        
                    </Card.ImgOverlay>
                </Card>
                <Card className="order-last bg-dark text-white card">
                    <Card.Img className= "card-img" src="https://cdsco.gov.in/opencms/export/system/modules/CDSCO.WEB/resources/img/slider/cosmetic_new1.png" alt="Card image" />
                    <Card.ImgOverlay>
                        <Card.Title ><h2> ORIFLAME</h2></Card.Title>
                        <Card.Text >
                        <h6 className="cardText">This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer. </h6>
                         </Card.Text>
                        
                    </Card.ImgOverlay>
                </Card>
                </div>
                
            </div>
        </React.Fragment>
    )

}

export default Home



