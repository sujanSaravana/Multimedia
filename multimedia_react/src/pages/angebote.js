import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import bild1 from '../Images/1.png';
import bild4 from '../Images/4.png';

export default function App() {
  return (
    <Container fluid className='background'>
      <h1 className='title'>Unsere Produkte</h1>
      <div className='carousel'>
        <Carousel>
          <Carousel.Item interval={5000}>
            <div className="img-container">
              <img src={bild1} alt='Img 1' className='img1'></img>
            </div>
            <Carousel.Caption>
              <h3>Label for first slide</h3>
              <p>Sample Text for Image One</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={5000}>
            <div className="img-container">
              <img src={bild4} alt='Img 2' className='img2'></img>
            </div>
            <Carousel.Caption>
              <h3>Label for second slide</h3>
              <p>Sample Text for Image Two</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </Container>
  );
}
