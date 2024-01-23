const result = document.querySelector('.result')
const humanScore = document.querySelector('#human-score')
const machineScore = document.querySelector('#machine-score')

let humanScoreNumber = 0
let machineScoreNumber = 0


const playHuman = (humanChoise) => {

  playTheGame(humanChoise, playMachine())
}


const playMachine = () => {
  const choises = ['rock', 'paper', 'scissors']
  const rondomNumber = Math.floor(Math.random() * 3)


  return choises[rondomNumber]
}

const playTheGame = (human, machine) => {

  console.log('Humano: ' + human + ' Maquina: ' + machine)

  if (human === machine) {
    result.innerHTML = "deu empate!"
  } else if (
    (human === 'paper' && machine === 'rock') ||
    (human === 'rock' && machine === 'scissors') ||
    (human === 'scissors' && machine === 'paper')
  ) {
    humanScoreNumber++
    humanScore.innerHTML = humanScoreNumber
    result.innerHTML = "Voçê ganhou!"
  } else {
    machineScoreNumber++
    machineScore.innerHTML = machineScoreNumber
    result.innerHTML = "Voçê perdeu para  Alexa!"
  }

}