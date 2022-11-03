const moves = [
    'Rock',
    'Paper',
    'Scissors'
]

getComputerChoice = () => moves[Math.floor(Math.random() * moves.length)]

const playerSelection = "rock"
const computerSelection = getComputerChoice()

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

console.log(playRound(playerSelection, computerSelection))