function playRound(playerSelection, computerSelection) {
    if (playerSelection.toUpperCase() == "ROCK") {
        if (computerSelection == "Rock") {
            return "Tie, you both chose Rock"
        }
        else if (computerSelection == "Paper"){
            return "You Lose! Paper beats Rock"
        }
        else {
            return "You Win! Rock beats scissors"
        }
    }
    if (playerSelection.toUpperCase() == "PAPER") {
        if (computerSelection == "Rock") {
            return "You Win!, Paper beats Rock"
        }
        else if (computerSelection == "Paper"){
            return "Tie, you both chose Paper"
        }
        else {
            return "You Lose! Scissors beats Paper"
        }
    }
    if (playerSelection.toUpperCase() == "SCISSORS") {
        if (computerSelection == "Rock") {
            return "You Lose!, Rock beats Scissors"
        }
        else if (computerSelection == "Paper"){
            return "You Win, Scissors beats Paper"
        }
        else {
            return "Tie, you both chose Scissors"
        }
    }
}

const moves = [
    'Rock',
    'Paper',
    'Scissors'
]

getComputerChoice = () => moves[Math.floor(Math.random() * moves.length)]

function game() {
    let player = 0;
    let computer = 0;
    let result;
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("What is your move?");
        const computerSelection = getComputerChoice();
        result = playRound(playerSelection, computerSelection)
        console.log(result)
        result = result.toUpperCase()
        if (result.includes("WIN") == true) {
            ++player;
        }
        else if (result.includes("LOSE") == true) {
            ++computer;
        }
    }
    if (player == computer) {
        console.log("Tie! Player: " + player + " Computer: " + computer);
    }
    else if (player > computer){
        console.log("Win! Player: " + player + " Computer: " + computer);

    }
    else {
        console.log("Lose! Player: " + player + " Computer: " + computer);
    }
}

game()
