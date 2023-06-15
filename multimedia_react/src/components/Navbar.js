import { Link, BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import Impress from '../pages/impress';
import Kontakt from '../pages/kontakt';
import Landingpage from '../pages/landingpage';
import Uebermich from '../pages/ueber_mich';
import Angebote from '../pages/angebote';
import '../App.css';
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function Bar() {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  return (
    <BrowserRouter>
      <Navbar className="navbar" expand="lg" expanded={expanded}>
        <Container>
          <Navbar.Brand as={Link} to="/Landingpage" className="logo">
            Lumio💡
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={handleToggle}
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="nav">
              <NavDropdown title="Produkte" id="basic-nav-dropdown" className="nav-title-dropdown">
                <NavDropdown.Item href="#action/3.1">Decklampen</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">...Lampen</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={Link} to="/Kontakt">
                <p className="nav-title">Kontakt</p>
              </Nav.Link>
              <Nav.Link as={Link} to="/Uebermich">
                <p className="nav-title">Über mich</p>
              </Nav.Link>
              <Nav.Link as={Link} to="/Impress">
                <p className="nav-title">Impressum & Datenschutz</p>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/Landingpage" element={<Landingpage />} />
        <Route path="/Angeote" element={<Angebote />} />
        <Route path="/Uebermich" element={<Uebermich />} />
        <Route path="/Impress" element={<Impress />} />
        <Route path="/Kontakt" element={<Kontakt />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Bar;
