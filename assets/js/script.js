

//! Create a function that works when the Start Quiz is clicked on via HTML document.
//! Create a timer within the function that begins to go down once Start Quiz is clicked.
//! Create questions using functions in javascript where the user can answer one at a time.
    //! Create questions using variables.
//! Once the user answers a question, create a function that brings the user to the next question.
//! Create within the function a mathmatical input that SUBTRACTS a time the user when they answer incorrectly.
//! Create a function that when the timer reaches 0, user can no longer answer questions and is 
//! redirected to a score board.
//! Create a input box that allows user to type name and retain score by keeping the data within the browser.

//! Functions needed: startQuiz, endQuiz, correctAnswer, wrongAnswer
//! Variables/Let statements for questions, clock/timer, randomQuestion (if want questions to be randomized)
    //! score, timeLimt   

// // Once user presses on Start Quiz, timer will start to countdown from 75 seconds
// function startTimer(){
//   let counter = 75;
//   setInterval(function() {
//     counter--;
//     if (counter >= 0) {
//       p = document.querySelector("#time");
//       p.innerHTML = counter;
//     }
//     // Timer will hit Zero and user will get an alert that time is up
//     if (counter === 0) {
//         alert('Times up!');
//         clearInterval(counter);
//     }
//   }, 1000);
// }

// function startQuiz(){   
//   // Button turns red when user clicks on Start Quiz
//     document.getElementById("timer").style="color:red;";
//     startTimer();
// };

// console.log(startTimer)
// console.log(startQuiz)

