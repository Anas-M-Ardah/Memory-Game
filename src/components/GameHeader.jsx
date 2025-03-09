// components/GameHeader.js
import React from 'react';
import { THEMES } from '../config/themes';

function GameHeader({ time, players, currentPlayer, onReset, currentTheme }) {
  return (
    <div className="game-header">
      <div className="header-content">
        <div className="timer">
          <span className="timer-label">TIME</span>
          <span className="timer-value">{time}</span>
        </div>
        
        <div className="players-container">
          {players.map((score, index) => (
            <div 
              key={index} 
              className={`player-score ${currentPlayer === index ? 'current-player' : ''}`}
            >
              <span className="player-label">P{index + 1}: </span>
              <span className="score-value">{score}</span>
            </div>
          ))}
        </div>

        <button 
          className="reset-button"
          onClick={onReset}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default GameHeader;