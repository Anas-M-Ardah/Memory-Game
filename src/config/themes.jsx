// config/themes.js
export const THEMES = {
    RETRO: 'retro',
    JUNGLE: 'jungle'
  };
  
  export const themeConfig = {
    [THEMES.RETRO]: {
      name: 'Retro',
      colors: {
        primary: '#ff00ff',
        background: '#2c2c2c',
        cardBack: '#000',
        cardFront: '#fff',
        text: '#fff',
        border: '#fff'
      },
      font: "'Press Start 2P', cursive",
      values: Array.from({ length: 50 }, (_, i) => i + 1) // numbers 1-50
    },
    [THEMES.JUNGLE]: {
      name: 'Jungle',
      colors: {
        primary: '#4CAF50',
        background: '#1b4d2e',
        cardBack: '#2d6a4f',
        cardFront: '#d8f3dc',
        text: '#d8f3dc',
        border: '#95d5b2'
      },
      font: "'Comic Sans MS', cursive",
      values: [
        '🐘', '🦁', '🐯', '🐒', '🦒', '🦏', '🦍', '🦘',
        '🦛', '🐪', '🐊', '🦜', '🦩', '🦚', '🐆', '🦓',
        '🦬', '🦙', '🦣', '🐢', '🦅', '🦋', '🦎', '🦔',
        '🦦', '🦥', '🦨', '🦡', '🦃', '🦆', '🦉', '🦕'
      ]
    }
  };