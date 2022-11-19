let RPS = ["Rock", "Paper", "Scissors"]
let RPSR = {"Paper" : 1, "Scissors" : 2, "Rock" : 3}
let getComputerChoice = () => {return RPS[Math.floor(Math.random() * RPS.length)]}

function playRound(playerSelection, computerSelection) {
    playerSelection =  (playerSelection.substring(0,1)).toUpperCase() + (playerSelection.substring(1,playerSelection.length)).toLowerCase()

    return (playerSelection == computerSelection) ? "It's a tie!"
        :  (playerSelection == "Paper" && computerSelection == "Rock") ? `You Win! ${playerSelection} beats ${computerSelection}`
        :  (playerSelection == "Rock" && computerSelection == "Paper") ? `You Lose! ${computerSelection} beats ${playerSelection}`
        :  (RPSR[playerSelection] > RPSR[computerSelection]) ? `You Win! ${playerSelection} beats ${computerSelection}` : `You Lose! ${computerSelection} beats ${playerSelection}`
}
console.log(playRound("Rock", getComputerChoice()))