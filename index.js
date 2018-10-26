'use strict';
let { useEffect } = require('react');

function useKeyPress(handler) {
  useEffect(() => {
    window.addEventListener('keypress', handler);
    return () => {
      window.removeEventListener('keypress', handler);
    };
  }, []);
}

module.exports = useKeyPress;
