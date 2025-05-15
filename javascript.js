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

function tieRound() {
    results.textContent = "Tie round!"
}

const scoreBoard = document.querySelector(".score");

function updateScore() {
    scoreBoard.textContent = `Human: ${humanScore} | Computer: ${computerScore}`;
    if (humanScore >= 5 || computerScore >= 5) {
        gameOver();
    }
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

  const buttons = document.querySelector(".buttons");

  const playAgainBtn = document.createElement("button");
  playAgainBtn.setAttribute("id", "playAgain");
  playAgainBtn.textContent = "Play Again";
  playAgainBtn.setAttribute("style", "font-weight: 500; border: 1px solid transparent; border-radius: 2px;  height: 50px;  line-height: 34px;  font-size: 18px;  color: #ffffff; background-color: #007c89; padding: 1px 18px;");


  function gameOver() {
    buttons.removeChild(rockBtn);
    buttons.removeChild(paperBtn);
    buttons.removeChild(scissorsBtn);

    if (humanScore > computerScore) {
        results.textContent = "Congratulations! You have beat the computer.";
    }
    else {
        results.textContent = "Better luck next time! The computer has beat you.";
    }
    buttons.appendChild(playAgainBtn);

  }
  

  function playAgain() {
    buttons.removeChild(playAgainBtn);

    buttons.appendChild(rockBtn);
    buttons.appendChild(paperBtn);
    buttons.appendChild(scissorsBtn);

   humanScore = 0;
   computerScore = 0;

   scoreBoard.textContent = "Human: 0 | Computer: 0";
   results.textContent = "Begin the game!"
  }

const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");
const results = document.querySelector(".results");

rockBtn.addEventListener("click", (e) => {
    // console.log(e.target.innerText);
    // let choice = e.target.innerText;
    playRound("rock");
});

paperBtn.addEventListener("click", (e) => {
    // console.log(e);
    // let choice = e.target.innerText;
    playRound("paper");
});

scissorsBtn.addEventListener("click", (e) => {
    // console.log(e.target.innerText);
    // let choice = e.target.innerText;
    playRound("scissors");
});

playAgainBtn.addEventListener("click", () => {
    playAgain();
});