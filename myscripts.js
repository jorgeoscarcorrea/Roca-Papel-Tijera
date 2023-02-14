const options = ["rock", "paper", "scissors"];
function getComputerSelection() {
    const choice = options[Math.floor(Math.random * options.length)];
    return choice
}

function playRound (playerSelection, computerSelection) {
    if (
      (playerSelection == "rock" && computerSelection === "scissors") ||
      (playerSelection == "paper" && computerSelection === "rock") ||
      (playerSelection == "scissors" && computerSelection === "paper")
    ) {
      return `You won!`;
    } else if (playerSelection === computerSelection) {   
      return `You tied!`

    } else {
        return`You lost!`;
    }
}

function getPlayerSelection () {
    let validatedInput = false;
    while (validatedInput == false){
        const choice = prompt("Play rock paper sciccors with me pls :)")
        if (choice == null){
            continue;
        }
        const choiceInLower = choice.toLowerCase();
        if(options.includes(choiceInLower)){
        validatedInput = true;
        return choiceInLower;
        }
    }
}

function game() {

    for (let i = 0; i <5; i++) { 
        const playerSelection = getPlayerSelection();
        const computerSelection = getComputerSelection();
        console.log(playRound(playerSelection, computerSelection))
    
    }
}
    game()