import React from "react";
import { Container } from "react-bootstrap";

function impress() {
    return (
        <Container fluid className="background-impress">
            <h1 className="title"> 
            Privacy Policy
            </h1>
            <p className="update-date">Last Updated 30.06.2023</p>
            <br></br>
            <p className="privacy-text">This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.</p>
            <br></br>
            <p className="privacy-text">We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy. This Privacy Policy has been created with the help of the TermsFeed Privacy Policy Generator.</p>
        </Container>
    );
}

export default impress;