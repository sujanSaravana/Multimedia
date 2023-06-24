import React from 'react';
import { Parallax, Background } from 'react-parallax';

const MyParallax = () => (
  <div>
    <Parallax blur={10} bgImage={require('../Images/2.png')} bgImageAlt="the cat" strength={200}>
      <div style={{ height: '300px' }} />
    </Parallax>
    </div>
    );
    export default MyParallax;