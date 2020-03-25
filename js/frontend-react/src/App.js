import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [stuff, setStuff] = useState('');

  const getStuff = (new_stuff) => {
    setStuff(new_stuff);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={() => getStuff('got stuff')}>Get stuff</button>
        <p>
          { stuff }
        </p>
      </header>
    </div>
  );
}

export default App;
