let rounds = 0;

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
  document.getElementById('round').textContent = `Round: ${rounds}`;

  if (rounds === 3) {
    setTimeout(endGame, 100);
  }
}

function endGame() {
  alert("Game over! You've played 3 rounds.");
  
  rounds = 0;
}
