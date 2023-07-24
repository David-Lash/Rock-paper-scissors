function getComputerChoice(){
  return "rock" || "paper" || "scissors";
}

console.log(getComputerChoice);

function playRound(playerSelection, computerSelection){
playerSelection = "rock";
computerSelection = getComputerChoice();
return "You Lose! Paper beats Rock";
}

console.log(playRound(playerSelection, computerSelection));

function game(){
  console.log(playRound(playerSelection, computerSelection));
  console.log(playRound(playerSelection, computerSelection));
  console.log(playRound(playerSelection, computerSelection));
  console.log(playRound(playerSelection, computerSelection));
  console.log(playRound(playerSelection, computerSelection));    
}

const obj= window.prompt("Enter rock, paper or scissors", "");
