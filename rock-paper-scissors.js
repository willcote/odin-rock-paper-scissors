function getComputerChoice() {
  let randomValue3 = Math.floor(Math.random() * 3);

  // randomValue3 => 0 - rock, 1 - paper, 2 - scissors
  if (randomValue3 === 0) return "rock";
  else if (randomValue3 === 1) return "paper";
  else return "scissors";
}

function playOneRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();

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

// *** testing playOneRound function ***
// for (let i = 0; i < 10; i++) {
//   let playerPick = "RocK";
//   let cpuPick = getComputerChoice();
//   console.log(playOneRound(playerPick, cpuPick));
//   console.log(`P: ${playerPick}, C: ${cpuPick}`);
// }

function game() {
  let numRoundsToPlay = 5;
  let playerScore = 0;
  let computerScore = 0;

  for (let i = 0; i < numRoundsToPlay; i++) {
    playOneRound();
  }
}
