import React from 'react';
import Board from './Board.js';
import './styles.css';

function App() {
  return (
    <div className="game-container">
      <h1>Jogo da velha</h1>
      
      <Board />
    </div>
  );
}

export default App;
