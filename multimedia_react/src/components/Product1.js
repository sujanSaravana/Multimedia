import React, { useState } from "react";
import '../App.css';
import bild12 from '../Images/12.jpg';
import Image from "react-bootstrap/Image"
import { Container } from "react-bootstrap";

function Product1() {
    return(
        <Container fluid className="background">
        <div>
        <Image fluid src={bild12} alt='Img 1' className='gallery-img'></Image>
        </div>
        </Container>
    )
}

export default Product1;