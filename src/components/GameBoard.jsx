// components/GameBoard.js
import React, { useState, useEffect } from 'react';
import MemoryCard from './MemoryCard';
import { THEMES, themeConfig } from '../config/themes';
import '../styles/GameBoard.css';

function GameBoard({ gridSize, currentPlayer, onScore, onNextPlayer, currentTheme }) {
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedPairs, setMatchedPairs] = useState([]);
  const [isChecking, setIsChecking] = useState(false);
  const [cardOrder, setCardOrder] = useState([]); // Store the shuffled order

  // Initialize cards only when grid size changes
  useEffect(() => {
    const totalPairs = Math.floor((gridSize * gridSize) / 2);
    const initialCards = generateCards(totalPairs);
    setCards(initialCards);
    // Store the shuffled order of indices
    setCardOrder(initialCards.map(card => card.originalIndex));
    setFlippedCards([]);
    setMatchedPairs([]);
  }, [gridSize]); // Remove currentTheme dependency

  // Update card values when theme changes without reshuffling
  useEffect(() => {
    if (cardOrder.length > 0) {
      const totalPairs = Math.floor((gridSize * gridSize) / 2);
      const themeValues = themeConfig[currentTheme].values;
      const values = themeValues.slice(0, totalPairs);
      const pairs = [...values, ...values];
      
      setCards(prevCards => prevCards.map((card, index) => ({
        ...card,
        value: pairs[cardOrder[index]]
      })));
    }
  }, [currentTheme, cardOrder, gridSize]);

  const generateCards = (totalPairs) => {
    const themeValues = themeConfig[currentTheme].values;
    const values = themeValues.slice(0, totalPairs);
    const pairs = [...values, ...values];
    const shuffledPairs = shuffle(pairs);
    
    return shuffledPairs.map((value, index) => ({
      id: index,
      value,
      originalIndex: index, // Store original position
      isFlipped: false,
      isMatched: false
    }));
  };

  const handleCardClick = (cardId) => {
    if (
      isChecking || 
      flippedCards.length === 2 || 
      flippedCards.includes(cardId) ||
      cards.find(card => card.id === cardId).isMatched
    ) return;

    const newCards = cards.map(card => 
      card.id === cardId ? { ...card, isFlipped: true } : card
    );
    setCards(newCards);
    setFlippedCards([...flippedCards, cardId]);

    if (flippedCards.length === 1) {
      setIsChecking(true);
      const firstCard = cards.find(card => card.id === flippedCards[0]);
      const secondCard = cards.find(card => card.id === cardId);
      
      setTimeout(() => {
        if (firstCard.value === secondCard.value) {
          setCards(cards.map(card => 
            card.id === flippedCards[0] || card.id === cardId
              ? { ...card, isMatched: true, isFlipped: true }
              : card
          ));
          setMatchedPairs([...matchedPairs, firstCard.value]);
          onScore(2);
        } else {
          setCards(cards.map(card => 
            card.id === flippedCards[0] || card.id === cardId
              ? { ...card, isFlipped: false }
              : card
          ));
          onNextPlayer();
        }
        setFlippedCards([]);
        setIsChecking(false);
      }, 1000);
    }
  };

  return (
    <div className="game-board-container">
      <div 
        className={`game-board ${currentTheme === THEMES.RETRO ? 'retro' : 'jungle'}`}
        style={{
          gridTemplateColumns: `repeat(${gridSize}, 1fr)`,
        }}
      >
        {cards.map(card => (
          <MemoryCard
            key={card.id}
            card={card}
            onClick={() => handleCardClick(card.id)}
            currentTheme={currentTheme}
          />
        ))}
      </div>
    </div>
  );
}

function shuffle(array) {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

export default GameBoard;