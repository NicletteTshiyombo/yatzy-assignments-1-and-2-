const rollButton = document.getElementById("roll-button");
const endTurnButton = document.getElementById("end-turn-button");
const scoreDisplay = document.getElementById("score");

// Fetch and update dice display from server
async function updateGameState() {
    const response = await fetch("http://localhost:3000/roll", { method: "POST" });
    const gameState = await response.json();
    updateDiceDisplay(gameState);
}

// Roll dice
rollButton.addEventListener("click", updateGameState);

// Toggle hold state for a die
async function toggleHold(event) {
    const index = event.target.getAttribute("data-index");
    const response = await fetch("http://localhost:3000/hold", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ index: parseInt(index) })
    });
    const gameState = await response.json();
    updateDiceDisplay(gameState);
}

// Calculate and display score
async function calculateScore() {
    const response = await fetch("http://localhost:3000/score", { method: "POST" });
    const result = await response.json();
    scoreDisplay.textContent = result.score;
}

// Update dice display in the UI
function updateDiceDisplay(gameState) {
    const diceElements = document.querySelectorAll(".die");
    diceElements.forEach((die, index) => {
        die.textContent = gameState.diceValues[index];
        die.classList.toggle("held", gameState.heldDice[index]);
    });
}

// Event listeners
endTurnButton.addEventListener("click", calculateScore);
document.getElementById("dice-container").addEventListener("click", (event) => {
    if (event.target.classList.contains("die")) {
        toggleHold(event);
    }
});

// Initial roll display
updateGameState();