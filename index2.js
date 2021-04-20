function computerPlay() {
  let options = ["rock", "paper", "scissors"];
  let randomGenerator = Math.floor(Math.random() * 3)
  let computerSelection = options[randomGenerator];
  return computerSelection;
}

 document.getElementById("Rock").onclick = playerSelection;
 document.getElementById("Paper").onclick = playerSelection;
 document.getElementById("Scissors").onclick = playerSelection;

 function playerSelection(){
   let playerChoice = this.id;
   console.log(playerChoice)
 }

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

let i = 0;
const game = () => {
  const computerSelection = computerPlay()
  alert(playRound(playerSelection, computerPlay()));
  i++;
  if (i !== 5) {
    game();
  } else {
    alert("Game Over")
  }
}
game();


