import './pages.css';
import React from "react";
import bild12 from "../Images/12.jpg"

function Landingpage() {
    return (
        <div className='background'>
            <h1> 
            <img src={bild12} className='img12'></img>
            <button>Jetzt Kaufen</button>
            </h1>
        </div>
    );
}

export default Landingpage;