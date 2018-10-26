import React, { useState } from 'react';
import { render } from 'react-dom';
import useKeyPress from './';

function App() {
  const [keys, setKeys] = useState([]);

  function handleKeyPress({ key }) {
    setKeys(keys => [key, ...keys]);
  }

  useKeyPress(handleKeyPress);

  return (
    <div>
      <h3>Last keys pressed</h3>
      <ul>
        {keys.map(key => (
          <li>{key}</li>
        ))}
      </ul>
    </div>
  );
}

render(<App />, window.root);
