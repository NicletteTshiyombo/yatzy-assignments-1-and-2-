// server.js
const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());

let gameState = {
    diceValues: [1, 1, 1, 1, 1],
    heldDice: [false, false, false, false, false],
    score: 0,
};

// Roll dice endpoint
app.post("/roll", (req, res) => {
    for (let i = 0; i < gameState.diceValues.length; i++) {
        if (!gameState.heldDice[i]) {
            gameState.diceValues[i] = Math.floor(Math.random() * 6) + 1;
        }
    }
    res.json(gameState);
});

// Toggle hold state for a die
app.post("/hold", (req, res) => {
    const { index } = req.body;
    gameState.heldDice[index] = !gameState.heldDice[index];
    res.json(gameState);
});

// Calculate score endpoint
app.post("/score", (req, res) => {
    gameState.score = gameState.diceValues.reduce((acc, value) => acc + value, 0);
    res.json({ score: gameState.score });
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));