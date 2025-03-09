// components/PlayerSelection.js
import React from 'react';
import { THEMES } from '../config/themes';
import '../styles/PlayerSelection.css';

function PlayerSelection({ onComplete, currentTheme }) {
  const playerOptions = [1, 2, 3, 4];

  return (
    <div className={`player-selection ${currentTheme === THEMES.RETRO ? 'retro' : 'jungle'}`}>
      <h2>Select Number of Players</h2>
      <div className="options-grid">
        {playerOptions.map(number => (
          <button
            key={number}
            className="option-button"
            onClick={() => onComplete(number)}
          >
            {number} {number === 1 ? 'Player' : 'Players'}
          </button>
        ))}
      </div>
    </div>
  );
}

export default PlayerSelection;