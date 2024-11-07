
# Yatzy Game

An interactive Yatzy game built with HTML, CSS, JavaScript, Node.js, and Express. This game allows players to roll dice, hold specific dice, and calculate scores based on Yatzy rules, with server-side logic managing the game state.

## Features

- **Roll Dice**: Roll five dice and generate random values.
- **Hold Dice**: Click on specific dice to hold them, preventing them from re-rolling.
- **Calculate Score**: Sum of all dice values as a placeholder scoring method.
- **Client-Server Communication**: Game state management and calculations are handled by a Node.js and Express server.

Prerequisites

- [Node.js](https://nodejs.org/) (v14+ recommended)
- [Express.js](https://expressjs.com/) (installed via npm)

Setup Instructions

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/yourusername/yatzy-game.git
   cd yatzy-game

2. Install Dependencies: Install server dependencies (Express):

npm install express cors


3. Run the Server: Start the Node.js server:

node server.js

The server should now be running on http://localhost:3000.


4. Open the Client: Open index.html in a web browser to play the game.



Project Structure

yatzy-game/
├── index.html           # HTML file for the Yatzy game interface
├── styles.css           # CSS file for styling the game UI
├── script.js            # Client-side JavaScript for UI interaction
├── server.js            # Node.js and Express server for game state
└── README.md            # Project documentation

API Endpoints

POST /roll

Rolls all dice that are not held and returns the updated game state.

Response:

{
  "diceValues": [3, 6, 2, 1, 4],
  "heldDice": [false, true, false, false, true],
  "score": 0
}


POST /hold

Toggles the "held" status of a die specified by its index.

Request:

{
  "index": 2
}

Response:

{
  "diceValues": [3, 6, 2, 1, 4],
  "heldDice": [false, true, true, false, true],
  "score": 0
}


POST /score

Calculates the current score based on the sum of the dice values.

Response:

{
  "score": 16
}


Game Instructions

1. Click the Roll Dice button to roll all dice. Dice values will display between 1 and 6.


2. Click on individual dice to "hold" them, preventing them from rolling again.


3. Click Roll Dice again to roll only the dice that are not held.


4. Once satisfied, click End Turn to calculate and display the score based on the current dice values.



Code Overview

Client (JavaScript - script.js)

updateGameState(): Fetches the latest dice values from the server.

toggleHold(): Sends a request to toggle the hold state of a specific die.

calculateScore(): Calls the server to compute the score.

updateDiceDisplay(): Updates dice values and displays the held state in the UI.


Server (Node.js - server.js)

POST /roll: Rolls dice and updates the game state.

POST /hold: Toggles the hold state for a specific die.

POST /score: Calculates and returns the score.


Technologies Used

Frontend: HTML, CSS, JavaScript

Backend: Node.js, Express

API Communication: Fetch API (AJAX)


Future Enhancements

Implement full Yatzy scoring rules (e.g., three-of-a-kind, full house).

Add player score history and reset functionality.

Enhance UI/UX for better gameplay experience.


License

This project is open-source and available under the MIT License.

This `README.md` file provides a comprehensive guide to understanding, setting up, and running the Yatzy game, along with detailed explanations of API endpoints and the project structure.

