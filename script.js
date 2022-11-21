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

contentInfo.textContent = `Round : ${round}, player score : ${player}, computer score : ${computer}`;
contentInfo.classList.add('contentInfo');
containInfo.appendChild(contentInfo);

buttons.forEach((button) => {
    button.addEventListener('click', () => {

        ++round;

        result = playRound(button.id, getComputerChoice());

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

        contentInfo.textContent = `Round : ${round}, player score : ${player}, computer score : ${computer}`;
        contentInfo.classList.add('contentInfo');
        containInfo.appendChild(contentInfo);

        if (player == 5) {
            contentInfo.textContent = `Round : ${round}, player score : ${player}, computer score : ${computer}, the player has won!`;
            contentInfo.classList.add('contentInfo');
            containInfo.appendChild(contentInfo);
            for (const button of buttons) {
                button.disabled = true;
            }
        }
        if (computer == 5) {
            contentInfo.textContent = `Round : ${round}, player score : ${player}, computer score : ${computer}, the computer has won!`;
            contentInfo.classList.add('contentInfo');
            containInfo.appendChild(contentInfo);
            for (const button of buttons) {
                button.disabled = true;
            }
        }
    })
})