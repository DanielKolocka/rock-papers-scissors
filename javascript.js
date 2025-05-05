console.log("Hello World");

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let random = Math.round(100*Math.random());
    let result;
    if (random < 33) {
        result = "Rock";
    }
    else if (random <= 66) {
        result = "Paper";
    }
    else {
        result = "Scissors";
    }
    return(result);
}

function getHumanChoice() {
    let userChoice = prompt("Please enter your move (Rock, Paper, or Scissors):")
    // console.log(userChoice);
    return(userChoice);
}

function playRound(humanChoice, computerChoice) {
    let human = humanChoice.toUpperCase();
    let computer = computerChoice.toUpperCase();
    console.log("Human: " + human);
    console.log("Computer: " + computer);
    if (human === computer) {
        console.log("It's a tie!");
    }
    else if (human === "ROCK" && computer === "PAPER") {
        console.log("Computer Wins! +1 to the computers!");
        computerScore++;
    }
    else if (human === "ROCK" && computer === "SCISSORS") {
        console.log("You win! +1 to Humans");
        humanScore++;
    }
    else if (human === "PAPER" && computer === "ROCK") {
        console.log("You win! +1 to Humans");
        humanScore++;
    }
    else if (human === "PAPER" && computer === "SCISSORS") {
        console.log("Computer Wins! +1");
        computerScore++;

    }
    else if (human === "SCISSORS" && computer === "ROCK") {
        console.log("Computer Wins! +1");
        computerScore++;

    }
    else if (human === "SCISSORS" && computer === "PAPER") {
        console.log("You win! +1 to Humans");
        humanScore++;
    }
  }
  
  
  

  function playGame() {
    for (let i=0; i<5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
  
        playRound(humanSelection, computerSelection);
    }
    console.log("Human Score: " + humanScore);
    console.log("Computer Score: " + computerScore);
  }

  playGame();