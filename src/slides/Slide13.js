import React, {useState} from 'react';
import ReactImg from '../static/tips_trick_int.jpg';
import styled from 'styled-components';

const Img =styled.img`
  width: 100px;
  height: 100px;
  background: red;
  transition: width 2s linear 1s;
  &:active {
    width: 300px;
  }
`;

const Slide13 = () => {
  return (
    <section>
      <Img src={ReactImg} style={{ height: 300 }}></Img>
      <br/>
      <h1 style={{color : "white"}}>Tips and Trick Interview !!</h1>
  </section>
  );
}

export default Slide13;