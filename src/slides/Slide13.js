import React, {useState} from 'react';
import styled from 'styled-components';
import {Img_TT} from '../static';

const Img1 =styled.img`
width: 300px;
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

const H2 =styled.h2`
color:white;
fontSize : 52px;
animation-name: slideInLeft;
animation-duration: 4s;
@keyframes slideInLeft {
  from {
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
`;

const Slide13 = () => {
  return (
    <section>
      <Img1 src={Img_TT}></Img1>
      <H2 style={{color : "white"}}>Tips & Trick Interview</H2>
  </section>
  );
}

export default Slide13;