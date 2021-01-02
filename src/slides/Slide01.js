import React from 'react';
import styled from 'styled-components';

const PA =styled.p`
color:white;
animation-name: flip;
animation-duration: 4s;
@keyframes flip {
opacity:0;
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
const P1 =styled.p`
color:white;
animation-name: fadeIn;
animation-duration: 4s;
animation-delay:1s;
@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}
`;
const P2 =styled.p`
color:white;
animation-name: fadeIn;
animation-duration: 4s;
animation-delay:2s;
@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}
`;
const P3 =styled.p`
color:white;
animation-name: fadeIn;
animation-duration: 4s;
animation-delay:3s;
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
    <PA><P1>Stephen (171112640)</P1></PA>
    <PA><P2>Suaristyo (171111296)</P2></PA>
    <PA><P3>William Handono (171110258)</P3></PA>
    <br />
  </section>
  );
}

export default Slide01;
