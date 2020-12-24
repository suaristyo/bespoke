import React from 'react';
import { Button , DatePicker} from 'antd';
import 'antd/dist/antd.css';

const Slide01 = () => (
  <section>
    <h1>bespoke-react</h1>
    <h3>Bespoke + React made easy</h3>
    <iframe
      src="https://ghbtns.com/github-btn.html?user=diegomura&repo=bespoke-react&type=star&count=true&size=large"
      frameBorder="0"
      scrolling="0"
      width="130px"
      height="30px" />
    <Button type="primary">Primary Button</Button>
    <Button>Default Button</Button>
    <Button type="dashed">Dashed Button</Button>
    <DatePicker/>
    <br />
  </section>
);

export default Slide01;
