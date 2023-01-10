const rpsContainer = document.querySelector('#rpsContainer');

    let rock = document.querySelector('.rockBtn');
    rock.addEventListener('click', game);

    let paper = document.querySelector('.paperBtn');
    paper.addEventListener('click', game);

    let scissors = document.querySelector('.scissorsBtn');
    scissors.addEventListener('click', game);

const displayContainer = document.querySelector('.displayContainer');

    let roundDisplay = document.querySelector('.roundDisplay');

    let resultDisplay = document.querySelector('.resultDisplay');

    let playerScoreDisplay = document.querySelector('.playerScoreDisplay');

    let playerChoiceDisplay = document.querySelector('.playerChoiceDisplay');

    let computerScoreDisplay = document.querySelector('.computerScoreDisplay');

    let computerChoiceDisplay = document.querySelector('.computerChoiceDisplay');

// The square brackets are used to access elements of an array.
// The expression inside the square brackets is evaluated to determine which element to return.
// In this case, computerChoice is a random number between 0 and 2.
// So choices[computerChoice] will return either 'rock', 'paper', or 'scissors', in otherwords 0, 1, or 2.

let computerScore = 0;
let playerScore = 0;
let round = 0;

function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
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

    if (playerSelection === 'Rock' && computerSelection === 'Paper') {
        return resultDisplay.textContent = "Paper beats Rock. You lose."
    } else if (playerSelection === 'Paper' && computerSelection === 'Scissors') {
        return resultDisplay.textContent = "Scissors beats Paper. You lose."
    } else if (playerSelection === 'Scissors' && computerSelection === 'Rock') {
        return resultDisplay.textContent = "Rock beats Scissors. You lose."
    } else if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
        return resultDisplay.textContent = "Rock beats Scissors. You win!"
    } else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
        return resultDisplay.textContent = "Paper beats Rock. You win!"
    } else if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
        return resultDisplay.textContent = "Scissors beats Paper. You win!"
    } else {
        return resultDisplay.textContent = "Draw."
    }
}

function game(e) {
    let playerSelection = (e.target.value);
    let compMove = getComputerChoice();
    let pR = playRound(e.target.value, compMove);
    
    if (pR == "${e.target.value} beats " + compMove + ". You win!") {
        playerScoreDisplay.textContent = playerScore += 1;
        computerChoiceDisplay.textContent = compMove;
        playerChoiceDisplay.textContent = playerSelection;
        roundDisplay.textContent = round += 1;

    } else if (pR = compMove + " beats ${e.target.value}. You lose.") {
        computerScoreDisplay.textContent = computerScore += 1;
        computerChoiceDisplay.textContent = compMove;
        playerChoiceDisplay.textContent = playerSelection;
        roundDisplay.textContent = round += 1;
    } else {
        computerChoiceDisplay.textContent = compMove;
        playerChoiceDisplay.textContent = playerSelection;
    }

    if (playerScore == 5) {
        resultDisplay.textContent = "<br>You win the game and kept SkyNet at bay for one more day, congrats!";
    } else if (computerScore == 5) {
        resultDisplay.textContent = "<br><br>You lost the game and surrendered control to SkyNet... Thanks a lot bro!";
    }
/* disableButtons(); */
}


/* function disableButtons() {
    button.forEach(btn => {
        btn.disabled = true;
    })
} */