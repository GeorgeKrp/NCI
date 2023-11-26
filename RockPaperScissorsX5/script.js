let rounds = 0;
let userGuesses = [];

function playGame(userChoice) {
  const choices = ['rock', 'paper', 'scissors'];
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];

  let result;

  if (userChoice === computerChoice) {
    result = "It's a tie!";
  } else if (
    (userChoice === 'rock' && computerChoice === 'scissors') ||
    (userChoice === 'paper' && computerChoice === 'rock') ||
    (userChoice === 'scissors' && computerChoice === 'paper')
  ) {
    result = "You win!";
  } else {
    result = "You lose!";
  }

  document.getElementById('result').textContent = `Your choice: ${userChoice} | Computer's choice: ${computerChoice} | Result: ${result}`;
  rounds++;
  userGuesses.push(userChoice);

  if (rounds < 5) {
    document.getElementById('round').textContent = `Round: ${rounds}`;
  } else {
    document.getElementById('round').textContent = `Round: ${rounds}`;
    setTimeout(endGame, 100);
  }
}

function endGame() {
  alert(`Game over! You've played 5 rounds.\nYour guesses: ${userGuesses.join(', ')}`);
  
  rounds = 0;
  userGuesses = [];
  document.getElementById('round').textContent = '';
  document.getElementById('result').textContent = '';
}
