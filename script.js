// Game state
const diceValues = [1, 1, 1, 1, 1];
const heldDice = [false, false, false, false, false];
const scoreCategories = {
  "Three of a Kind": 0,
  "Four of a Kind": 0,
  "Full House": 0,
  "Small Straight": 0,
  "Large Straight": 0,
  "Yatzy": 0,
  "Chance": 0
};
let rollCount = 0;

// DOM elements
const diceContainer = document.getElementById("dice-container");
const rollBtn = document.getElementById("roll-btn");
const endTurnBtn = document.getElementById("end-turn-btn");
const scorecard = document.getElementById("scorecard");
const message = document.getElementById("message");

// Initialize game by displaying dice
function initializeGame() {
  diceContainer.innerHTML = "";
  diceValues.forEach((value, index) => {
    const die = document.createElement("div");
    die.classList.add("dice");
    die.textContent = value;
    die.onclick = () => toggleHold(index);
    diceContainer.appendChild(die);
  });
  displayScorecard();
  message.textContent = "Roll the dice!";
}

// Roll dice function
function rollDice() {
  if (rollCount >= 3) {
    message.textContent = "You've reached the roll limit. End your turn.";
    return;
  }
  diceValues.forEach((value, index) => {
    if (!heldDice[index]) {
      diceValues[index] = Math.floor(Math.random() * 6) + 1;
    }
  });
  updateDiceDisplay();
  rollCount++;
}

// Toggle hold status for dice
function toggleHold(index) {
  heldDice[index] = !heldDice[index];
  updateDiceDisplay();
}

// Update dice display
function updateDiceDisplay() {
  diceContainer.childNodes.forEach((die, index) => {
    die.textContent = diceValues[index];
    die.style.backgroundColor = heldDice[index] ? "lightgray" : "white";
  });
}

// Scoring functions
function calculateScore() {
  const counts = {};
  diceValues.forEach(val => counts[val] = (counts[val] || 0) + 1);

  scoreCategories["Three of a Kind"] = Object.values(counts).some(count => count >= 3) ? diceValues.reduce((a, b) => a + b) : 0;
  scoreCategories["Four of a Kind"] = Object.values(counts).some(count => count >= 4) ? diceValues.reduce((a, b) => a + b) : 0;
  scoreCategories["Full House"] = (Object.values(counts).includes(3) && Object.values(counts).includes(2)) ? 25 : 0;
  scoreCategories["Small Straight"] = [1, 2, 3, 4].every(val => diceValues.includes(val)) || [2, 3, 4, 5].every(val => diceValues.includes(val)) ? 30 : 0;
  scoreCategories["Large Straight"] = [1, 2, 3, 4, 5].every(val => diceValues.includes(val)) || [2, 3, 4, 5, 6].every(val => diceValues.includes(val)) ? 40 : 0;
  scoreCategories["Yatzy"] = Object.values(counts).some(count => count === 5) ? 50 : 0;
  scoreCategories["Chance"] = diceValues.reduce((a, b) => a + b);

  displayScorecard();
}

// Display scorecard
function displayScorecard() {
  scorecard.innerHTML = "";
  Object.keys(scoreCategories).forEach(category => {
    const scoreItem = document.createElement("div");
    scoreItem.classList.add("scorecard-item");
    scoreItem.innerHTML = `<span>${category}</span><span>${scoreCategories[category]}</span>`;
    scorecard.appendChild(scoreItem);
  });
}

// End turn logic
function endTurn() {
  calculateScore();
  message.textContent = "End of turn. Scores calculated!";
  resetDice();
  rollCount = 0;
}

// Reset held dice for the next turn
function resetDice() {
  heldDice.fill(false);
  updateDiceDisplay();
}

// Event listeners
rollBtn.addEventListener("click", rollDice);
endTurnBtn.addEventListener("click", endTurn);

// Initialize the game on load
initializeGame();