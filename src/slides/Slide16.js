import React from 'react';
import styled from 'styled-components';
import {Img_Tq} from '../static';

const Img1 =styled.img`
width: 800px;
animation-name: backInDown;
animation-duration: 4s;
@keyframes backInDown {
  0% {
    -webkit-transform: translateY(-1200px) scale(0.7);
    transform: translateY(-1200px) scale(0.7);
    opacity: 0.7;
  }

  80% {
    -webkit-transform: translateY(0px) scale(0.7);
    transform: translateY(0px) scale(0.7);
    opacity: 0.7;
  }

  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 1;
  }
}
`;



const Slide15 = () => {
  return (
    <section>
      <Img1 src={Img_Tq}></Img1>
  </section>
  );
}

export default Slide15;