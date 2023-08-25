import React from "react";
import '../App.css';
import bild12 from '../Images/12.jpg';
import Image from "react-bootstrap/Image";
import { Row, Col, Container } from "react-bootstrap";
import Bar from "../components/Navbar";
import Foot from "../components/Footer"



function Product1() {
  return (
    <Container fluid className="background">
      <Bar />
      <Row>
        <Col>
        <div>
          <Image src={bild12} alt='Img 1' className='product-img'></Image>
        </div>
      </Col>
      <Col>
        <div>
          <h1 className="product-title">Stehlampe</h1>
          <br></br>
          <h4 className="price">CHF 69.-</h4>
          <br></br>
          <p className="product-description">Unsere Stehlampe ist die perfekte Ergänzung für Ihr Zuhause. Mit ihrem eleganten Design und ihrer funktionalen Beleuchtung schafft sie eine angenehme Atmosphäre in jedem Raum.</p>
          <p className="product-description">Mit ihrem zeitlosen Stil fügt sich die Stehlampe harmonisch in verschiedene Einrichtungsstile ein. Sie kann als Leselampe neben Ihrem Lieblingssessel oder als stimmungsvolle Beleuchtung in einer Ecke des Wohnzimmers verwendet werden. Dank des praktischen Ein- und Ausschalters lässt sich die Lampe bequem bedienen.</p>
          <Row>
            <Col>
              <p className="info">Material</p>
            </Col>
            <Col>
              <p className="info2">Holz/Metall</p>
            </Col>
          </Row>
          <Row>
            <Col>
              <p className="info">Farbe</p>
            </Col>
            <Col>
              <p className="info2">Gold</p>
            </Col>
          </Row>
        </div>
      </Col>
      </Row>
      <Foot />
    </Container>
  )
}

export default Product1;
