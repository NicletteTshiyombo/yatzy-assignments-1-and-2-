# yatzy-assignments-1-and-2Yatz game.txt
# Yatzy Game
 
A web-based Yatzy game implementation where players can roll dice, keep specific dice, and calculate scores based on standard Yatzy rules. This project is built with HTML, CSS, and JavaScript, featuring an intuitive UI and score tracking.
 
## Table of Contents
- [Gameplay](#gameplay)
- [Game Rules](#game-rules)
- [Project Structure](#project-structure)
- [Setup and Running the Game](#setup-and-running-the-game)
- [Credits](#credits)
 
---
 
## Gameplay
 
1. **Roll Dice**: Click the "Roll Dice" button to roll five dice.
2. **Hold Dice**: Click on specific dice to keep them between rolls.
3. **Roll Limit**: You may roll up to 3 times per turn.
4. **End Turn**: Click "End Turn" to calculate your scores for each category (e.g., Three of a Kind, Full House, Yatzy).
5. **Score Calculation**: Your scorecard will update based on the final dice configuration.
 
## Game Rules
 
The scoring follows standard Yatzy rules:
- **Three of a Kind**: Sum of all dice if at least three dice show the same value.
- **Four of a Kind**: Sum of all dice if at least four dice show the same value.
- **Full House**: 25 points for three of one number and two of another.
- **Small Straight**: 30 points for a sequence of four (e.g., 1-2-3-4).
- **Large Straight**: 40 points for a sequence of five (e.g., 2-3-4-5-6).
- **Yatzy**: 50 points if all five dice show the same value.
- **Chance**: Sum of all dice, no restrictions.
 
The game ends after each turn’s score is calculated. Players can continue playing by rolling and scoring again.
 
## Project Structure
 
The main files for this project are:
- `index.html`: The HTML file that contains the game structure and UI elements.
- `styles.css`: The CSS file for styling and layout.
- `script.js`: The JavaScript file that manages game state, dice rolls, score calculation, and UI updates.
 
## Setup and Running the Game
 
To run the game:
1. Clone or download the project folder.
2. Open `index.html` in a web browser.
3. Play the game by following the [Gameplay](#gameplay) instructions.
 
### Game Components
- **Dice Container**: Displays current dice values and lets you click to hold dice.
- **Controls**: Buttons for "Roll Dice" and "End Turn."
- **Scorecard**: Displays the score for each category, updating automatically at the end of each turn.
- **Messages**: Provides feedback (e.g., “Roll the dice!” or “End of turn. Scores calculated!”).
 
## Credits
 
Developed by Niclette. This project was created as part of an exercise to practice HTML, CSS, and JavaScript by implementing a simplified version of the classic Yatzy game.
