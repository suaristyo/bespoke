import React from 'react';
import styled from 'styled-components';

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
animation-iteration-count: infinite;
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
animation-iteration-count: infinite;
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


const Slide02 = () => (
  <section>
    <H2>Apa tujuan dari sebuah Interview ?</H2>
    <P2> Tujuan dari interview ,dari perspektif pewawancara ialah untuk menyaring keluar semua kandidat yang mungkin paling sesuai dengan
      pekerjaan yang ada.
    </P2>
    <br/>
    <P3>Tugas anda adalah untuk menunjukkan bahwa anda cocok untuk pekerjaan dan perusahaan tersebut</P3>
    <br />
    
  </section>
);

export default Slide02;
