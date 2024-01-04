// Selects element by class
const timeEl = document.querySelector(".timer");

// Selects element by id
const mainEl = document.getElementById("p");

let secondsLeft = 10;

function setTime() {
  // Sets interval in variable
  const timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = (`Time remaining ${secondsLeft}`);
    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      alert("Times up!");
    }

  }, 1000);
}

setTime();
