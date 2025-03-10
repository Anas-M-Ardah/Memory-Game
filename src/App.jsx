// App.js

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StartScreen from './pages/StartScreen';
import GameScreen from './pages/GameScreen';
import Footer from './components/Footer';
import { THEMES } from './config/themes';
import './styles/GameStyles.css';

function App() {
  const [currentTheme, setCurrentTheme] = useState(THEMES.RETRO);
  const [isMobile, setIsMobile] = useState(false);
  const [currentPlayer, setCurrentPlayer] = useState(0);
  const [players, setPlayers] = useState(1);

  // Detect mobile/tablet devices
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleTheme = () => {
    setCurrentTheme(prev => prev === THEMES.RETRO ? THEMES.JUNGLE : THEMES.RETRO);
  };

  // Function to determine if the footer should rotate
  const getRotationStyle = () => {
    if (isMobile && players > 1) {
      return {
        transform: (currentPlayer % 2 === 0 ? 'rotate(0deg)' : 'rotate(180deg)'),
        transition: 'transform 0.6s ease'
      };
    }
    return {};
  };

  return (
    <Router>
      <div className={`app ${currentTheme === THEMES.RETRO ? 'retro' : 'jungle'}`} style={getRotationStyle()}>
        <Routes>
          <Route 
            path="/" 
            element={<StartScreen currentTheme={currentTheme} />} 
          />
          <Route 
            path="/game" 
            element={
              <GameScreen 
                currentTheme={currentTheme} 
                setCurrentPlayer={setCurrentPlayer} // Pass setter to update current player
                setPlayers={setPlayers} // Pass setter to update player count
              />
            } 
          />
        </Routes>
        <Footer 
          currentTheme={currentTheme}
          onThemeToggle={toggleTheme}
          style={getRotationStyle()} // Apply the style to Footer
        />
      </div>
    </Router>
  );
}

export default App;