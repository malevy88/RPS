function computerPlay() {
  let options = ["rock", "paper", "scissors"];
  let randomGenerator = Math.floor(Math.random() * 3)
  let computerSelection = options[randomGenerator];
  return computerSelection;
}

//let playerSelection = button.id
const playerChoice = document.querySelectorAll("button");
playerChoice.forEach((button) => {
  button.addEventListener("click", () => {
    alert(button.id)
  })
});




//function to determine winner


function playRound(playerSelection, computerSelection) {
  if (playerSelection === "Rock" && computerSelection === "scissors") {
    return "You Win, rock beats scissors";
  } else if (playerSelection === "Paper" && computerSelection === "rock") {
    return "You Win, paper beats rock";
  } else if (playerSelection === "Scissors" && computerSelection === "paper") {
    return "You Win, scissors beats paper";
  } else if (playerSelection === "Rock" && computerSelection === "paper") {
    return "You Lose, paper beats rock";
  } else if (playerSelection === "Paper" && computerSelection === "scissors") {
    return "You Lose, scissors beats paper";
  } else if (playerSelection === "Scissors" && computerSelection === "rock") {
    return "You Lose, rock beats scissors";
  } else {
    return "It is a Draw!";
  }
}





