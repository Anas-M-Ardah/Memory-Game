// components/GridSelection.js
import React from 'react';
import { THEMES } from '../config/themes';
import '../styles/GridSelection.css';

function GridSelection({ onGridSelect, currentTheme }) {
  const gridOptions = [3, 4, 5, 6, 7];

  return (
    <div className={`grid-selection ${currentTheme === THEMES.RETRO ? 'retro' : 'jungle'}`}>
      <h2>Select Grid Size</h2>
      <div className="grid-options">
        {gridOptions.map(size => (
          <button
            key={size}
            className="grid-option-button"
            onClick={() => onGridSelect(size)}
          >
            {size} x {size}
          </button>
        ))}
      </div>
    </div>
  );
}

export default GridSelection;