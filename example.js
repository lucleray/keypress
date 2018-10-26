import React from 'react';
import { render } from 'react-dom';
import useKeyPress from './';

function App() {
  function handleKeyPress(event) {
    console.log(event.key);
  }

  useKeyPress(handleKeyPress);

  return <div />;
}

render(<App />, window.root);
