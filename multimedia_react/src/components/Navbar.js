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

function Bar() {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  return (
    <BrowserRouter>
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
      <Routes>
        <Route path="/Landingpage" element={<Landingpage />} />
        <Route path="/Angebote" element={<Angebote />} />
        <Route path="/Uebermich" element={<Uebermich />} />
        <Route path="/Impress" element={<Impress />} />
        <Route path="/Kontakt" element={<Kontakt />} />
      </Routes>
      <footer className="footer">
        <ul>
            <li><Link to="/Landingpage" className="footer-item"><p>Home</p></Link></li>
            <li><Link to="/Angebote" className="footer-item"><p>Products</p></Link></li>
            <li ><Link to="/Kontakt" className="footer-item"><p>Contact</p></Link></li>
        </ul>
            <p className="copyright">© 2023 My Company. All rights reserved.</p>
        </footer>
    </BrowserRouter>
  );
}

export default Bar;
