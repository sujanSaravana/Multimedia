import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import kontaktBackground from '../Images/3.png'
import Bar from "../components/Navbar";
import Foot from "../components/Footer"




function Kontakt() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_ji390dw',
        'template_wluxotj',
        form.current,
        'KR7Sqx23E4bH_nzvL'
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent")
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <Container fluid >
      <Bar />
      <Row>
        <Col className="kontaktBackground" xs={12} md={6} style={{ backgroundImage: `url(${kontaktBackground})`,backgroundRepeat:"no-repeat" }}></Col>
        <Col className="p-0" xs={12} md={6} style={{ backgroundColor: 'black' }}>
            <form ref={form} onSubmit={sendEmail} className="p-4">
                <br></br>
                <h1 className='title'>Contact Us</h1>
                <label className="caption">Name</label>
                <input type="text" name="user_name" className="form-control" />
                <label className="caption">Email</label>
                <input type="email" name="user_email" className="form-control" />
                <label className="caption">Message</label>
                <textarea name="message" className="form-control"></textarea>
                <input type="submit" value="Send" className="submit-btn" />
            </form>
        </Col>
      </Row>
      <Foot />
    </Container>
  );
}

export default Kontakt;
