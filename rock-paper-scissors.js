function getComputerChoice() {
  let randomValue3 = Math.floor(Math.random() * 3);

  // randomValue3 => 0 - rock, 1 - paper, 2 - scissors
  if (randomValue3 === 0) return "rock";
  else if (randomValue3 === 1) return "paper";
  else return "scissors";
}

function validatePlayerInput(playerInput) {
  let isValid = false;
  while (!isValid) {
    if (typeof playerInput === "string") {
      playerInput = playerInput.toLowerCase();
      if (
        playerInput === "rock" ||
        playerInput === "paper" ||
        playerInput === "scissors"
      )
        isValid = true;
      else
        playerInput = prompt(
          "Invalid response. (must type 'rock', 'paper', or 'scissors') "
        );
    }
  }
  return playerInput;
}

function playOneRound(playerSelection, computerSelection) {
  // playerSelection = validatePlayerInput(playerSelection);

  // lose
  if (
    (playerSelection === "rock" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "rock")
  ) {
    computerScore++;
    return [playerSelection, computerSelection, "lose"];
  }

  // win
  else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    playerScore++;
    return [playerSelection, computerSelection, "win"];
  }

  // draw
  else return [playerSelection, computerSelection, "draw"];
}

function displayRoundOutcome(outcome) {
  const outcomeElement = document.createElement("p");
  if (outcome[2] === "win")
    outcomeElement.textContent = `win : \
    ${playerScore} - ${computerScore}\
    (${outcome[0]} beats ${outcome[1]})`;
  if (outcome[2] === "lose")
    outcomeElement.textContent = `lose : \
    ${playerScore} - ${computerScore}\
    (${outcome[1]} beats ${outcome[0]})`;
  if (outcome[2] === "draw")
    outcomeElement.textContent = `draw : \
    ${playerScore} - ${computerScore}`;
  results.appendChild(outcomeElement);
}

function game(playerChoice) {
  let gameOutcome = playOneRound(playerChoice, getComputerChoice());
  displayRoundOutcome(gameOutcome);

  // can't just track games played because of draws
  totalScore = playerScore + computerScore;

  if (totalScore === 5) displayResults(playerScore, computerScore);
}

function displayResults(playerScore, computerScore) {
  const result = document.createElement("p");

  result.textContent =
    playerScore > computerScore
      ? `You win!!!`
      : computerScore > playerScore
      ? `You lose!!!`
      : `It's a draw!!!`;
  results.appendChild(result);
}

function removeResults() {}

const choices = document.querySelectorAll(".choice");
const results = document.querySelector(".results");

let totalScore = 0;
let playerScore = 0;
let computerScore = 0;

// simulates the game after any choice is clicked
let playerChoice;
choices.forEach((c) => {
  c.addEventListener("click", () => {
    game(c.textContent);
  });
});
