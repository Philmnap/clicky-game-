import React from 'react';
import './App.css';
import Game from './components/Game.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div class="jumbotron jumbotron-fluid">
          <div class="container">
            <h1>Click the happy baseball players</h1>
            <p class="lead">Memory game! Click all the baseball players and don't hit any more than once.</p>
          </div>
        </div>
      </header>
      <div>
        <Game></Game>
      </div>
    </div>
  );
};





export default App;
