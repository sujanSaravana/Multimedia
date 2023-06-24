import React from 'react';
import { Parallax, Background } from 'react-parallax';
import bild3 from '../Images/3.png'

const MyParallax = () => (
  <div>
    <Parallax
      blur={0}
      bgImage={require('../Images/7.jpg')}
      bgImageAlt="the cat"
      strength={400}
    >
      Put some text content here
      or even an empty div with fixed dimensions
      to have a height for the parallax.
      <div style={{ height: '1200px' }} />
    </Parallax>
    </div>
    );
    export default MyParallax;