import React from "react";
import '../App.css';
import bild12 from '../Images/12.jpg';
import Image from "react-bootstrap/Image";
import { Row, Col, Container } from "react-bootstrap";

function Product1() {
  return (
    <Container fluid className="background">
      <Row>
        <Col>
        <div>
          <Image src={bild12} alt='Img 1' className='product-img'></Image>
        </div>
      </Col>
      <Col>
        <div>
          <h1>kjesfh</h1>
        </div>
      </Col>
      </Row>
    </Container>
  )
}

export default Product1;
