import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Grid from "react-bootstrap/Container"
import { Link } from "react-router-dom";
import Image from "react-bootstrap/Image"
import '../App.css';
import Container from "react-bootstrap/Container";
import Product1 from "./Product1";
import bild12 from '../Images/12.jpg';
import bild13 from '../Images/13.jpg';
import bild14 from '../Images/14.jpg'
import bild15 from '../Images/15.jpg'

function ProductGallery(){
    return(
        <div>
            <Container fluid>
            <Row>
                <h1 className="title">Gallery</h1>
                <Col xs={6} md={4}>
                    <Link to="./Product1">
                        <div className="galleryImage">
                            <Image fluid src={bild12} alt='Img 1' className='gallery-img'></Image>
                        </div>
                    </Link>
                        <div className="gallImage">
                            <Image fluid src={bild15} alt='Img 1' className='gallery-img'></Image>
                        </div>
                        <div className="gallImage">
                            <Image fluid src={bild13} alt='Img 1' className='gallery-img'></Image>
                        </div>
                </Col>
                <Col xs={6} md={4}>
                        <div className="galleryImage">
                            <Image fluid src={bild13} alt='Img 1' className='gallery-img'></Image>
                        </div>
                        <div className="gallImage">
                            <Image fluid src={bild12} alt='Img 1' className='gallery-img'></Image>
                        </div>
                        <div className="gallImage">
                            <Image fluid src={bild15} alt='Img 1' className='gallery-img'></Image>
                        </div>
                </Col>
                <Col xs={6} md={4}>
                    <Link to="/Landingpage">
                        <div className="galleryImage">
                    <Image fluid src={bild12} alt='Img 1' className='gallery-img'></Image>
                        </div>
                    </Link>
                        <div className="gallImage">
                    <Image fluid src={bild15} alt='Img 1' className='gallery-img'></Image>
                        </div>
                        <div className="gallImage">
                            <Image fluid src={bild13} alt='Img 1' className='gallery-img'></Image>
                        </div>
                </Col>
            </Row>
            </Container>
        </div>
    )
}

export default ProductGallery;
