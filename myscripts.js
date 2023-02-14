const options = ["rock", "paper", "scissors"];
function getComputerSelection() {
    const choice = options[Math.floor(Math.random() * options.length)];
    return choice;
}
function playRound (playerSelection, computerSelection) {
    if (
      (playerSelection == "rock" && computerSelection === "scissors") ||
      (playerSelection == "paper" && computerSelection === "rock") ||
      (playerSelection == "scissors" && computerSelection === "paper")
    ) {
      return "Player Wins";
    } else if (playerSelection === computerSelection) {   
      return "tie"

    } else {
        return"Computer Wins";
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
    let scorePlayer = 0;
    let scoreComputer = 0
    for (let i = 0; i <5; i++) { 
        const playerSelection = getPlayerSelection();
        const computerSelection = getComputerSelection();
        console.log(playRound(playerSelection, computerSelection))
        console.log("-------")
        if (playRound(playerSelection, computerSelection) == "Player Wins"){
            scorePlayer++;
            console.log(scorePlayer + "," + scoreComputer)
        }
        else if (playRound(playerSelection, computerSelection) == "Computer Wins"){
            scoreComputer++;
            console.log(scorePlayer + "," + scoreComputer)
        }
    }
    console.log("Gamer Over")
    if (scorePlayer > scoreComputer){
        console.log("Player is the winner");
    }
    else if (scorePlayer < scoreComputer){
        console.log("Computer is the Winner")
    }
    else{
        console.log("Try Again")
    }
    console.log(scorePlayer + "," + scoreComputer)
}
    game()

