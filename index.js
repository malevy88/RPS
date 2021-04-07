function computerPlay() {
  let options = ["rock", "paper", "scissors"];
  let randomGenerator = Math.floor(Math.random() * 3)
  let computerSelection = options[randomGenerator];
  return computerSelection;
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === "rock" && computerSelection === "scissors") {
    return "You Win, rock beats scissors";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    return "You Win, paper beats rock";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    return "You Win, scissors beats paper";
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    return "You Lose, paper beats rock";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    return "You Lose, scissors beats paper";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    return "You Lose, rock beats scissors";
  } else {
    return "It is a Draw!";
  }
}

let userScore = parseInt(0);
let computerScore = parseInt(0);
let i = 0;
const game = () => {
  let playerSelection = prompt("Rock, Paper, or Scissors?").toLowerCase();
  const computerSelection = computerPlay()
  console.log(playRound(playerSelection, computerPlay()));
  i++;
  if (i !== 5) {
    game();
  } else {
    alert("Game Over")
  }
}

game();