const timerEl = document.getElementById('countdown');
const mainEl = document.getElementById('main');

const message =
'Some say the world will end in';

function countdown() {
let timeLeft = 75;

  // TODO: Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
const timeInterval = setInterval(function () {
    timeLeft--;

        if(timeLeft === 0){
            clearInterval(timeInterval);
            timerEl.textContent = "";
        }
    }, 1000);
}
