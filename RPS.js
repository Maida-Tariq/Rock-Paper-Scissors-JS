let computerChoice = ["rock", "paper", "scissors"];

function getComputerChoice() {
    let result = computerChoice[Math.floor(Math.random() * computerChoice.length)];
    console.log(result);
    return result;
}

let playerSelection = prompt("Please enter your choice:").toLowerCase();
let computerSelection = getComputerChoice().toLowerCase(); // Convert computer's choice to lowercase

function singleRound(playerSelection, computerSelection) {
    if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "rock")
    ) {
        console.log("You win!");
        return "You win!";
    } else if (
        (playerSelection === "scissors" && computerSelection === "rock") ||
        (playerSelection === "paper" && computerSelection === "scissors") ||
        (playerSelection === "rock" && computerSelection === "paper")
    ) {
        console.log("You lose!");
        return "You lose!";
    } else {
        console.log("It's a tie!");
        return "It's a tie!";
    }
}

function game() {
    let playerScore = 0,
        computerScore = 0;
    
    for (let i = 0; i < 5; i++) {
        computerSelection = getComputerChoice();
        playerSelection = prompt("Please enter your choice:").toLowerCase();
        let result = singleRound(playerSelection, computerSelection);
        console.log(result);
        
        if (result === "You win!") {
            playerScore++;
        } else if (result === "You lose!") {
            computerScore++;
        }
    }
    
    console.log("Game Over!");
    console.log(`Player Score: ${playerScore}, Computer Score: ${computerScore}`);
    
    if (playerScore > computerScore) {
        console.log("You win the game!");
    } else if (playerScore < computerScore) {
        console.log("Computer wins the game!");
    } else {
        console.log("It's a tie game!");
    }
}

game();
