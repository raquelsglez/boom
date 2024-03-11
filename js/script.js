const userInput = document.getElementById('userInput');
const countdown = document.getElementById('countdown');
const result = document.getElementById('result');
const restartButton = document.getElementById('restart');

userInput.addEventListener('keydown', (event) => {
    if(event.key === 'Enter'){
        let count = 6;
        const randomNumber = Math.floor(Math.random() * 3) + 1;

        const countdownPromise = new Promise((resolve) => {
            setTimeout(() => {
                resolve(randomNumber);
            }, 5000);
        });

        countdownPromise.then((randomNumber) => {
            compareNumbers(randomNumber);
        });

        const interval = setInterval(() => {
            count--;
            countdown.innerHTML = `<p>Cuenta atrás: ${count} segundos</p>`;
            if (count === 0) {
                clearInterval(interval);
            }
        }, 1000);
    };
});

function compareNumbers(randomNumber) {
    const numberInput = parseInt(userInput.value);

    if (numberInput === randomNumber) {
        result.innerHTML = `<p>¡Has salvado el mundo! 👑</p><p>Tu número ${numberInput} es el mismo que el número ${randomNumber}</p>`;
    } else {
        result.innerHTML = `<p>¡La bomba ha estallado! 💥</p><p>Tu número ${numberInput} NO es el mismo que el número ${randomNumber}</p>`;
    };
};

restartButton.addEventListener('click', function() {
    userInput.value = '';
    countdown.textContent = '';
    result.textContent = '';
});
