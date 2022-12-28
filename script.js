// The square brackets are used to access elements of an array.
// The expression inside the square brackets is evaluated to determine which element to return.
// In this case, computerChoice is a random number between 0 and 2.
// So choices[computerChoice] will return either 'rock', 'paper', or 'scissors'.

let computerScore = 0;
let playerScore = 0;

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = Math.floor(Math.random() * choices.length);
    return choices[computerChoice];
}

// The playRound function is declared with the 'playerSelection' and 'computerSelection' parameters.
// Next the user input for the playerSelection parameter will be set to lower case so that the user 
// doesn't have to worry about case sensitivity.
// Then we go through the different possible scenarios and their outputs.
// Finally the variable 'playerSelection' is assigned its value by the user and 'computerSelection'
// calls the 'getComputerChoice' function for its randomized output.

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection === 'rock' && computerSelection === 'paper') {
        computerScore++;
        return ("Paper beats rock. You lose.");
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        computerScore++;
        return ("Scissors beats paper. You lose.");
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        computerScore++;
        return ("Rock beats scissors. You lose.");
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        playerScore++;
        return ("Rock beats scissors. You win!");
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerScore++;
        return ("Paper beats rock. You win!");
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        playerScore++;
        return ("Scissors beats paper. You win!");
    } else {
        return ("Draw.");
    }
}

// The for loop executes the rounds of the game as long as 'i' is less than 5.
// The player is then prompted for an input and the previous function is then called upon in order to play a round.
// Finally, the 'if, else if, else' conditional alerts the player the outcome of the game.

function game() {

    for (let i = 0; i < 1; i++) {
        let playerSelection = button.id;
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));

        if (playerScore > computerScore && i == 4) {
            console.log("You win the game!")
        } else if (playerScore < computerScore) {
            console.log("You lose the game.");
        } else if (playerScore == computerScore) {
            console.log("It's a draw!");
        } else {
            console.log("Is that all you got?!");
        }
    }
}

console.log(game());

// DOM STUFF

const rpsContainer = document.querySelector('#rpsContainer');

let rock = document.querySelector('#rock');
rock.addEventListener('click', function() {
    playRound('rock', computerSelection);
});

let paper = document.querySelector('#paper');
paper.addEventListener('click', function() {
    playRound('paper', computerSelection);
});

let scissors = document.querySelector('#scissors');
scissors.addEventListener('click', function() {
    playRound('scissors', computerSelection);
});