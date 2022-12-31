var playerSelection;
var computerSelection;
var playerScore = 0;
var computerScore = 0;
var round = 0;
var playerScoreDisplay = document.createElement('div');
var computerScoreDisplay = document.createElement('div');
var roundDisplay = document.createElement('div');
var resultDisplay = document.createElement('div');
var rockButton = document.createElement('button');
var paperButton = document.createElement('button');
var scissorsButton = document.createElement('button');
var resetButton = document.createElement('button');
rockButton.innerHTML = 'Rock';
paperButton.innerHTML = 'Paper';
scissorsButton.innerHTML = 'Scissors';
resetButton.innerHTML = 'Reset';
document.body.appendChild(rockButton);
document.body.appendChild(paperButton);
document.body.appendChild(scissorsButton);
document.body.appendChild(resetButton);
document.body.appendChild(playerScoreDisplay);
document.body.appendChild(computerScoreDisplay);
document.body.appendChild(roundDisplay);
document.body.appendChild(resultDisplay);
rockButton.addEventListener('click', function() {
  playRound('rock');
});
paperButton.addEventListener('click', function() {
  playRound('paper');
});
scissorsButton.addEventListener('click', function() {
  playRound('scissors');
});
resetButton.addEventListener('click', function() {
  resetGame();
});
function computerPlay() {
  var randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === 0) {
    return 'rock';
  } else if (randomNumber === 1) {
    return 'paper';
  } else {
    return 'scissors';
  }
}
function playRound(playerSelection) {
  computerSelection = computerPlay();
  if (playerSelection === 'rock') {
    if (computerSelection === 'rock') {
      resultDisplay.innerHTML = 'Tie! You both chose rock.';
    } else if (computerSelection === 'paper') {
      resultDisplay.innerHTML = 'You lose! Paper beats rock.';
      computerScore++;
    } else {
      resultDisplay.innerHTML = 'You win! Rock beats scissors.';
      playerScore++;
    }
  } else if (playerSelection === 'paper') {
    if (computerSelection === 'rock') {
      resultDisplay.innerHTML = 'You win! Paper beats rock.';
      playerScore++;
    } else if (computerSelection === 'paper') {
      resultDisplay.innerHTML = 'Tie! You both chose paper.';
    } else {
      resultDisplay.innerHTML = 'You lose! Scissors beats paper.';
      computerScore++;
    }
  } else {
    if (computerSelection === 'rock') {
      resultDisplay.innerHTML = 'You lose! Rock beats scissors.';
      computerScore++;
    } else if (computerSelection === 'paper') {
      resultDisplay.innerHTML = 'You win! Scissors beats paper.';
      playerScore++;
    } else {
      resultDisplay.innerHTML = 'Tie! You both chose scissors.';
    }
  }
  round++;
  playerScoreDisplay.innerHTML = 'Player Score: ' + playerScore;
  computerScoreDisplay.innerHTML = 'Computer Score: ' + computerScore;
  roundDisplay.innerHTML = 'Round: ' + round;
  if (playerScore === 5) {
    resultDisplay.innerHTML = 'You win the game!';
    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorsButton.disabled = true;
  } else if (computerScore === 5) {
    resultDisplay.innerHTML = 'You lose the game!';
    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorsButton.disabled = true;
  }
}
function resetGame() {
  playerScore = 0;
  computerScore = 0;
  round = 0;
  playerScoreDisplay.innerHTML = 'Player Score: ' + playerScore;
  computerScoreDisplay.innerHTML = 'Computer Score: '