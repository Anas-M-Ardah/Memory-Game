// components/VictoryModal.js

import React from 'react';
import { THEMES } from '../config/themes';
import '../styles/VictoryModal.css';

function VictoryModal({ winners, time, onRestart, currentTheme }) {
  // Determine the theme class based on the current theme
  const themeClass = currentTheme === THEMES.RETRO ? 'retro' : 'jungle';

  return (
    <div className="victory-modal-overlay">
      <div className={`victory-modal ${themeClass}`}>
        <h2 className={`victory-title ${themeClass}`}>
          {winners.length > 1 ? "It's a Tie!" : "Winner!"}
        </h2>
        
        <div className="victory-content">
          <div className="winners">
            {winners.map((winner, index) => (
              <div key={index} className="winner">
                <span className={`winner-label ${themeClass}`}>Player {winner.player + 1}</span>
                <span className="winner-score">{winner.score} points</span>
              </div>
            ))}
          </div>
          
          <div className="completion-time">
            <span>Completion Time</span>
            <span className={`time ${themeClass}`}>{time}</span>
          </div>
        </div>

        <button className={`restart-button ${themeClass}`} onClick={onRestart}>
          Play Again
        </button>
      </div>
    </div>
  );
}

export default VictoryModal;