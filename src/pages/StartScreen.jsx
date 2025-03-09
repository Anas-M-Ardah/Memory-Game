// pages/StartScreen.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PlayerSelection from '../components/PlayerSelection';
import GridSelection from '../components/GridSelection';
import { THEMES } from '../config/themes';
import '../styles/StartScreen.css';

function StartScreen({ currentTheme }) {
  const navigate = useNavigate();
  const [stage, setStage] = useState('start');
  const [gameConfig, setGameConfig] = useState({
    players: null,
    gridSize: null
  });

  const handlePlayerSelection = (players) => {
    setGameConfig(prev => ({ ...prev, players }));
    setStage('grid');
  };

  const handleGridSelection = (gridSize) => {
    setGameConfig(prev => ({ ...prev, gridSize }));
    navigate('/game', { state: { ...gameConfig, gridSize } });
  };

  return (
    <div className="game-container">
      <div className={`game-card ${currentTheme === THEMES.RETRO ? 'retro' : 'jungle'}`}>
        <h1 className="game-title">Memory Game</h1>
        {stage === 'start' && (
          <button 
            className="start-button"
            onClick={() => setStage('players')}
          >
            Start Game
          </button>
        )}
        {stage === 'players' && (
          <PlayerSelection 
            onComplete={handlePlayerSelection} 
            currentTheme={currentTheme}
          />
        )}
        {stage === 'grid' && (
          <GridSelection 
            onGridSelect={handleGridSelection}
            currentTheme={currentTheme}
          />
        )}
      </div>
    </div>
  );
}

export default StartScreen;