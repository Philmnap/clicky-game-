import React from 'react';
import logo from './logo.svg';
import './App.css';
import Game from './components/Game.js';
const logo2 = require('./assets/images/happy_player.jpg')
const logo3 = require('./assets/images/frustrated.jpg')

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          Game incoming
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

      </header>
      <div>
        <Game></Game>
      </div>
    </div>
  );
}

export default App;
