import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

function Popup() {
  const [selectedText, setSelectedText] = useState('');

  useEffect(() => {
    console.log('Popup component mounted');
    const text = window.getSelection().toString().trim();
    console.log('Selected text:', text);
    setSelectedText(text);
  }, []);

  return (
    <div>
      <h1>Selected Text</h1>
      <p>{selectedText}</p>
    </div>
  );
}

ReactDOM.render(<Popup />, document.getElementById('popup-root'));
