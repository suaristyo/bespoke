import React from 'react';
import styled from 'styled-components';

const PA =styled.p`
color:white;
animation-name: flip;
animation-duration: 4s;
@keyframes flip {
  from {
    -webkit-transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg);
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
    opacity: 0;
  }

  40% {
    -webkit-transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg);
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }

  50% {
    -webkit-transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg);
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }

  80% {
    -webkit-transform: perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg);
    transform: perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }

  to {
    -webkit-transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg);
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
    opacity: 1;
  }
}
`;
const H3 =styled.h3`
color:white;
animation-name: fadeIn;
animation-duration: 4s;
@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}
`;
const H1 =styled.h1`
color:white;
animation-name: fadeIn;
animation-duration: 4s;
@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}
`;

const Slide01 = () => {
  return (
    <section>
    <H1>Presentasi Interview T&T</H1>
    <H3>Anggota</H3>
    <PA>Stephen (171112640)</PA>
    <PA>Suaristyo (171111296)</PA>
    <PA>William Handono (171110258)</PA>
    <br />
  </section>
  );
}

export default Slide01;
