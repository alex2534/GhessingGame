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
const tentativas = document.querySelector('.tenta');
const body = document.querySelector('.color');
const Amarelo = document.querySelector('.amarelo');
const primerio = document.querySelector('.primeiro');
const Segundo = document.querySelector('.Segundo')
const NumeroTentativas = document.querySelector('.NumeroTentativas');
document.querySelector('.tente').style.display = 'none'
const h5 = document.querySelector('.h5')
const Fases = document.querySelector('.SecondFases')
const tentenovament = document.querySelector('.tentenovament').value;
const fases = document.querySelector('.fases');
const Parabens = document.querySelector('.parabens')
const Sbutton = document.querySelector('.Sbutton')

function PlaygameHide() {
    document.querySelector('.Playgame').style.display = 'none';
}

function PlaygameShow() {
    document.querySelector('.Playgame').style.display = 'block';
}


function clickHide() {
    document.querySelector('.click').style.display = 'none'
}

function recomecarHide() {
    document.querySelector('.recomecar').style.display = 'none'
}


function recomecar() {
    document.querySelector('.recomecar').style.display = 'block'
}

function click() {
    document.querySelector('.click').style.display = 'block'
}


function windowShow() {
    document.querySelector('.tente').style.display = "block"
}


function windowHide() {
    document.querySelector('.tente').style.display = 'none'
}



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
    Winner.textContent = '';
    low.innerHTML = ''
    high.innerHTML = ''
    color2.style.backgroundColor = 'rgb(230, 63, 63)'
    color1.style.backgroundColor = 'rgb(230, 63, 63)';
    inputNumber.textContent = inputNumber.value = '';
    enter.disabled = false;
    cancel.disabled = false;
    inputNumber.focus();
    primerio.innerHTML = '';
    clickHide();
    recomecarHide();
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
    resetFunc();



}

function ThirdRamdom() {
    document.body.style.backgroundColor = 'red'
    numbers = Math.floor(Math.random() * 30) + 1;
    tentar = 2;
    resetFunc();
    console.log(numbers)

}

function fourthRancom() {
    document.body.style.backgroundColor = 'black'
    numbers = Math.floor(Math.random() * 50) + 1;
    tentar = 1;
    resetFunc();
    console.log(numbers)

}

let ganhador = 1;
let ganhador1 = 1;
let ganhador2 = 1;
let ganhador3 = 1;
let tentar;

for (let i = 1; i > counter + 1; i++) {
    console.log(i)
    counter++;
}
const desabilit = function() {
    enter.disabled = true;
    cancel.disabled = true;
}

// function countdown01() {
//     if (ganhador === 3) {
//         Playgame.disabled = true;
//         PlaygameShow()
//         desabilit()
//         recomecar();
//         click();
//     }
//     if (guess === numbers) {
//         return SecondRandom()

//     }
//     ganhador++;
//     console.log('second function')
//     console.log('ganhador', ganhador)
// }


// function countdown() {
//     ganhador = 0;
//     if (ganhador === 2) {
//         console.log(ganhador)
//         Playgame.disabled = true;
//         PlaygameShow()
//         desabilit()
//         recomecar();
//         click();
//         resetFunc()
//         console.log('ganhador1', ganhador1)

//     } else if (guess === numbers) {
//         return countdown1()

//     }
//     ganhador++;
//     console.log('segunda function')
//     console.log('ganhador1', ganhador1)
// }


// function countdown1() {
//     ganhador2 = 0;
//     if (ganhador2 === 1) {
//         Playgame.disabled = true;
//         PlaygameShow()
//         desabilit()
//         recomecar();
//         click();
//         resetFunc()
//     } else if (guess === numbers) {
//         return countdown2();
//         console.log('quarta funciton')
//     }
//     ganhador2++;
//     console.log('ga2', ganhador2)
// }

// function countdown2() {
//     ganhador3 = 0;
//     if (ganhador3 === 0) {
//         Playgame.disabled = true;
//         desabilit()
//         recomecar();
//         click();

//     } else if (guess === numbers) {
//         return ramdomNumber();

//     }
//     ganhador3++;
//     console.log('ganhador3', ganhador3)

// }


function game() {

    tentar -= 1;




    if (ganhador1 === 4) {
        console.log('ganhador1', ganhador1)
        Playgame.disabled = true;
        PlaygameShow()
        desabilit()
        recomecar();
        click();
        ganhador1 = 1;
        ganhador2 = 1;
        ganhador3 = 1;
    }



    if (ganhador2 === 3) {
        Playgame.disabled = true;
        PlaygameShow()
        desabilit()
        recomecar();
        click();
        resetFunc()
        console.log('ganhador2', ganhador2)
    }



    if (ganhador3 === 2) {
        console.log('ganhador3', ganhador3)
        Playgame.disabled = true;
        PlaygameShow()
        desabilit()
        recomecar();
        click();
        resetFunc()
    }
    if (ganhador === 1) {
        console.log('ganhador3', ganhador)
        Playgame.disabled = true;
        PlaygameShow()
        desabilit()
        recomecar();
        click();
        resetFunc()
    }


    console.log(ganhador1)
    if (guess === numbers) {
        windowShow()
        Playgame.disabled = false;
        acertou.style.backgroundColor = 'pink'
        Winner.textContent = guess;
        low.innerHTML = ''
        high.innerHTML = ''
        color2.style.backgroundColor = 'rgb(230, 63, 63)'
        color1.style.backgroundColor = 'rgb(230, 63, 63)';
        inputNumber.textContent = inputNumber.value = '';
        desabilit();
        recomecarHide();
        clickHide();
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
    ganhador++;
    ganhador1++;
    ganhador2++;
    ganhador3++;

}
Sbutton.addEventListener('click', function() {
    Playgame.disabled = true;
    desabilit();
    recomecarHide();
    clickHide();
    windowHide();
    recomecarHide();
    clickHide();
    ramdomNumber();
    restall()


})

function restall() {
    resetGame = 1;
    ganhador = 0;
}


enter.addEventListener('click', function() {
    funfun();
    game();
})
let resetGame = 1;
const play = Playgame.addEventListener('click', function() {

    if (resetGame === 1) {
        ramdomNumber()
        Fases.innerHTML = 3;
        resetFunc()
        fases.innerHTML = 'primeira';
        resetGame++;
        console.log('counter', resetGame)
        Playgame.disabled = true;
        windowHide()
        recomecarHide()
        clickHide()
    } else if (resetGame === 2) {

        SecondRandom()
        Fases.innerHTML = 2;
        fases.innerHTML = 'segunda';
        Segundo.innerHTML = 20 + '.';
        NumeroTentativas.innerHTML = 3;
        resetFunc()
        resetGame++;
        console.log('counter', resetGame);
        Playgame.disabled = true;
        windowHide()
        recomecarHide()
        clickHide()

    } else if (resetGame === 3) {
        ThirdRamdom();
        Fases.innerHTML = 1;
        resetFunc();
        resetGame++;
        Segundo.innerHTML = 30 + '.';
        fases.innerHTML = 'terceira';
        NumeroTentativas.innerHTML = 2;
        console.log(resetGame)
        Playgame.disabled = true;
        windowHide()
        recomecarHide()
        clickHide()

    } else if (resetGame === 4) {
        fourthRancom();
        Fases.style.display = 'none'
        Parabens.innerHTML = 'block'
        Segundo.innerHTML = 50 + '.';
        fases.innerHTML = 'quarto';
        NumeroTentativas.innerHTML = 1;
        h5.style.color = 'white'
        resetFunc();
        resetGame++;
        console.log(resetGame)
        Playgame.disabled = true;
        windowHide()
        recomecarHide()
        clickHide()
    } else if (resetGame === 5) {
        windowHide()
        recomecarHide()
        clickHide()
        return ramdomNumber()
    }
})