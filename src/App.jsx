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

  const toggleTheme = () => {
    setCurrentTheme(prev => prev === THEMES.RETRO ? THEMES.JUNGLE : THEMES.RETRO);
  };

  return (
    <Router>
      <div className={`app ${currentTheme === THEMES.RETRO ? 'retro' : 'jungle'}`}>
        <Routes>
          <Route 
            path="/" 
            element={<StartScreen currentTheme={currentTheme} />} 
          />
          <Route 
            path="/game" 
            element={<GameScreen currentTheme={currentTheme} />} 
          />
        </Routes>
        <Footer 
          currentTheme={currentTheme}
          onThemeToggle={toggleTheme}
        />
      </div>
    </Router>
  );
}

export default App;