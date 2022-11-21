let player = 0;
let computer = 0;
let round = 0;

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

const buttons = document.querySelectorAll('button');
const container = document.querySelector('#results');
const content = document.createElement('div');

const containInfo = document.querySelector('#game-info')
const contentInfo = document.createElement('div');


buttons.forEach((button) => {
    button.addEventListener('click', () => {
        result = playRound(button.id, getComputerChoice());
        ++round;
        content.textContent = result;
        content.classList.add('content');
        container.appendChild(content);
        result = result.toUpperCase();
        if (result.includes("WIN") == true) {
            ++player;
        }
        else if (result.includes("LOSE") == true) {
            ++computer
        }
        contentInfo.textContent = `The round is - ${round}, player score : ${player}, computer score : ${computer}`;
        contentInfo.classList.add('contentInfo');
        containInfo.appendChild(contentInfo);
    })
})