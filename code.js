const moves = [
    'Rock',
    'Paper',
    'Scissors'
]

getComputerChoice = () => moves[Math.floor(Math.random() * moves.length)]

console.log(getComputerChoice())