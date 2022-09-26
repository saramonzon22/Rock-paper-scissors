'use strict'

const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const resultParraf = document.querySelector('.resultP');
const resultContainer = document.querySelector('.js-result');
const resultText = document.querySelector('.text2');


const choose = (ev) => {
    ev.preventDefault();
    const select = ev.target.value;
    console.log(select)
    let myArray = ['rock', 'paper', 'scissors'];
    const random = Math.random() * myArray.length | 0;
    const value = myArray[random];
    console.log(value)
    if (select === value) {
        resultParraf.innerHTML = '¡Empate!'
    }
    else if (select === 'rock' && value === 'scissors' || select === 'paper' && value === 'rock' || select === 'scissors' && value === 'paper') {
        resultParraf.innerHTML = '¡Ganaste!'
        resultText.innerHTML = value;
    }
    else if (select === 'paper' && value === 'scissors' || select === 'rock' && value === 'paper' || select === 'scissors' && value === 'rock') {
        resultParraf.innerHTML = '¡Perdiste!'
        resultText.innerHTML = value;
    }
    if (value === 'rock') {
        resultContainer.classList.add('rock');
        resultContainer.classList.remove('scissors');
        resultContainer.classList.remove('paper');
    }
    else if (value === 'scissors') {
        resultContainer.classList.add('scissors');
        resultContainer.classList.remove('paper');
        resultContainer.classList.remove('rock');
    }
    else if (value === 'paper') {
        resultContainer.classList.add('paper');
        resultContainer.classList.remove('scissors');
        resultContainer.classList.remove('rock');
    }


}



rock.addEventListener('click', choose);
paper.addEventListener('click', choose);
scissors.addEventListener('click', choose);