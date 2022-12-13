let playbtn = document.querySelector("#playbtn")
let roundNumInput = document.querySelector("#number-round")
let plrScore = document.querySelector(".score.plr")
let pcScore = document.querySelector(".score.pc")
let chooser = document.querySelector("#chooser")

let RPS = ["Rock", "Paper", "Scissors"]
let RPSR = {"Paper" : 1, "Scissors" : 2, "Rock" : 3}
let getComputerChoice = () => {return RPS[Math.floor(Math.random() * RPS.length)]}

const queryString = window.location.search
const urlParams = new URLSearchParams(queryString)

let maxRounds = urlParams.get("rounds") || 5
let roundsPlayed = 0
let wins = 0
let pcwins = 0

roundNumInput.value = maxRounds

let gameEnded = function() {
    chooser.textContent = (pcwins == wins) ? "Game ended! It's a tie!"
                        : (wins > pcwins) ? "Game ended! You win!" : "Game ended! You lose!"
}

let playerPlayed = function(playerSelection) {
    if (roundsPlayed >= maxRounds) { gameEnded(); return }
    roundsPlayed++

    let win = false
    let tie = false
    let computerSelection = getComputerChoice()

    win = (playerSelection == computerSelection) ? false
        :  (playerSelection == "Paper" && computerSelection == "Rock") ? true
        :  (playerSelection == "Rock" && computerSelection == "Paper") ? false
        :  (RPSR[playerSelection] > RPSR[computerSelection]) ? true : false

    tie = (playerSelection == computerSelection) ? true : false

    if (win) {
        wins++
        plrScore.textContent = String(wins)
        chooser.textContent = `You Win! ${playerSelection} beats ${computerSelection}`
    } else if (tie) {
        chooser.textContent = "It's a tie!"
    } else {
        pcwins++
        pcScore.textContent = String(pcwins)
        chooser.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`
    }
}

document.querySelector("#choicerock").onclick = function(){ playerPlayed("Rock") }
document.querySelector("#choicepaper").onclick = function(){ playerPlayed("Paper") }
document.querySelector("#choicescissors").onclick = function(){ playerPlayed("Scissors") }

playbtn.onclick = function() {
    let roundInput = roundNumInput.value
    if (Number(roundInput)) {
        urlParams.delete("rounds")
        urlParams.append("rounds", String(roundInput))
        window.location.href = window.location.pathname +"?"+ urlParams.toString()
        return
    }
    window.location.reload()
}