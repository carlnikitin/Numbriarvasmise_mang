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

    guesses.textContent += `${userGuess}  `;

    if (userGuess === randomNumber) {
        // kui arvab õigesti
        lastResult.textContent = "Palju õnne sa võitsid!";
        lastResult.style.backgroundColor = "lightgreen";
        lowOrHigh.textContent = "";
    } else if (guessCount === 10) {
        // kui kasutaja vastab 10 korda valesti
        lastResult.textContent = "Mäng läbi!";
        lowOrHigh.textContent = "";
    } else {
        lastResult.textContent = "Vale vastus!";
        lastResult.style.backgroundColor = "red";
        
        const lowOrHighText = "Viimane pakkumine oli ";
        
        if (userGuess < randomNumber) {
            // liiga madal
            lowOrHigh.textContent = lowOrHighText + "liiga madal";
        } else if (userGuess > randomNumber) {
            // liiga kõrge
            lowOrHigh.textContent = lowOrHighText + "liiga kõrge";
        };
    };

    guessCount++;
    guessField.value = '';
    guessField.focus();
};

guessSubmit.addEventListener('click', checkGuess);