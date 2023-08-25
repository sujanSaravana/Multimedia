import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import bild2 from "../Images/7.jpg";
import Bar from "../components/Navbar";
import Foot from "../components/Footer"



function Uebermich() {
  return (
    <Container fluid className="background">
      <Bar />
      <div className="about-background">
        <Row className="upper-background">
          <Col>
            <img src={bild2} alt="Lamp" className="lamp-image" />
          </Col>
          <Col>
          <h1 className="about-title">Our Story</h1>
            <p className="text">
              Welcome to our online lamp shop! We are passionate about lighting up your life with beautiful and captivating lamps. Our journey began with a simple idea - to provide unique and stylish lighting solutions that transform any space into a warm and inviting haven.ehind the scenes, a team of skilled artisans worked diligently to craft these illuminating masterpieces. They poured their hearts and souls into each lamp, infusing them with love and care. The artisans believed that their creations had the power to transform spaces, create ambiance, and evoke emotions.
            </p>
          </Col>
        </Row>
      </div>
      <Foot />
    </Container>
  );
}

export default Uebermich;
