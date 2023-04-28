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
  )
    return [playerSelection, computerSelection, "lose"];
  //`You Lose! ${computerSelection} beats ${playerSelection}!`;
  // win
  else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  )
    return [playerSelection, computerSelection, "win"];
  // draw
  else return [playerSelection, computerSelection, "draw"];
}

function displayRoundOutcome(outcome) {
  const resultsContainer = document.querySelector(".results");
  const outcomeElement = document.createElement("p");
  if (outcome[2] === "win")
    outcomeElement.textContent = `You win! ${outcome[0]} beats ${outcome[1]}!`;
  if (outcome[2] === "lose")
    outcomeElement.textContent = `You lose! ${outcome[1]} beats ${outcome[0]}!`;
  if (outcome[2] === "draw") outcomeElement.textContent = `It's a draw.`;
  resultsContainer.appendChild(outcomeElement);
}

function game(playerChoice) {
  // let numRoundsToPlay = 5;
  let playerScore = 0;
  let computerScore = 0;

  //
  let gameOutcome = playOneRound(playerChoice, getComputerChoice());
  displayRoundOutcome(gameOutcome);
  //

  // set a custom message based on result
  let resultMessage;

  if (playerScore > computerScore) resultMessage = "You Win!";
  else if (playerScore < computerScore) resultMessage = "You Lose!";
  else resultMessage = "It was a Draw!";

  // print final message
  // results.textContent = `Final score was: ${playerScore} - ${computerScore}. ${resultMessage}`;
}

function displayResults(playerScore, computerScore) {
  if (isFinal);
}

const choices = document.querySelectorAll(".choice");
const results = document.querySelector(".results");

let playerScore = 0;
let computerScore = 0;

// simulates the game after any choice is clicked
let playerChoice;
choices.forEach((c) => {
  c.addEventListener("click", () => {
    game(c.textContent);
  });
});
