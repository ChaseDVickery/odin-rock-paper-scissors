



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

    let humanScore = 0;
    let computerScore = 0;

    let humanSelection;
    let computerSelection;

    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();
        switch (humanChoice) {
            case "rock":
                if (computerChoice === "rock") { console.log("Tie! Both chose rock."); }
                else if (computerChoice === "paper") { console.log("You lose! Paper beats rock."); computerScore += 1; }
                else if (computerChoice === "scissors") { console.log("You win! Rock beats scissors."); humanScore += 1; }
                break;
            case "paper":
                if (computerChoice === "rock") { console.log("You win! Paper beats rock."); humanScore += 1; }
                else if (computerChoice === "paper") { console.log("Tie! Both chose paper."); }
                else if (computerChoice === "scissors") { console.log("You lose! Scissors beat paper."); computerScore += 1; }
                break;
            case "scissors":
                if (computerChoice === "rock") { console.log("You lose! Rock beats scissors."); computerScore += 1; }
                else if (computerChoice === "paper") { console.log("You win! Scissors beat paper."); humanScore += 1; }
                else if (computerChoice === "scissors") { console.log("Tie! Both chose scissors."); }
                break;
        }
    }

    for (let i = 0; i < totalRounds; i++) {
        humanSelection = getHumanChoice();
        computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
    }

    if (humanScore > computerScore) {
        console.log(`Congratulations! You won the best-of-${totalRounds}.\nYou won ${humanScore} rounds.\nYou lost ${computerScore} rounds.\nYou tied ${totalRounds - humanScore - computerScore} rounds.`);
    }
    else if (computerScore > humanScore) {
        console.log(`Better luck next time! You lost the best-of-${totalRounds}.\nYou won ${humanScore} rounds.\nYou lost ${computerScore} rounds.\nYou tied ${totalRounds - humanScore - computerScore} rounds.`);
    }
    else {
        console.log(`Good attempt! You tied the best-of-${totalRounds}.\nYou won ${humanScore} rounds.\nYou lost ${computerScore} rounds.\nYou tied ${totalRounds - humanScore - computerScore} rounds.`);
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