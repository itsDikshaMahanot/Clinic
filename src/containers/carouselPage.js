import React from 'react';
import { Carousel, CarouselItem, View, Container } from "react-bootstrap";


/**
* @author
* @function CarouselPage
**/

const CarouselPage = (props) => {
    return (
        <Carousel
            activeItem={1}
            length={3}
            showControls={true}
            showIndicators={true}
            className="z-depth-1"
        >

            <CarouselItem itemId="1">                
                    <img
                        className=" h-25 w-75"
                        src="./images/relax1.jpg"
                        alt="First slide"
                    />               
            </CarouselItem>
            <CarouselItem itemId="2">               
                    <img
                        className="d-block w-75"
                        src="./images/steam.jpg"
                        alt="Second slide"
                    />               
            </CarouselItem>
            <CarouselItem itemId="3">                
                    <img
                        className="d-block w-75"
                        src="../images/mvv.png"
                        alt="Third slide"
                    />                
            </CarouselItem>
        </Carousel>

    )

}

export default CarouselPage