import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import backgroundImg from '../Images/home-background.png';
import ImageCompare from "../components/ImageCompare";
import Bar from "../components/Navbar";


function Landingpage() {
  return (
    <Container className="background" fluid>
      <div className="background-img-container">
        <div className="background-img" style={{ backgroundImage: `url(${backgroundImg})` }}>
          <div className="content">
            <h1 className="title">Lumio💡</h1>
              <div className="text-btn">
                <Link to="/angebote">
                  <button className="home-btn">Jetzt Kaufen</button>
                </Link>
              </div>
          </div>
        </div>
      </div>
        <div>
            <ImageCompare />
        </div>
    </Container>
  );
}

export default Landingpage;
