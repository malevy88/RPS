function computerPlay() {
  let options = ["rock", "paper", "scissors"];
  let randomGenerator = Math.floor(Math.random() * 3)
  let computerSelection = options[randomGenerator];
  return computerSelection;
}

//function to determine winner
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

 let playerSelection = document.querySelectorAll('[class=buttons]').addEventListener("click", function paper() {
  alert("paper");
});
