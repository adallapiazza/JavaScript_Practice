const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();

  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
    return(userInput);
  } else { 
    console.log("Error: Incorrect input");
    }   
}

function getComputerChoice() {
  num = Math.floor(Math.random()*3)
  if(num === 0) {
    return('rock');
  } else if (num === 1) {
    return('paper');
  } else if (num === 2) {
    return('scissors');
  }
}

function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return("tie");
  }

  if (userChoice === 'rock') {
    if(computerChoice === 'paper') {
      return("Computer Won");
    } else {
      return("User Won");
    }
  }

  if (userChoice === 'scissors') {
    if(computerChoice === 'paper') {
      return("Computer Won");
    } else {
      return("User Won");
    }
  }
}

function playGame(userChoice = getUserChoice('rock'), computerChoice = getComputerChoice()) {
  console.log('User throws ' + userChoice);
  console.log('Computer thorws ' + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
}

playGame();

