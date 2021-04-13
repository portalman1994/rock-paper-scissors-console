let computerSelection = "";
let playerSelection= "";
let computerScore = 0;
let playerScore = 0;
function computerPlay() {
    selection = Math.floor(Math.random() * 3);
    switch(selection) {
        case 0:
            computerSelection = "rock";
            return computerSelection;        
        break;
        case 1:
            computerSelection = "paper";
            return computerSelection;
        break;
        case 2:
            computerSelection = "scissors";        
            return computerSelection;
}
}
function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() == computerSelection) {
        message = "You tie!";
        return message;
    }
    if (playerSelection.toLowerCase() != computerSelection) {
        switch (playerSelection.toLowerCase()) {
            case "rock":
                switch (computerSelection) {
                    case "paper":
                        message = "You Lose! Paper beats Rock!";
                        computerScore += 1;                        
                        return message, computerScore;
                    break;
                    case "scissors":
                        message = "You Win! Rock beats Scissors!"; 
                        playerScore +=1;                        
                        return message, playerScore;
                    break;
                }
            break;
            case "paper":
                switch (computerSelection) {
                    case "rock":
                        message = "You Win! Paper beats Rock!";
                        playerScore +=1;
                        return message, playerScore;
                    break;
                    case "scissors":
                        message = "You Lose! Scissors beats Paper!";
                        computerScore += 1;
                        return message, computerScore;
                    break;
                }
            break;
            case "scissors":    
                switch (computerSelection) {
                    case "rock":
                        message = "You Lose! Rock beats Scissors!"; //rock wins
                        computerScore += 1;
                        return message, computerScore;
                    break;
                    case "paper":
                        message = "You Win! Scissors beats Paper!";
                        playerScore +=1;
                        return message, playerScore;
                    break;
                }
            break;
            default:
                message = "Please enter a valid move!";
                return message;
        }   
    }    
}
function game() {
    var i;
    for (i = 0; i < 4; i++) {
        playerSelection = prompt("What's your move?");;
        computerSelection = computerPlay();
        playRound(playerSelection, computerSelection);
        console.log(message);
    }
    if (playerScore < computerScore) {
        scoreMessage = "Computer Wins! Player's Score:" + playerScore + " Computer's Score:" + computerScore;           return scoreMessage;
    }
    else if (playerScore > computerScore) {
        scoreMessage = "Player Wins! Player's Score:" + playerScore + " Computer's Score:" + computerScore;     
        return scoreMessage;
    }
    else if (playerScore == computerScore) {
        scoreMessage = "You Tie! Player's Score:" + playerScore + " Computer's Score:" + computerScore;     
        return scoreMessage;
    }
}
scoreMessage = game();
console.log(scoreMessage);

