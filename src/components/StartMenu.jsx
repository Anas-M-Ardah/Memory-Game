// components/StartMenu.js
import React from 'react';

function StartMenu({ onStartClick }) {
  return (
    <div className="start-menu">
      <h1 className="game-title">Memory Game</h1>
      <p className="game-subtitle">Test your memory skills!</p>
      <button className="start-button" onClick={onStartClick}>
        Start Game
      </button>
    </div>
  );
}

export default StartMenu;