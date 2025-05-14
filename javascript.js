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

// function getHumanChoice() {
//     let userChoice = prompt("Please enter your move (Rock, Paper, or Scissors):")
//     // console.log(userChoice);
//     return(userChoice);
// }

function humanWin() {
    results.textContent = "You win! +1 to Humans";
    humanScore++;
}

function computerWin() {
    results.textContent = "Computer Wins! +1 to the computers";
    computerScore++;
}

const scoreBoard = document.querySelector(".score");

function updateScore() {
    scoreBoard.textContent = `Human: ${humanScore} | Computer: ${computerScore}`;
}

function playRound(humanChoice) {
    let human = humanChoice.toUpperCase();
    let computer = getComputerChoice().toUpperCase();
    console.log("Human: " + human);
    console.log("Computer: " + computer);

    if (human === computer) {
        tieRound();
    }
    else if (human === "ROCK" && computer === "PAPER") {
        computerWin();
    }
    else if (human === "ROCK" && computer === "SCISSORS") {
        humanWin();
    }
    else if (human === "PAPER" && computer === "ROCK") {
        humanWin();
    }
    else if (human === "PAPER" && computer === "SCISSORS") {
        computerWin();

    }
    else if (human === "SCISSORS" && computer === "ROCK") {
        computerWin();

    }
    else if (human === "SCISSORS" && computer === "PAPER") {
        humanWin();
    }

    updateScore();
  }
  

//   function playGame() {
//     for (let i=0; i<5; i++) {
//         const humanSelection = getHumanChoice();
//         const computerSelection = getComputerChoice();
  
//         playRound(humanSelection, computerSelection);
//     }
//     console.log("Human Score: " + humanScore);
//     console.log("Computer Score: " + computerScore);
//   }

//   playGame();

const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");
const results = document.querySelector(".results");

rockBtn.addEventListener("click", (e) => {
    // console.log(e.target.innerText);
    let choice = e.target.innerText;
    playRound(choice);
});

paperBtn.addEventListener("click", (e) => {
    // console.log(e.target.innerText);
    let choice = e.target.innerText;
    playRound(choice);
});

scissorsBtn.addEventListener("click", (e) => {
    // console.log(e.target.innerText);
    let choice = e.target.innerText;
    playRound(choice);
});