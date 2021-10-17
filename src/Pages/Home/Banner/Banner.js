import React from 'react';
import { Carousel } from 'react-bootstrap';
import carousel1  from '../../../Images/Carousel/carosel-1.jpg';
import carousel7  from '../../../Images/Carousel/carousel-7.jpg';
import carousel4  from '../../../Images/Carousel/carosel-4.jpg';
const Banner = () => {
    return (
        <>
            <Carousel >
  <Carousel.Item interval={1000}>
    <img
      className="w-100"
      src={carousel1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Aged Care Emergency Retrieval Teams</h3>
     
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="w-100"
      src={ carousel7 }
      alt="Second slide"
    />
    <Carousel.Caption>
      <h3>Aged Care Clinical and Essential Support Service</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="w-100"
      src={ carousel4 }
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Environmental Health Assessment and Support</h3>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </>
    );
};

export default Banner;