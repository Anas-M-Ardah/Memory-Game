// components/VictoryModal.js
import React from 'react';
import '../styles/VictoryModal.css';

function VictoryModal({ winners, time, onRestart }) {
  return (
    <div className="victory-modal-overlay">
      <div className="victory-modal">
        <h2 className="victory-title">
          {winners.length > 1 ? "It's a Tie!" : "Winner!"}
        </h2>
        
        <div className="victory-content">
          <div className="winners">
            {winners.map((winner, index) => (
              <div key={index} className="winner">
                <span className="winner-label">Player {winner.player + 1}</span>
                <span className="winner-score">{winner.score} points</span>
              </div>
            ))}
          </div>
          
          <div className="completion-time">
            <span>Completion Time</span>
            <span className="time">{time}</span>
          </div>
        </div>

        <button className="restart-button" onClick={onRestart}>
          Play Again
        </button>
      </div>
    </div>
  );
}

export default VictoryModal;