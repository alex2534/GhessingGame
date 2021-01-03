const Playgame = document.querySelector('.Playgame');
const inputNumber = document.getElementById('inputNumber');
const ModPlaygame = document.querySelector('.ModPlaygame');
const enter = document.querySelector('.enter');
const low = document.querySelector('.low');
const high = document.querySelector('.high');
const Winner = document.querySelector('.Guess');
const cancel = document.querySelector('.cancel');
const color1 = document.querySelector('.color1');
const color2 = document.querySelector('.color2');
const acertou = document.querySelector('.acertou');
const tente = document.querySelector('.tente');
const tentativas = document.querySelector('.tenta');
const body = document.querySelector('.color');
const Amarelo = document.querySelector('.amarelo');
const primerio = document.querySelector('.primeiro');
const Segundo = document.querySelector('.Segundo')
const NumeroTentativas = document.querySelector('.NumeroTentativas')
const h5 = document.querySelector('.h5')
const fases = document.querySelector('.fases')



let apagar = tente;
apagar.style.display = 'none'
enter.disabled = true;
cancel.disabled = true;
const guessNumber = inputNumber;
let wongame = 0;
let counter = 0;
let wonNum = acertou;



let numbers;
let guess;
const funfun = function() {
    Number(inputNumber);
    guess = Number(guessNumber.value)
}
const resetFunc = function() {
    inputNumber.textContent = inputNumber.value = ''
    low.innerText = '';
    high.innerText = '';
    acertou.style.backgroundColor = 'rgb(230, 63, 63)'
    tentativas.textContent = tentativas.value = ''
    apagar.style.display = 'none'
    Winner.textContent = '';
    enter.disabled = false;
    cancel.disabled = false;
    inputNumber.focus()
    primerio.innerHTML = ''
        // acertou.style.backgroundColor = 'none';

}


function ramdomNumber() {
    document.body.style.backgroundColor = 'green';
    numbers = Math.floor(Math.random() * 10) + 1;
    tentar = 4;
    console.log(numbers)
    resetFunc()

}

function SecondRandom() {
    document.body.style.backgroundColor = 'yellow'
    numbers = Math.floor(Math.random() * 20) + 1;
    tentar = 3;
    console.log(numbers)
    resetFunc()
}

function ThirdRamdom() {
    document.body.style.backgroundColor = 'red'
    numbers = Math.floor(Math.random() * 30) + 1;
    tentar = 2;
    console.log(numbers)
    resetFunc()
}

function fourthRancom() {
    document.body.style.backgroundColor = 'black'
    numbers = Math.floor(Math.random() * 50) + 1;
    tentar = 1;
    console.log(numbers)
    resetFunc()
}

let ganhador = 1;
let tentar;
for (let i = 1; i > counter + 1; i++) {
    console.log(i)
    counter++;
}
const desabilit = function() {
    enter.disabled = true;
    cancel.disabled = true;
}

const visivel = function() {
    console.log('block')
    apagar.style.display = 'block'
}

function game() {
    tentar -= 1;
    ganhador++;

    if (ganhador === 5) {
        desabilit()
        console.log('numero  4')
        if (ganhador === 4) {
            desabilit()
            console.log('hello 3')
        }
        if (ganhador === 3) {
            desabilit()
            console.log('hello 3')
        }
        if (ganhador === 1) {
            desabilit()
            console.log('hello 1')
        }
        console.log('ganhador', ganhador)
    }
    console.log('ganhador', ganhador)
    console.log('tentando', tentar)
    if (guess === numbers) {
        acertou.style.backgroundColor = 'pink'
        Winner.textContent = guess;
        console.log(guess)
        tente.textContent = tente;
        low.innerHTML = ''
        high.innerHTML = ''
        color2.style.backgroundColor = 'rgb(230, 63, 63)'
        color1.style.backgroundColor = 'rgb(230, 63, 63)';
        inputNumber.value = '';
        desabilit();
        Playgame.disabled = false;
    } else if (guess < numbers) {
        color1.style.backgroundColor = 'red';
        color2.style.backgroundColor = 'rgb(230, 63, 63)'
        low.innerText = inputNumber.value;
        high.innerText = '';
        inputNumber.value = '';
        inputNumber.focus()
    } else if (guess > numbers) {
        color2.style.backgroundColor = 'yellow'
        color1.style.backgroundColor = 'rgb(230, 63, 63)'
        high.innerText = inputNumber.value;
        low.innerText = ''
        inputNumber.value = ''
        inputNumber.focus()

    }

}


enter.addEventListener('click', function() {
    funfun();
    game();


})
let resetGame = 1;
Playgame.addEventListener('click', function() {

    if (resetGame === 1) {
        ramdomNumber()
        resetFunc()
        tente.innerHTML = 4;
        fases.innerHTML = 'primeira';
        resetGame++;
        console.log('counter', resetGame)
        Playgame.disabled = true;

    } else if (resetGame === 2) {

        SecondRandom()
        fases.innerHTML = 'segunda';
        Segundo.innerHTML = 20 + '.';
        NumeroTentativas.innerHTML = 3;
        resetFunc()
        resetGame++;
        console.log('counter', resetGame);
        Playgame.disabled = true;



    } else if (resetGame === 3) {
        ThirdRamdom();
        resetFunc();
        resetGame++;
        Segundo.innerHTML = 30 + '.';
        fases.innerHTML = 'terceira';
        NumeroTentativas.innerHTML = 2;
        console.log(resetGame)
        Playgame.disabled = true;



    } else if (resetGame === 4) {
        fourthRancom();
        Segundo.innerHTML = 40 + '.';
        fases.innerHTML = 'quarto';
        NumeroTentativas.innerHTML = 1;
        h5.style.color = 'white'
        resetFunc();
        resetGame++;
        console.log(resetGame)
        Playgame.disabled = true;

    } else if (resetGame === 5) {
        return ramdomNumber()
    }
})