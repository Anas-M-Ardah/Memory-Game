# Memory Game - React Card Matching Game

A classic memory card game built with React, featuring two distinct themes: Retro and Jungle. Test your memory by matching pairs of cards while enjoying different visual styles.

![Game Screenshot](https://i.ibb.co/KcqkHx28/screen3.png) 

## Features

- Two unique themes:
  - Retro: Classic arcade-style with numbers
  - Jungle: Kid-friendly theme with animal emojis
- Multiple player support (1-4 players)
- Customizable grid sizes (3x3 to 7x7)
- Score tracking
- Game timer
- Responsive design for all devices
- Theme switching during gameplay
- Smooth animations and transitions

## Technologies Used

- React 18
- React Router v6
- Vite
- CSS3 with modern features
- Mobile-first responsive design

## Installation

1. Clone the repository:
```bash
git https://github.com/Anas-M-Ardah/memory-game.git
```

2. Navigate to the project directory:
```bash
cd memory-game
```

3. Install dependencies:
```bash
npm install
```

4. Start the development server:
```bash
npm run dev
```

5. Open your browser and visit:
```
http://localhost:5173
```

## Game Rules

1. Select the number of players (1-4)
2. Choose your preferred grid size
3. Click cards to reveal them
4. Match pairs of identical cards
5. Each match earns 2 points
6. Mismatched pairs will flip back and turn passes to the next player
7. Game ends when all pairs are matched

## Themes

### Retro Theme
- Classic arcade style
- Number-based cards
- Neon color scheme
- Pixel-perfect design
- 'Press Start 2P' font

### Jungle Theme
- Kid-friendly design
- Animal emoji cards
- Nature-inspired colors
- Rounded corners
- Comic Sans font

## Project Structure

```
memory-game/
├── src/
│   ├── components/
│   │   ├── GameBoard.jsx
│   │   ├── GameHeader.jsx
│   │   ├── MemoryCard.jsx
│   │   ├── PlayerSelection.jsx
│   │   └── GridSelection.jsx
│   ├── pages/
│   │   ├── StartScreen.jsx
│   │   └── GameScreen.jsx
│   ├── styles/
│   │   ├── GameStyles.css
│   │   ├── GameBoard.css
│   │   └── MemoryCard.css
│   ├── config/
│   │   └── themes.js
│   └── App.jsx
├── public/
└── package.json
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

- Fonts: Google Fonts (Press Start 2P)
- Icons: Emoji support
- Inspiration: Classic memory card games

## Future Improvements

- Add sound effects
- Implement high scores
- Add more themes
- Create difficulty levels
- Add multiplayer online support
- Implement user accounts

## Contact

Email: [anas.m.ardah@gmail.com](mailto:anas.m.ardah@gmail.com)

