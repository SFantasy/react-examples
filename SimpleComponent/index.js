var React = require('react');
var ReactDOM = require('react-dom');
var SimpleRenderer = require('./SimpleRenderer');
var ComponentWithProps = require('./ComponentWithProps');
var ComponentWithStates = require('./ComponentWithStates');

ReactDOM.render(
  <div>
    <SimpleRenderer />
    <ComponentWithProps data="foo" />
    <ComponentWithStates />
  </div>,
  document.getElementById('container')
);
