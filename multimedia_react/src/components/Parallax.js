import React from 'react';
import { Parallax, Background } from 'react-parallax';
import bild3 from '../Images/parallax-img.jpg'

const MyParallax = () => (
  <div>
    <Parallax
      blur={0}
      bgImage={require('../Images/parallax-img.jpg')}
      bgImageAlt="the cat"
      strength={300}
    >
      <div style={{ height: '10cm', width: '15cm' }} />
    </Parallax>
    </div>
    );
    export default MyParallax;