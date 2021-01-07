const Playgame = document.querySelector('.Playgame');
const inputNumber = document.getElementById('inputNumber');
const ModPlaygame = document.querySelector('.ModPlaygame');
const enter = document.querySelector('.enter');
const enter1 = document.querySelector('.enter1');
const enter2 = document.querySelector('.enter2');
const enter3 = document.querySelector('.enter3')
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
enter1.disabled = true;
enter2.disabled = true;
enter3.disabled = true;
enter.disabled = true;
cancel.disabled = true;
const guessNumber = inputNumber;
let wongame = 0;
let counter = 0;
let wonNum = acertou;
let ganhador1 = 0;
let ganhador2 = 0;
let ganhador3 = 0;
let ganhador = 0;
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
    // acertou.style.backgroundColor = 'rgb(230, 63, 63)'
    tentativas.textContent = tentativas.value = ''
        // Winner.textContent = '';
    low.innerHTML = ''
    high.innerHTML = ''
    color2.style.backgroundColor = 'rgb(230, 63, 63)'
    color1.style.backgroundColor = 'rgb(230, 63, 63)';
    inputNumber.textContent = inputNumber.value = '';
    enter.disabled = false;
    cancel.disabled = false;
    enter1.disabled = false;
    enter2.disabled = false;
    enter3.disabled = false;
    inputNumber.focus();
    primerio.innerHTML = '';
    clickHide();
    recomecarHide();


}

function ramdomNumber() {
    document.body.style.backgroundColor = 'green';
    numbers = Math.floor(Math.random() * 10) + 1;
    console.log(numbers)
    resetFunc()

}

function SecondRandom() {
    document.body.style.backgroundColor = 'yellow'
    numbers = Math.floor(Math.random() * 20) + 1;
    console.log(numbers)
    resetFunc();



}

function ThirdRamdom() {
    document.body.style.backgroundColor = 'red'
    numbers = Math.floor(Math.random() * 30) + 1;
    resetFunc();
    console.log(numbers)

}

function fourthRancom() {
    document.body.style.backgroundColor = 'black'
    numbers = Math.floor(Math.random() * 50) + 1;
    resetFunc();
    console.log(numbers)

}



let tentar;

for (let i = 1; i > counter + 1; i++) {
    console.log(i)
    counter++;
}
const desabilit = function() {
    enter.disabled = true;
    cancel.disabled = true;
    enter1.disabled = true;
    enter2.disabled = true;
    enter3.disabled = true;
}


function game() {

    tentar -= 1;
    console.log(ganhador1)
    if (guess === numbers) {
        windowShow()
        Playgame.disabled = false;
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

}

function allfunction() {
    Playgame.disabled = true;
    desabilit();
    recomecar();
    restall();
    click();
    restallNumbers()
}

let numberMoves = 4;

function countDown() {
    numberMoves--;
}
FirstGame = () => {
    countDown();
    tentativas.style.display = 4;
    console.log(ganhador1, 'pri')
    ganhador1++;
    if (ganhador1 === 4 && guess !== numbers) {
        allfunction();
    } else if (ganhador1 === 4 && guess === numbers) {
        enter.style.display = 'none';
        enter1.style.display = 'block';
    } else if (guess === numbers) {
        enter.style.display = 'none';
        enter1.style.display = 'block';
    }

}

segundoGame = () => {
    ganhador2++;
    if (ganhador2 === 3 && guess !== numbers) {
        allfunction();
        enter.style.display = 'block'
        enter1.style.display = 'none'
    } else if (ganhador2 === 3 && guess === numbers) {
        enter1.style.display = 'none'
        enter2.style.display = 'block'
    } else if (guess === numbers) {
        enter1.style.display = 'none'
        enter2.style.display = 'block'

    }
}


function thirdGame() {
    ganhador3++;
    if (ganhador3 === 2 && guess !== numbers) {
        allfunction();
        enter.style.display = 'block'
        enter2.style.display = 'none'
    } else if (ganhador3 === 3 && guess === numbers) {
        enter.style.display = 'none'
        enter2.style.display = 'none'
        enter3.style.display = 'block'
    } else if (guess === numbers) {
        enter.style.display = 'none'
        enter2.style.display = 'none'
        enter3.style.display = 'block'

    }

};

function quartoGame() {
    ganhador++;
    if (ganhador === 1 && guess !== numbers) {
        allfunction();
        enter.style.display = 'block'
        enter1.style.display = 'none'
        enter2.style.display = 'none'
        enter3.style.display = 'none'

    } else if (ganhador === 1 && guess === numbers) {
        enter.style.display = 'block'
        enter1.style.display = 'none'
        enter2.style.display = 'none'
        enter3.style.display = 'none'
        enter.style.color = 'block'
        return h5.style.color = "black"
    } else if (guess === numbers) {
        enter1.style.display = 'none'
        enter2.style.display = 'none'
        enter3.style.display = 'none'
        enter.style.display = 'block'
        return h5.style.color = "black"

    }

}

enter.addEventListener('click', function() {
    funfun();
    game();
    FirstGame();
    tentativas.innerHTML = numberMoves;
})
enter1.addEventListener('click', function() {
    funfun();
    game();
    segundoGame()


})
enter2.addEventListener('click', function() {
    funfun();
    game();
    thirdGame();

})
enter3.addEventListener('click', function() {
    funfun();
    game();
    quartoGame()

})
Sbutton.addEventListener('click', function() {
    Playgame.disabled = true;
    desabilit();
    recomecarHide();
    clickHide();
    windowHide();
    recomecarHide();
    clickHide();
    ramdomNumber();
    enter1.style.display === 'none'

})

function restall() {
    resetGame = 1;
    ganhador = 0;

}

function restallNumbers() {
    wongame = 0;
    counter = 0;
    ganhador1 = 0;
    ganhador2 = 0;
    ganhador3 = 0;
    ganhador = 0;
    numberMoves = 4;
}


let resetGame = 1;
const play = Playgame.addEventListener('click', function() {

    if (resetGame === 1) {
        ramdomNumber();
        Fases.innerHTML = 3;
        resetFunc();
        fases.innerHTML = 'primeira';
        resetGame++;
        tentativas.style.innerHTML = 4;
        console.log('counter', resetGame)
        Playgame.disabled = true;
        windowHide()
        recomecarHide()
        clickHide();
        recomecarHide();
        clickHide();
        clickHide();
        restallNumbers();
        ganhador1 = 0;
        ganhador2 = 0;
        ganhador3 = 0;


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