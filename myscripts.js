function getComputerSelection() {
    let random = Math.random();
    if (random < 0.33) {
      return "rock";
    } else if (random < 0.66) {
      return "paper";
    } else {
      return "scissors";
    }
}

function playRound (playerSelection, computerSelection) {
    if (
      (playerSelection == "rock" && computerSelection === "scissors") ||
      (playerSelection == "paper" && computerSelection === "rock") ||
      (playerSelection == "scissors" && computerSelection === "paper")
    ) {
      playerPoints++;
      return `You won!`;
    } else if (playerSelection === computerSelection) {   
      return `You tied!`

    } else {
        computerPoints++;
        return`You lost!`;
    }
}
function game() {

    for (let i = 0; i <5; i++) { 
        const playerSelection = prompt();
        const computerSelection = getComputerSelection();
        console.log(playRound(playerSelection, computerSelection))
        console.log(playerPoints, computerPoints)
    
    }
}
    game()