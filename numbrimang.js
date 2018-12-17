const guessField = document.querySelector(".guessField");
const guessSubmit = document.querySelector(".guessSubmit");

const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHigh = document.querySelector(".lowOrHigh");

let randomNumber = Math.floor(Math.random() * 100) + 1;

let guessCount = 1;

const checkGuess = () => {
    let userGuess = Number(guessField.value);

    if (guessCount == 1) {
        guesses.textContent = 'Eelnevad pakkumised: '
    }

    guesses.textContent += `${userGuess}`;

    if (userGuess === randomNumber) {
        // kui arvab õigesti
    } else if (guessCount === 10) {
        // kui kasutaja vastab 10 korda valesti
    } else {
        if (userGuess < randomNumber) {
            // liiga madal
        } else if (userGuess > randomNumber) {
            // liiga kõrge
        }
    }

    guessCount++;
};

guessSubmit.addEventListener('click', checkGuess);