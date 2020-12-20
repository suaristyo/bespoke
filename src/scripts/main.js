// Require Node modules in the browser thanks to Browserify: http://browserify.org
var bespoke = require('bespoke');
var classes = require('bespoke-classes');
var nav = require('bespoke-nav');
var scale = require('bespoke-scale');
var bullets = require('bespoke-bullets');
var hash = require('bespoke-hash');
var prism = require('bespoke-prism');
var extern = require('bespoke-extern');
var backdrop = require('bespoke-backdrop');
var nebula = require('bespoke-theme-nebula');
var progress = require('bespoke-progress');

// Bespoke.js
bespoke.from({ parent: 'article.deck', slides: 'section' }, [
  nebula(),
  classes(),
  nav(),
  scale(),
  bullets('.build, .build-items > *:not(.build-items)'),
  hash(),
  prism(),
  extern(bespoke),
  backdrop(),
  progress()
]);
