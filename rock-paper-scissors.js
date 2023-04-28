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
  playerSelection = validatePlayerInput(playerSelection);

  // playerSelection = playerSelection.toLowerCase();

  // lose
  if (
    (playerSelection === "rock" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "rock")
  )
    return `You Lose! ${computerSelection} beats ${playerSelection}!`;
  // win
  else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  )
    return `You Win! ${playerSelection} beats ${computerSelection}!`;
  // draw
  else return `It was a draw! You both chose ${playerSelection}`;
}
