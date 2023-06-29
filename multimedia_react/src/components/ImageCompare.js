import React from "react";
import ReactCompareImage from 'react-compare-image';
import bild12 from '../Images/13v2.png';
import bild13 from '../Images/13.jpg';
import bild14 from '../Images/14.jpg'
import bild16 from '../Images/16.jpg'
import bild17 from '../Images/11v2.png'
import bild18 from '../Images/11.png'
import '../App.css';
import bild15 from '../Images/16v2.png'
import { Col, Container, Row } from "react-bootstrap";

const ImageCompare = () => {
    return(
        <Container fluid className="compare-background" >
            <div className="image-compare-row">
        <Row >
            <Col className="image-compare-col">
                <ReactCompareImage className="mi12" leftImage={bild12} rightImage={bild13} sliderLineWidth={5}  sliderLineColor="#fff" />
            </Col>
            <Col className="image-compare-col">
                <ReactCompareImage leftImage={bild15} rightImage={bild16} sliderLineWidth={5}  sliderLineColor="#fff" />
            </Col>
            <Col className="image-compare-col">
                <ReactCompareImage className="mi122" leftImage={bild17} rightImage={bild18} sliderLineWidth={5}  sliderLineColor="#fff" />
            </Col>
        </Row>
            </div>
        </Container>
    )
}

export default ImageCompare;

