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

    if (playerSelection === 'rock' && computerSelection === 'paper') {
        computerScore++;
        return resultDisplay.textContent = "Paper beats rock. You lose."
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        computerScore++;
        return resultDisplay.textContent = "Scissors beats paper. You lose."
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        computerScore++;
        return resultDisplay.textContent = "Rock beats scissors. You lose."
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        playerScore++;
        return resultDisplay.textContent = "Rock beats scissors. You win!"
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerScore++;
        return resultDisplay.textContent = "Paper beats rock. You win!"
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        playerScore++;
        return resultDisplay.textContent = "Scissors beats paper. You win!"
    } else {
        return resultDisplay.textContent = "Draw."
    }
}

// The for loop executes the rounds of the game as long as 'i' is less than 5.
// The player is then prompted for an input and the previous function is then called upon in order to play a round.
// Finally, the 'if, else if, else' conditional alerts the player the outcome of the game.

function game() {

    for (let i = 0; i < 5; i++) {
        let playerSelection = document.querySelector(button.id);
        let computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));

        if (playerScore > computerScore && i == 4) {
            return resultDisplay.textContent = " You win the game!"
        } else if (playerScore < computerScore && i == 4) {
            return resultDisplay.textContent = " You lose the game."
        } else if (playerScore == computerScore && i == 4) {
            return resultDisplay.textContent = " It's a draw!"
        } else {
            return resultDisplay.textContent = " Is that all you got?!"
        }
    }
}

console.log(game());

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    round = 0;
}

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

    let resetButton = document.createElement('button');
    resetButton.textContent = 'RESET';
    rpsContainer.appendChild(resetButton);
    resetButton.addEventListener('click', resetGame());

const displayContainer = document.createElement('div');
displayContainer.classList.add('displayContainer');
body.appendChild(displayContainer);

    let roundDisplay = document.createElement('div');
    roundDisplay.classList.add('roundDisplay');
    displayContainer.appendChild(roundDisplay);

    let resultDisplay = document.createElement('div');
    resultDisplay.classList.add('resultDisplay');
    displayContainer.appendChild(resultDisplay);

    let playerScoreDisplay = document.createElement('div');
    playerScoreDisplay.classList.add('playerScoreDisplay');
    displayContainer.appendChild(playerScoreDisplay);

    let computerScoreDisplay = document.createElement('div');
    computerScoreDisplay.classList.add('computerScoreDisplay');
    displayContainer.appendChild(computerScoreDisplay);