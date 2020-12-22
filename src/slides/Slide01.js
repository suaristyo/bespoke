import React from 'react';

const Slide01 = ({deck}) => (
  <section>
    <h1>bespoke-react</h1>
    <h3>Bespoke + React made easy</h3>
    <iframe
      src="https://ghbtns.com/github-btn.html?user=diegomura&repo=bespoke-react&type=star&count=true&size=large"
      frameBorder="0"
      scrolling="0"
      width="130px"
      height="30px" />
      <button onClick={() => deck.next()}>
      Next!!
    </button>
  </section>
);

export default Slide01;
