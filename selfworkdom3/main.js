let countdown;
let timeLeft;
let isPaused = false;

const startBtn = document.getElementById('startBtn');
const pauseBtn = document.getElementById('pauseBtn');
const resetBtn = document.getElementById('resetBtn');
const countdownDisplay = document.getElementById('countdownDisplay');
const secondsInput = document.getElementById('secondsInput');

startBtn.addEventListener('click', startCountdown);
pauseBtn.addEventListener('click', pauseCountdown);
resetBtn.addEventListener('click', resetCountdown);

function startCountdown() {
    if (isPaused) {
        // Se è in pausa, riprendi il countdown
        isPaused = false;
        countdown = setInterval(updateCountdown, 1000);
    } else {
        // Se non è in pausa, inizia un nuovo countdown
        const seconds = parseInt(secondsInput.value);
        if (isNaN(seconds) || seconds <= 0) {
            alert('Inserisci un numero valido di secondi');
            return;
        }
        timeLeft = seconds;
        countdown = setInterval(updateCountdown, 1000);
    }
}

function updateCountdown() {
    if (timeLeft > 0) {
        timeLeft--;
        displayTimeLeft(timeLeft);
    } else {
        clearInterval(countdown);
    }
}

function displayTimeLeft(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    countdownDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
}

function pauseCountdown() {
    isPaused = true;
    clearInterval(countdown);
}

function resetCountdown() {
    clearInterval(countdown);
    timeLeft = 0;
    isPaused = false;
    secondsInput.value = '';
    countdownDisplay.textContent = '00:00';
}
