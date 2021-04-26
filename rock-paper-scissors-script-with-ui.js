const resultDiv = document.querySelector("#results");
const playerScoreDiv = document.querySelector("#playerScore");
const computerScoreDiv = document.querySelector("#computerScore");


const btnRock = document.querySelector("#btnrock");
let playerScore = 0;
let computerScore = 0;
btnRock.addEventListener('click', () => {
    updateScore("rock");
  });
const btnPaper = document.querySelector("#btnpaper");
btnPaper.addEventListener('click', () => {
    updateScore("paper");
  });
const btnScissors = document.querySelector("#btnscissors");
btnScissors.addEventListener('click', () => {
    updateScore("scissors");
  });

function updateScore(selection) {
    if (playerScore === 5) {
        resultDiv.textContent = "You win the game !";
        playerScoreDiv.textContent = `Player score: ${playerScore}`;
        computerScoreDiv.textContent = `Computer score: ${computerScore}`;
    } else if (computerScore === 5) {
        resultDiv.textContent = "You lose the game, try again ?";
        playerScoreDiv.textContent = `Player score: ${playerScore}`;
        computerScoreDiv.textContent = `Computer score: ${computerScore}`;
    } else {
        resultDiv.textContent = playRound(selection, computerPlay());
        playerScoreDiv.textContent = `Player score: ${playerScore}`;
        computerScoreDiv.textContent = `Computer score: ${computerScore}`;
    }
}


// Define the possible outputs
let possibleAnswers = ["rock", "paper", "scissors"];


// No input -> Number
// Function randomly returns an integer between 0 and 2.
function randomNum() {
    return Math.floor(Math.random() * 3);
}

// No input -> String
// Function returns randomly ‘Rock’, ‘Paper’ or ‘Scissors’.
function computerPlay() {
    return possibleAnswers[randomNum()];
}

// String String -> String
// Function consumes two parameters the playerSelection and computerSelection - and then return 
// a string that declares the winner of the round.
function playRound(playerSelection, computerSelection) {
    let playerSelectionCaseInsensitive = playerSelection.toLowerCase();
    if (playerSelectionCaseInsensitive === "rock") {
        if (computerSelection === "paper") {
            computerScore += 1;
            return "You Lose! Paper beats Rock";
        } else if (computerSelection === "scissors") {
            playerScore += 1;
            return "You Win! Rock beats Scissors";
        } else {
            return "No winner! Rock cancels Rock";
        }
    } else if (playerSelectionCaseInsensitive === "paper") {
        if (computerSelection === "scissors") {
            computerScore += 1;
            return "You Lose! Scissors beats Paper";
        } else if (computerSelection === "rock") {
            playerScore += 1;
            return "You Win! Paper beats Rock";
        } else {
            return "No winner! Paper cancels Paper";
        }
    } else {
        if (computerSelection === "rock") {
            computerScore += 1;
            return "You Lose! Rock beats Scissors";
        } else if (computerSelection === "paper") {
            playerScore += 1;
            return "You Win! Scissors beats Paper";
        } else {
            return "No winner! Scissors cancels Scissors";
        }
    }
}

// String String Number Number -> Array
// Function consumes four parameters the playerSelection, computerSelection the player score and computer score- and 
// then returns the updated scores in the form of an array.
function playRoundScore(playerSelection, computerSelection, playerScore, computerScore) {
    let playerSelectionCaseInsensitive = playerSelection.toLowerCase();
    if (playerSelectionCaseInsensitive === "rock") {
        if (computerSelection === "paper") {
            return [playerScore, (computerScore + 1), "You Lose! Paper beats Rock"];
        } else if (computerSelection === "scissors") {
            return [(playerScore + 1), computerScore, "You Win! Rock beats Scissors"];
        } else {
            return [playerScore, computerScore, "No winner! Rock cancels Rock"];
        }
    } else if (playerSelectionCaseInsensitive === "paper") {
        if (computerSelection === "scissors") {
            return [playerScore, (computerScore + 1), "You Lose! Scissors beats Paper"];
        } else if (computerSelection === "rock") {
            return [(playerScore + 1), computerScore, "You Win! Paper beats Rock"];
        } else {
            return [playerScore, computerScore, "No winner! Paper cancels Paper"];
        }
    } else {
        if (computerSelection === "rock") {
            return [playerScore, (computerScore + 1), "You Lose! Rock beats Scissors"];
        } else if (computerSelection === "paper") {
            return [(playerScore + 1), computerScore, "You Win! Scissors beats Paper"];
        } else {
            return [playerScore, computerScore, "No winner! Scissors cancels Scissors"];
        }
    }
}

// Number Number -> String
// Consumes player score and computer score and returns a string declaring the winner.
function resultStringCreation(playerScore, computerScore) {
    if (playerScore > computerScore) {
        return "You Win!"
    } else if (playerScore < computerScore)  {
        return "You Lose!"
    } else {
        return "No Winner"
    }
}

// No input -> String
// Consumes no input and returns the result of a rock paper scissors game.
function game() {
    iterationRemaining = gameTurnNumberLimit;
    playerScore = 0;
    computerScore = 0;
    while (iterationRemaining > 0) {
        resultArray = playRoundScore(prompt("Enter your play (rock / paper / scissors)"), computerPlay(), playerScore, computerScore);
        playerScore = resultArray[0];
        computerScore = resultArray[1];
        console.log(resultArray[2] + "\nScore is : Player " + playerScore + " Computer: " + computerScore);
        iterationRemaining = iterationRemaining - 1;
    }
    resultString = resultStringCreation(playerScore, computerScore);
    return resultString;
}

let gameTurnNumberLimit = 5;
// console.log(playRound(playerSelection, computerSelection));
// console.log(game());


  