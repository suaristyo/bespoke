import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  width: 100px;
  height: 100px;
  background-color: red;
  position: relative;
  animation-name: block;
  animation-duration: 4s;
  animation-iteration-count: infinite;
  @keyframes block {
    0%   {background-color:red; left:0px; top:0px;}
    25%  {background-color:yellow; left:200px; top:0px;}
    50%  {background-color:blue; left:200px; top:200px;}
    75%  {background-color:green; left:0px; top:200px;}
    100% {background-color:red; left:0px; top:0px;}
 }
`;

const Paragraph = styled.p`
  font-size: 15px;
  text-align: center;
`;

const Slide15 = () => {
  return (
    <section>
    <Div>
    </Div>
    </section>
  );
}

export default Slide15;