const player1 = document.querySelector('.player--0');
const score1 = document.getElementById('score--0');
const current1 = document.getElementById('current--0');

const player2 = document.querySelector('.player--1');
const score2 = document.getElementById('score--1');
const current2 = document.getElementById('current--1');


const btnNew = document.getElementById('btnNew');
const btnRoll = document.getElementById('btnRoll');
const btnHold = document.getElementById('btnHold');
let dice = document.getElementById('dice');


function gerarNumber() {
    return Math.floor((Math.random() * 6) + 1);
};

score1.textContent = 0;
score2.textContent = 0;

let somaDados1 = 0;
let somaDados2 = 0;

btnRoll.addEventListener('click', () => {
    let numAleatorio = gerarNumber();

    dice.src = `dice-${numAleatorio}.png`

    if (player1.className.includes("player--active")) {

        if (numAleatorio != 1) {
            somaDados1 += numAleatorio;
            current1.textContent = somaDados1;

            console.log(somaDados1)
        } else {
            player1.classList.toggle("player--active");
            player2.classList.toggle("player--active");

            somaDados1 = 0;
            current1.textContent = 0;
            score1.textContent = 0;
        }
    } else {
        if (numAleatorio != 1) {
            somaDados2 += numAleatorio;
            current2.textContent = somaDados2;

            console.log(somaDados2)
        } else {
            player1.classList.toggle("player--active");
            player2.classList.toggle("player--active");

            somaDados2 = 0;
            current2.textContent = 0;
            score2.textContent = 0;
        }
    }

});


btnHold.addEventListener('click', () => {

    if (player1.className.includes("player--active")) {

        score1.textContent = somaDados1;
        current1.textContent = 0;
        player1.classList.toggle("player--active");
        player2.classList.toggle("player--active");


    } else {

        current2.textContent = 0;
        score2.textContent = somaDados2;
        player1.classList.toggle("player--active");
        player2.classList.toggle("player--active");

    }
})

btnNew.addEventListener('click', () => {
    somaDados1 = 0;
    somaDados2 = 0;
    score1.textContent = 0;
    score2.textContent = 0;

    current1.textContent = 0;
    current2.textContent = 0;

    player1.classList.toggle("player--active");
    player2.classList.toggle("player--active");

})






