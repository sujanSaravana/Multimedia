import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import bild1 from '../Images/1.png';
import bild2 from '../Images/2.png';
  
export default function App() {
  return (
    <Container fluid>
    <div className='carousel' >
      <h4 className='title'>Unsere Produkte</h4>
      <Carousel>
        <Carousel.Item interval={500}>
        <img src={bild1} alt='Img 1' className='img1'></img>
          <Carousel.Caption>
            <h3>Label for first slide</h3>
            <p>Sample Text for Image One</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img src={bild2} alt='Img 2' className='img2'></img>
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