function getComputerChoice() {
    const choices = ('rock', 'paper', 'scissors');
    const computerChoice = Math.floor(Math.random() * choices.length);
    return computerChoice;
}

console.log(getComputerChoice());