import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  width: 100px;
  height: 100px;
  background: red;
  transition: width 2s;
  &:hover {
    width: 300px;
 }
`;

const Slide15 = () => {
  return (
    <section>
    <Div></Div>
    </section>
  );
}

export default Slide15;