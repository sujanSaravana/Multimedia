import { Link, BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import impress from '../pages/impress';
import kontakt from '../pages/kontakt';
import landingpage from '../pages/landingpage';
import uebermich from '../pages/ueber_mich';
import angebote from '../pages/angebote';
import '../App.css';
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import NavDropdown from "react-bootstrap/NavDropdown"


function Bar() {

  return (
    <Navbar className="navbar" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Lumio💡</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="nav">
            <Nav.Link href="#landingpage">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Bar;
