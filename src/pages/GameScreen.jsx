// pages/GameScreen.js
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import GameHeader from '../components/GameHeader';
import GameBoard from '../components/GameBoard';
import VictoryModal from '../components/VictoryModal';
import { THEMES } from '../config/themes';
import '../styles/GameScreen.css';

function GameScreen({ currentTheme }) {
  const location = useLocation();
  const navigate = useNavigate();
  const { players, gridSize } = location.state || {};

  const [time, setTime] = useState(0);
  const [showVictoryModal, setShowVictoryModal] = useState(false);
  const [gameState, setGameState] = useState({
    scores: new Array(Number(players)).fill(0),
    currentPlayer: 0,
    matchedPairs: 0,
    totalPairs: Math.floor((gridSize * gridSize) / 2),
    isGameStarted: false
  });

  // Redirect if no game config
  useEffect(() => {
    if (!players || !gridSize) {
      navigate('/');
    } else {
      // Start the game after a short delay
      const timer = setTimeout(() => {
        setGameState(prev => ({ ...prev, isGameStarted: true }));
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [players, gridSize, navigate]);

  // Timer effect
  useEffect(() => {
    let intervalId;
    
    if (gameState.isGameStarted) {
      intervalId = setInterval(() => {
        setTime(prevTime => prevTime + 1);
      }, 1000);
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [gameState.isGameStarted]);

  // Check for game completion
  useEffect(() => {
    if (gameState.matchedPairs === gameState.totalPairs && gameState.matchedPairs > 0) {
      setGameState(prev => ({ ...prev, isGameStarted: false }));
      setShowVictoryModal(true);
    }
  }, [gameState.matchedPairs, gameState.totalPairs]);

  const formatTime = (timeInSeconds) => {
    if (typeof timeInSeconds !== 'number') return '00:00';
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  const handleScore = (points) => {
    setGameState(prev => ({
      ...prev,
      scores: prev.scores.map((score, idx) => 
        idx === prev.currentPlayer ? score + points : score
      ),
      matchedPairs: prev.matchedPairs + 1
    }));
  };

  const handleNextPlayer = () => {
    setGameState(prev => ({
      ...prev,
      currentPlayer: (prev.currentPlayer + 1) % players
    }));
  };

  const handleReset = () => {
    const confirmReset = window.confirm('Are you sure you want to reset the game?');
    if (confirmReset) {
      setGameState(prev => ({ ...prev, isGameStarted: false }));
      setTime(0);
      navigate('/');
    }
  };

  const handleRestart = () => {
    setShowVictoryModal(false);
    setGameState(prev => ({ ...prev, isGameStarted: false }));
    setTime(0);
    navigate('/');
  };

  const getWinners = () => {
    const maxScore = Math.max(...gameState.scores);
    return gameState.scores
      .map((score, index) => ({ player: index, score }))
      .filter(player => player.score === maxScore);
  };

  // Loading state
  if (!players || !gridSize) {
    return null; // or a loading spinner
  }

  return (
    <div className={`game-screen ${currentTheme === THEMES.RETRO ? 'retro' : 'jungle'}`}>
      <GameHeader 
        time={formatTime(time)}
        players={gameState.scores}
        currentPlayer={gameState.currentPlayer}
        onReset={handleReset}
        currentTheme={currentTheme}
      />
      <div className="game-content">
        <GameBoard 
          gridSize={gridSize}
          currentPlayer={gameState.currentPlayer}
          onScore={handleScore}
          onNextPlayer={handleNextPlayer}
          currentTheme={currentTheme}
        />
      </div>
      {showVictoryModal && (
        <VictoryModal
          winners={getWinners()}
          time={formatTime(time)}
          onRestart={handleRestart}
          currentTheme={currentTheme}
        />
      )}
    </div>
  );
}

export default GameScreen;