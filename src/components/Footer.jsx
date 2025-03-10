// components/Footer.js

import React from 'react';
import { THEMES } from '../config/themes';
import '../styles/Footer.css';

function Footer({ currentTheme, onThemeToggle, style }) {
  // Determine if the footer is rotated based on the style transform
  const isRotated = style.transform && style.transform.includes('180deg');

  return (
    <footer className={`game-footer ${currentTheme === THEMES.RETRO ? 'retro' : 'jungle'} ${isRotated ? 'rotated' : ''}`} style={style}>
      <div className="theme-selector">
        <span className="theme-label">Theme:</span>
        <button 
          className="theme-toggle-btn"
          onClick={onThemeToggle}
        >
          <span className="theme-icon">
            {currentTheme === THEMES.RETRO ? '🎮' : '🌴'}
          </span>
          <span className="theme-name">
            {currentTheme === THEMES.RETRO ? 'Retro' : 'Jungle'}
          </span>
        </button>
      </div>
    </footer>
  );
}

export default Footer;