const squares = document.querySelectorAll('.square');
const mole = document.querySelector('.mole');
const timeLeft = document.querySelector('#time-left');
const score = document.querySelector('#score');

let result = 0;
let molePosition;
let currentTime = 30;
let timerId = null;

function randomSquare() {
    squares.forEach(square => {
        square.classList.remove('mole');
    })
    let randomSquare = squares[Math.floor(Math.random() * 9)];
    molePosition = randomSquare.id; 
    randomSquare.classList.add('mole')

}

squares.forEach(square => {
  square.addEventListener('mousedown', () => {

    if (square.id == molePosition) {//Este es el cuadrado por el que estoy pasando. Todos están escuchando este evento click.
      result++
      score.textContent = result
      molePosition = null
    }
  })
})

//Función para mover el topo:
function moveMole() {
  timerId = setInterval(randomSquare, 500)
}

moveMole()

function countDown() {
    currentTime--
    timeLeft.textContent = currentTime
    if (currentTime == 0) { // Cuando llega a cero detengo el contador y el movimiento del topo.
    clearInterval(countDownTimerId)
    clearInterval(timerId)
    setTimeout(function(){ 
        alert('GAME OVER! Your final score is ' + result + '.') 
        }, 2000)
    }
}

let countDownTimerId = setInterval(countDown, 1000)