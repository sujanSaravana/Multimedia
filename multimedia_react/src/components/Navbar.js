import { Link, BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import '../App.css';
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Bar() {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  return (
    <div>
      <Navbar className="navbar" expand="lg" expanded={expanded} bg="black" variant="dark">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleToggle}/>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <Nav.Link as={Link} to="/Landingpage">
                <p className="nav-title">Home</p>
              </Nav.Link>
              <Nav.Link as={Link} to="/Angebote">
                <p className="nav-title">Products</p>
              </Nav.Link>
              <Nav.Link as={Link} to="/Kontakt">
                <p className="nav-title">Contact</p>
              </Nav.Link>
              <Nav.Link as={Link} to="/Uebermich">
                <p className="nav-title">About Us</p>
              </Nav.Link>
              <Nav.Link as={Link} to="/Impress" className="title-link">
                <p className="nav-title">Imprint & Privacy Policy</p>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
        </div>
  );
}

export default Bar;
