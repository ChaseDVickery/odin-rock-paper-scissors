
let humanScore = 0;
let computerScore = 0;


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