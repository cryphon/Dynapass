import React from 'react';
import ReactDOM from 'react-dom';

function Panel() {
  return (
    <div>
      <h1>Panel Content</h1>
      <p>This is the content of the panel.</p>
    </div>
  );
}

ReactDOM.render(<Panel />, document.getElementById('panel-root'));