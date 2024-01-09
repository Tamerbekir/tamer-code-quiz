
//! add ✅ when compeleted task 

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

// console.log(startTimer)
// console.log(startQuiz)


//these will be the questions asked in the quiz
let questions = [{
  question: "Who is the Mets all time hitter?",
  answers: ["David Wright", "Mike Piazza", "Darryl Strawberry", "Joe Reyes"],
  correct: "David Wright",
},

{
  question: "This is a test",
  answers: ["Test", "Test1", "Test2", "Test3"],
  correct: "Test1",
}]
;

//global variables
let nextQuestion = 0;
let timeInterval = ""; //variable that is an empty string 
let time = 10; // variable that will give the user the total time they have to complete the entire quiz
let userScore = 10; //this will be when the user gets the answer right, they will get 10 points per correct answer 
let finalScore = ""; // empty string that will hold the final score at the end of the quiz
let clock = document.querySelector("#time"); // variable that will use the id=timeleft element from the main page
let prompt = document.querySelector("main"); // variable prompt that that will bring the user to the questions on the MAIN page on the HTML 
let enterName = document.createElement("INPUT"); //input element created for the user to enter intials

//when the user clicks om start quiz, timer will start and quiz will start via functions
document.querySelector("#start").addEventListener("click", buttonClick); 

function buttonClick() {
timeInterval = setInterval(timeLeft, 1000);
document.querySelector("#time").style="color:red;"; //Time Left Text and timer will go red once StartQuiz is clicked
document.querySelector("#timeleft").style="color:red;";
questionAsked();
}

function questionAsked() {
// using a for loop- if 0 < question length, let user see question, answer and correct answer. Once clicked, generated question will come next
// A new element for the user be created for each answer the user clicks
// When the user clicks a answer, the answer will be correct, otherwise user will be informed incorrect ( WILL fix did not add yet)
//! Will fix, no questions are currently being popped up
let nextQuestion = [i]
let question = questions[nextQuestion]
let answers = questions[nextQuestion]
let correct = questions[nextQuestion]
for (let i = 0; 0 < questions.length; i++){

  prompt.innerHTML = `<h2>${question}</h2>`;
  answers.forEach((answer) => {
    let answerButton = document.createElement("button");
    answerButton.innerText = answer;
    prompt.appendChild(answerButton);
    answerButton.addEventListener("click", () => {
      answerPicked(answer, correct);
    });
  });
}
}