
import { Carousel } from 'react-bootstrap';

import { C1, C2, C3 } from '../../assets/main';
const CarouselComponent = () => {
  return (
    <div>
    <Carousel className='carousel-container'>
      <Carousel.Item className='carousel-item'>
        <img
          className="d-block w-100"
          src={C1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='carousel-item'>
        <img
          className="d-block w-100"
          src={C2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='carousel-item'>
        <img
          className="d-block w-100"
          src={C3}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
};

export default CarouselComponent;
