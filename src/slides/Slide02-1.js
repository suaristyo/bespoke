import React from 'react';
import styled from 'styled-components';
import {Img_TjInt,Img_ChIc} from '../static'

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
const P1 =styled.p`
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
const P2 =styled.p`
color:white;
fontSize : 52px;
animation-name: slideInRight;
animation-duration: 4s;
@keyframes slideInRight {
  from {
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
`;
const P3 =styled.p`
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
const Img1 =styled.img`
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

const Slide02 = (currentSlide) => (
  <section>
    <Img1 in={currentSlide} src={Img_ChIc} style={{width:100}} unmountOnExit></Img1>
    <Img1 src={Img_TjInt}></Img1>
    <H2>Apa tujuan dari sebuah Interview ?</H2>    
  </section>
);

export default Slide02;
