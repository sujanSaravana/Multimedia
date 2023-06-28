import React from "react";
import ReactCompareImage from 'react-compare-image';
import bild12 from '../Images/12.jpg';
import bild13 from '../Images/13.jpg';
import bild14 from '../Images/14.jpg'
import '../App.css';
import bild15 from '../Images/15.jpg'

const ImageCompare = () => {
    return(
        <div>
            <ReactCompareImage
      leftImage={bild12}
      rightImage={bild13}
      sliderLineWidth={20} 
      sliderLineColor="#258306" 
    />
        </div>
    )
}

export default ImageCompare;