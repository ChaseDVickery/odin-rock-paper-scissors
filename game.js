



function getComputerChoice() {
    let choiceNumber = Math.floor(Math.random() * 3);
    if (choiceNumber === 0) { return "rock"; }
    else if (choiceNumber === 1) { return "paper"; }
    else { return "scissors"; }
}

function getHumanChoice() {
    let choice = prompt("Choose rock, paper, or scissors");
    return choice;
}

function isValidChoice(choice) {
    return  choice === "rock" ||
            choice === "paper" ||
            choice === "scissors";
}

function playGame() {
    const totalRounds = 5;
    let playedRounds = 0;

    let humanScore = 0;
    let computerScore = 0;

    let humanSelection;
    let computerSelection;

    // DOM
    const buttonRock        = document.querySelector("#choose-rock");
    const buttonPaper       = document.querySelector("#choose-paper");
    const buttonScissors    = document.querySelector("#choose-scissors");
    const roundResultDisplay    = document.querySelector("#round-results");
    const gameResultDisplay     = document.querySelector("#game-results");
    const runningTallyDisplay   = document.querySelector("#running-tally");

    // EVENT LISTENERS
    // Adding event listener to each choice button
    buttonRock.addEventListener(    "click", (e) => playRound("rock", getComputerChoice()));
    buttonPaper.addEventListener(   "click", (e) => playRound("paper", getComputerChoice()));
    buttonScissors.addEventListener("click", (e) => playRound("scissors", getComputerChoice()));

    // Alternate listener method, use event delegation to just check parent div...

    function showRoundResults(roundResults) {
        runningTallyDisplay.textContent = `Won:${humanScore}, Lost:${computerScore}, Tied:${playedRounds - humanScore - computerScore}`;
        roundResultDisplay.textContent = roundResults;
    }

    function endGame() {
        if (humanScore > computerScore) {
            gameResultDisplay.textContent = `Congratulations! You won the best-of-${totalRounds}.\nYou won ${humanScore} rounds.\nYou lost ${computerScore} rounds.\nYou tied ${totalRounds - humanScore - computerScore} rounds.`;
        }
        else if (computerScore > humanScore) {
            gameResultDisplay.textContent = `Better luck next time! You lost the best-of-${totalRounds}.\nYou won ${humanScore} rounds.\nYou lost ${computerScore} rounds.\nYou tied ${totalRounds - humanScore - computerScore} rounds.`;
        }
        else {
            gameResultDisplay.textContent = `Good attempt! You tied the best-of-${totalRounds}.\nYou won ${humanScore} rounds.\nYou lost ${computerScore} rounds.\nYou tied ${totalRounds - humanScore - computerScore} rounds.`;
        }

        humanScore = 0;
        computerScore = 0;
        playedRounds = 0;
    }


    function playRound(humanChoice, computerChoice) {
        playedRounds += 1;
        humanChoice = humanChoice.toLowerCase();
        switch (humanChoice) {
            case "rock":
                if (computerChoice === "rock") { showRoundResults("Tie! Both chose rock."); }
                else if (computerChoice === "paper") { computerScore += 1; showRoundResults("You lose! Paper beats rock."); }
                else if (computerChoice === "scissors") { humanScore += 1; showRoundResults("You win! Rock beats scissors."); }
                break;
            case "paper":
                if (computerChoice === "rock") { humanScore += 1; showRoundResults("You win! Paper beats rock."); }
                else if (computerChoice === "paper") { showRoundResults("Tie! Both chose paper."); }
                else if (computerChoice === "scissors") { computerScore += 1; showRoundResults("You lose! Scissors beat paper."); }
                break;
            case "scissors":
                if (computerChoice === "rock") { computerScore += 1; showRoundResults("You lose! Rock beats scissors."); }
                else if (computerChoice === "paper") { humanScore += 1; showRoundResults("You win! Scissors beat paper."); }
                else if (computerChoice === "scissors") { showRoundResults("Tie! Both chose scissors."); }
                break;
        }
        if (playedRounds >= totalRounds) {
            endGame();
        }
    }

    
    
}

playGame();

// Test random choice
/*
const total = 1000;
let r = 0; let p = 0; let s = 0;
for (let i = 0; i < total; i++) {
    let choice = getComputerChoice();
    console.log(choice);
    if (choice === "rock") { r++; }
    else if (choice === "paper") { p++; }
    else if (choice === "scissors") { s++; }
}
console.log(`Rock:${100*r/total}%\nPaper:${100*p/total}%\nScissors:${100*s/total}%\n`);
*/


// Test user choice
/*
let c;
c = getHumanChoice();
console.log(`You chose '${c}' which is ${isValidChoice(c) ? '' : 'not'} valid.`);
*/


// Test playRound
/*
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
*/