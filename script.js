const Playgame = document.querySelector('.Playgame');
const inputNumber = document.getElementById('inputNumber')
const enter = document.querySelector('.enter');
const low = document.querySelector('.low');
const high = document.querySelector('.high');
const Winner = document.querySelector('.Guess');
const cancel = document.querySelector('.cancel');
const guessNumber = inputNumber;

let numbers;
let guess;
const funfun = function() {
    Number(inputNumber);
    guess = Number(guessNumber.value)
}


function ramdomNumber() {
    numbers = Math.floor(Math.random() * 6) + 1;
    console.log(numbers)
    inputNumber.innerHTML = '';
    low.innerText = '';
    high.innerText = '';
    Winner.textContent = '';

}
let tentar = 1;
for (let i = 1; i > tentar; i++) {
    game();
    tentar++;
}

function game() {
    if (guess === numbers) {
        Winner.textContent = inputNumber.value;
    } else if (guess < numbers) {
        low.innerText = inputNumber.value;
    } else if (guess > numbers) {
        high.innerText = inputNumber.value;

    }
}


enter.addEventListener('click', function() {
    funfun();
    game()
})

Playgame.addEventListener('click', function() {
    ramdomNumber()

})

cancel.addEventListener('click', function() {
    game()
    inputNumber.innerHTML = inputNumber.value = 0;
    low.innerText = '';
    high.innerText = '';
    Winner.textContent = '';
})