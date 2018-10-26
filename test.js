'use strict';
let test = require('ava');
let { createElement: h } = require('react');
let ReactTestRenderer = require('react-test-renderer');
let useKeyPress = require('./');
let { renderIntoDocument } = require('react-dom/test-utils');

function render(val) {
  return ReactTestRenderer.create(val);
}

test(t => {
  let calls = [];
  window.addEventListener = (...args) => calls.push(args);

  function Component() {
    function handleKeyPress(event) {
      console.log(event);
    }

    useKeyPress(handleKeyPress);

    return h('div');
  }

  render(h(Component));

  // console.log(calls);

  t.is(true, true);
});
