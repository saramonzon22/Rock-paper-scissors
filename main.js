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
    let myArray = ['rock', 'paper', 'scissors'];
    const random = Math.random() * myArray.length | 0;
    const value = myArray[random];
    if (select === value) {
        resultParraf.innerHTML = 'Draw!'
        resultParraf.classList.add('background3');
        resultParraf.classList.remove('background2', 'background1');
    }
    else if (select === 'rock' && value === 'scissors' || select === 'paper' && value === 'rock' || select === 'scissors' && value === 'paper') {
        resultParraf.innerHTML = 'You won, congratulations!'
        resultText.innerHTML = value;
        resultParraf.classList.add('background1');
        resultParraf.classList.remove('background2', 'background3');

    }
    else if (select === 'paper' && value === 'scissors' || select === 'rock' && value === 'paper' || select === 'scissors' && value === 'rock') {
        resultParraf.innerHTML = 'You lost, try again!'
        resultText.innerHTML = value;
        resultParraf.classList.add('background2');
        resultParraf.classList.remove('background1', 'background3');
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