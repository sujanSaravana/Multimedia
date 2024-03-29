import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import backgroundImg from '../Images/home-background.png';
import ImageCompare from "../components/ImageCompare";
import Parallax from "../components/Parallax"
import Bar from "../components/Navbar";
import Foot from "../components/Footer"


function Landingpage() {
  return (
    <Container className="background" fluid>
      <Bar />
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
      <Parallax />
        <div>
            <ImageCompare />
        </div>
        <div>
        </div>
        <Foot />
    </Container>
  );
}

export default Landingpage;
