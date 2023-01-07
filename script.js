const rpsContainer = document.querySelector('#rpsContainer');

    let rock = document.querySelector('.rockBtn');
    rock.addEventListener('click', game);

    let paper = document.querySelector('.paperBtn');
    paper.addEventListener('click', game);

    let scissors = document.querySelector('.scissorsBtn');
    scissors.addEventListener('click', game);

    let resetButton = document.querySelector('.resetBtn');
    resetButton.addEventListener('click', resetGame);

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

    // I moved playerSelection and computerSelection over from the 'game' function, still unsure if that was the right move but logically made sense at the time.
    // Still have to figure out where to pass the 'event' object as an argument since 'playRound' already has a pair or args.
    // I might have to create a new function just to handle the act of receiving the players selection
    // before passing it over to the 'playerSelection' arg within 'playRound'

    if (playerSelection === 'rock' && computerSelection === 'paper') {
        computerScoreDisplay.textContent = computerScore++;
        computerChoiceDisplay.textContent = computerSelection;
        playerChoiceDisplay.textContent = playerSelection;
        return resultDisplay.textContent = "Paper beats rock. You lose."
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        computerScoreDisplay.textContent = computerScore++;
        computerChoiceDisplay.textContent = computerSelection;
        playerChoiceDisplay.textContent = playerSelection;
        return resultDisplay.textContent = "Scissors beats paper. You lose."
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        computerScoreDisplay.textContent = computerScore++;
        computerChoiceDisplay.textContent = computerSelection;
        playerChoiceDisplay.textContent = playerSelection;
        return resultDisplay.textContent = "Rock beats scissors. You lose."
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        playerScoreDisplay.textContent = playerScore++;
        computerChoiceDisplay.textContent = computerSelection;
        playerChoiceDisplay.textContent = playerSelection;
        return resultDisplay.textContent = "Rock beats scissors. You win!"
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerScoreDisplay.textContent = playerScore++;
        computerChoiceDisplay.textContent = computerSelection;
        playerChoiceDisplay.textContent = playerSelection;
        return resultDisplay.textContent = "Paper beats rock. You win!"
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        playerScoreDisplay.textContent = playerScore++;
        computerChoiceDisplay.textContent = computerSelection;
        playerChoiceDisplay.textContent = playerSelection;
        return resultDisplay.textContent = "Scissors beats paper. You win!"
    } else {
        computerChoiceDisplay.textContent = computerSelection;
        playerChoiceDisplay.textContent = playerSelection;
        return resultDisplay.textContent = "Draw."
    }
}

// The for loop executes the rounds of the game as long as 'i' is less than 5.
// The player is then prompted for an input and the previous function is then called upon in order to play a round.
// Finally, the 'if, else if, else' conditional alerts the player the outcome of the game.

function game(e) {

    // 'game' feels like dead/useless at this point since 'playRound' is the one being called upon.
    // I think I would need to call upon 'playRound' within 'game' and assign 'game' as the event handler for each button click event.
    // 'game' doesn't currently have any parameters/args so this might be a good solution. I could account for the round changes
    // within 'game' as well.

    let playerSelection = (e.target.value);
    let computerSelection = getComputerChoice();

    for (let i = 0; i < 5; i++) {

        // I also feel like I should move 'playRound' outside of the loop but still within the 'game' function.
        // If it remains inside wouldn't that mean that it would continously get called after just one click/event trigger?
        // Moving it just outside the loop would mean that the click event would need to be triggered each time
        // and keep the 'game function from looping until the condition was met while only using the value of the first click event
        // and never pausing to wait for another click. Still not sure but felt worth it to write down so I can check later.

        playRound(playerSelection, computerSelection);
        roundDisplay.textContent = round++;

        if (playerScore > computerScore && i == 5) {
            return resultDisplay.textContent = " You win the game!";
        } else if (playerScore < computerScore && i == 5) {
            return resultDisplay.textContent = " You lose the game.";
        } else if (playerScore == computerScore && i == 5) {
            return resultDisplay.textContent = " It's a draw!";
        } else {
            return resultDisplay.textContent = " Is that all you got?!";
        }
    }
}

function resetGame(e) {
    playerScore = 0;
    computerScore = 0;
    round = 0;
}

/* function getPlayerSelection(e) {

    // Might need () around 'e.target.value'
    
    let playerSelection = e.target.value; 
    playerChoice = e.target.textContent;
    playRound(playerSelection, getComputerChoice()); 
}*/