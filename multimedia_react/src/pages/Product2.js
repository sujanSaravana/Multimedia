import React from "react";
import '../App.css';
import bild15 from '../Images/18.jpg';
import Image from "react-bootstrap/Image";
import { Row, Col, Container } from "react-bootstrap";

function Product1() {
  return (
    <Container fluid className="background">
      <Row>
        <Col>
        <div>
          <Image src={bild15} alt='Img 1' className='product-img2'></Image>
        </div>
      </Col>
      <Col>
        <div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
          <h1 className="product-title">Stehlampe</h1>
          <br></br>
          <h4 className="price">CHF 219.-</h4>
          <br></br>
          <p className="product-description">Unsere Stehlampe ist die perfekte Ergänzung für Ihr Zuhause. Mit ihrem eleganten Design und ihrer funktionalen Beleuchtung schafft sie eine angenehme Atmosphäre in jedem Raum.</p>
          <p className="product-description">Mit ihrem zeitlosen Stil fügt sich die Stehlampe harmonisch in verschiedene Einrichtungsstile ein. Sie kann als Leselampe neben Ihrem Lieblingssessel oder als stimmungsvolle Beleuchtung in einer Ecke des Wohnzimmers verwendet werden. Dank des praktischen Ein- und Ausschalters lässt sich die Lampe bequem bedienen.</p>
          <Row>
            <Col>
              <p className="info">Material</p>
            </Col>
            <Col>
              <p className="info2">Plastik</p>
            </Col>
          </Row>
          <Row>
            <Col>
              <p className="info">Farbe</p>
            </Col>
            <Col>
              <p className="info2">Schwarz/Weiss</p>
            </Col>
          </Row>
        </div>
      </Col>
      </Row>
    </Container>
  )
}

export default Product1;
