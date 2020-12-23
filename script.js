const Playgame = document.querySelector('.Playgame');
const inputNumber = document.getElementById('inputNumber');
const enter = document.querySelector('.enter');
const low = document.querySelector('.low');
const high = document.querySelector('.high');
const Winner = document.querySelector('.Guess');
const cancel = document.querySelector('.cancel');
const color1 = document.querySelector('.color1');
const color2 = document.querySelector('.color2');
const acertou = document.querySelector('.acertou');
const tente = document.querySelector('.tente');
const tentativas = document.querySelector('.tenta')
let apagar = tente;
apagar.style.display = 'none'
enter.disabled = true;
cancel.disabled = true;
const guessNumber = inputNumber;


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
    tentativas.textContent = tentativas.value = ''
}

function ramdomNumber() {
    numbers = Math.floor(Math.random() * 10) + 1;
    console.log(numbers)
    resetFunc()
    Winner.textContent = '';
    enter.disabled = false;
    cancel.disabled = false;

}
let tentar = 0;
for (let i = 1; i > tentar + 1; i++) {
    console.log(i)
    tentar++;
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
    tentar++;
    tentativas.textContent = tentativas.value = tentar;
    if (guess === numbers) {
        acertou.style.backgroundColor = 'pink'
        Winner.textContent = inputNumber.value;
    } else if (guess < numbers) {
        color1.style.backgroundColor = 'blue';
        low.innerText = inputNumber.value;
    } else if (guess > numbers) {
        color2.style.backgroundColor = 'yellow';
        high.innerText = inputNumber.value;
    }
    if (tentar === 4 || guess === numbers) {
        resetFunc();
        desabilit();
        visivel();
    }

}


enter.addEventListener('click', function() {
    funfun();
    game();

})

Playgame.addEventListener('click', function() {
    ramdomNumber();


})

cancel.addEventListener('click', function() {
    game()
    resetFunc()
    enter.disabled = true;
})