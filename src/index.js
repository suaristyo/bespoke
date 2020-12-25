import React from 'react';
import ReactDOM from 'react-dom';
import cube from 'bespoke-theme-cube';
import classes from 'bespoke-classes';
import keys from 'bespoke-keys';
import touch from 'bespoke-touch';
import progress from 'bespoke-progress';
import bullets from 'bespoke-bullets';
import prism from 'bespoke-prism';
import App from './components/App';
import nebula from 'bespoke-theme-nebula';


const MOUNT_ELEMENT = document.getElementById('root');

const plugins = [
  // cube(),
  nebula(),
  classes(),
  keys(),
  touch(),
  progress(),
  bullets('li, .bullets'),
  prism(),
];

ReactDOM.render(
  <App
    mountElement={MOUNT_ELEMENT}
    plugins={plugins}
  />,
  MOUNT_ELEMENT
);
