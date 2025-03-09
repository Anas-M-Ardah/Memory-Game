// components/Footer.js
import React from 'react';
import { THEMES } from '../config/themes';
import '../styles/Footer.css';

function Footer({ currentTheme, onThemeToggle }) {
  return (
    <footer className={`game-footer ${currentTheme === THEMES.RETRO ? 'retro' : 'jungle'}`}>
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