let totalRounds = 5
let wins = 0

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

function game() {
    wins = 0
    for (let i = 0; i <= totalRounds; i++) {
        let playerChoice = prompt("Type scissors, paper or rock!")
        let result = playRound(playerChoice, getComputerChoice())
        console.log(result)
        wins += (result.includes("Win")) ? 1 : 0
        if (totalRounds == i) {
            if (wins > totalRounds/2) {
                console.log(`You have won the game with ${wins} Wins!`)
            } else if (wins < totalRounds/2) {
                console.log(`You have lost the game with ${wins} Wins!`)
            } else {
                console.log("Game ended with a tie!")
            }
        }
    }
};
game()