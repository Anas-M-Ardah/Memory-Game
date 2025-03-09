// components/MemoryCard.js
import React from 'react';
import { THEMES } from '../config/themes';
import '../styles/MemoryCard.css';

function MemoryCard({ card, onClick, currentTheme }) {
  return (
    <div 
      className={`memory-card ${card.isFlipped ? 'flipped' : ''} 
        ${card.isMatched ? 'matched' : ''} 
        ${currentTheme === THEMES.RETRO ? 'retro' : 'jungle'}`}
      onClick={onClick}
    >
      <div className="card-inner">
        <div className="card-front">
          <div className="card-pattern"></div>
        </div>
        <div className="card-back">
          {card.value}
        </div>
      </div>
    </div>
  );
}

export default MemoryCard;