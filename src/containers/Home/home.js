import React from 'react';
import './home.css';
import CardOne from 'G:/Clinic/src/components/card';
import { Row, Col, Carousel, CarouselItem, Card, } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';



/**
* @author
* @function Home
**/

const Home = (props) => {
    
    return (
        <React.Fragment>
            <div className="my-container">
                <div className="row">
                    <div className="col-sm-12">
                        <Carousel className="carousel col-sm-12" >
                            <Carousel.Item >
                                <img className="" width={1350} height={550} src="https://i0.wp.com/www.templatescatalog.com/wp-content/uploads/2020/07/Macaroon-cake-on-black-background-stock-photo.jpg?fit=1600%2C1067&ssl=1" alt="image1"></img>
                                <Carousel.Caption>
                                    <h3>First slide label</h3>
                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item >
                                <img className="" width={1330} height={550} src="https://gbc-cdn-public-media.azureedge.net/img16246.1426x713.jpg" alt="image1"></img>
                                <Carousel.Caption>
                                    <h3>Second slide label</h3>
                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="" width={1350} height={550} src="https://1.bp.blogspot.com/-3oQwlK6Ki0Y/U-RQ0yJasnI/AAAAAAAAAYs/m4oGDN9wE7s/s1600/paneer-tikka-recipe-picture.jpeg" alt="Second slide"
                                />
                                <Carousel.Caption>
                                    <h3>Third slide label</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>
                <p>
                    Cosmetics are a category of health and beauty products that are used to care for the face and body,
                    or used to accentuate or change a person's appearance.
                    Though cosmetics are commonly thought of as only makeup used to alter a person's appearance,
                    cosmetics can also refer to a number of products used to care for the skin and the body,
                    as well as those used to add fragrance to it.                   
                </p>
                <div className="row">
                    {/* <div className="col-sm-12">
                        <Card raised className="bg-dark text-white card">
                            <Card.Img className="card-img" src="https://media.istockphoto.com/photos/strawberry-cupcake-on-a-black-background-with-copy-space-picture-id1147010224?k=6&m=1147010224&s=612x612&w=0&h=q9c8Yni2Mv9EyhbZUT2SXwr7zJlNsIIDXhx9duZXyeI=" alt="Card image" />
                            <Card.ImgOverlay>
                                <Card.Title ><h2>  </h2></Card.Title>
                                <Card.Text className="">
                                    <h2 className="cardText">Strawberry Muffin </h2>
                                </Card.Text>
                            </Card.ImgOverlay>
                        </Card>
                        <Card className="bg-dark text-white card">
                            <Card.Img className="card-img" src="https://i1.pickpik.com/photos/258/374/560/cupcake-cake-sweets-sugar-preview.jpg" alt="Card image" />
                            <Card.ImgOverlay>
                                <Card.Title ><h2>  </h2></Card.Title>
                                <Card.Text >
                                    <h2 className="cardText">Hazlenut Muffin </h2>
                                </Card.Text>
                            </Card.ImgOverlay>
                        </Card>
                    </div> */}
                    <CardOne />
                </div>
               
               
            </div>
        </React.Fragment>
    )

}

export default Home



