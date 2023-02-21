let minutes = 0;
let seconds = 0;
let centiseconds = 0;

let timerInterval = null;
let isTimerRunning = false;

const startTimer = () => {
  if (isTimerRunning) {
    return;
  }

  isTimerRunning = true;

  timerInterval = setInterval(() => {
    centiseconds += 1;

    if (centiseconds >= 100) {
      centiseconds = 0;
      seconds += 1;
    }
    if (seconds >= 60) {
      seconds = 0;
      minutes += 1;
    }
    displayTime();
  }, 10);
};

const stopTimer = () => {
  clearInterval(timerInterval);
  isTimerRunning = false;
};

const resetTimer = () => {
  minutes = 0;
  seconds = 0;
  centiseconds = 0;
  stopTimer();
  displayTime();
};

const displayTime = () => {
  const minutesDisplay = ("0" + minutes).slice(-2);
  const secondsDisplay = ("0" + seconds).slice(-2);
  const centisecondsDisplay = ("0" + centiseconds).slice(-2);

  document.getElementById("minutes").textContent = minutesDisplay;
  document.getElementById("seconds").textContent = secondsDisplay;
  document.getElementById("centiseconds").textContent = centisecondsDisplay;
};

document.getElementById("start-button").addEventListener("click", startTimer);
document.getElementById("stop-button").addEventListener("click", stopTimer);
document.getElementById("reset-button").addEventListener("click", resetTimer);