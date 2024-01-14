
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
//! Variables/Let statements for questions, timeRemaining/timer, randomQuestion (if want questions to be randomized)
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
let time = 10; // variable that will give the user the total time they have to complete the entire quiz. //! Currently at 10secs for test purposes
let userScore = 0; //left variable at 0, and instead added +(points) in function when user selects correct answer
let finalScore = ""; // empty string that will hold the final score at the end of the quiz
let randomQuestion = questions.sort(() => Math.random() - 0.5);



let timeRemaining = document.querySelector("#time"); // variable that will use the id=timeleft element from the main page
let main = document.querySelector(".main"); // variable prompt that that will bring the user to the questions on the MAIN page on the HTML 
let enterName = document.createElement("input"); //input element created for the user to enter intials. //! Not working yet

//when the user clicks om start quiz, timer will start and quiz will start via functions
document.querySelector("#start").addEventListener("click", buttonClick);

function buttonClick() {
    timeInterval = setInterval(timeLeft, 1000);
    document.querySelector("#time").style = "color:red;"; //Time Left Text and timer will go red once StartQuiz is clicked
    document.querySelector("#timeleft").style = "color:red;";
    questionAsked();
}

let questionTitles = document.createElement("p")

//! Function working as intended but need to remove H2 element and apply uising javascritp
function questionAsked() {
    if (nextQuestion < questions.length) {
        let { question, answers, correct } = questions[nextQuestion];
        nextQuestion++;
        main.innerHTML = `<h2>${question}</h2>`;
        answers.forEach((answer) => {
            let answerButton = document.createElement("button");
            answerButton.innerText = answer;
            main.appendChild(answerButton);
            answerButton.addEventListener("click", () => {
                answerPicked(answer, correct, userScore);
            });
        });
    } else {
        endQuiz();
    }
}


//! When hitting correct answer, text does not leave page and continues to next page
function answerPicked(answer, correct) {
    if (answer === correct) {
        userScore += 10;
        alert("Correct")
        // let correctPpt = document.createElement("p")
        // correctPpt.textContent = `Correct!`
        // document.body.appendChild(correctPpt);
        // setTimeout(() => {questionAsked()}, 2000);
        questionAsked();
    } else {
        alert("Wrong!")
        // let incorrectPpt = document.createElement("p")
        // incorrectPpt.textContent = `Wrong!!`
        // document.body.appendChild(incorrectPpt);
        // setTimeout(() => {questionAsked()}, 2000);
        time -= 5;
        questionAsked();
    }
}


function timeLeft() {
    time--;
    time > 0 ? (timeRemaining.innerHTML = time) :
        endQuiz();
}

let answerSummary = document.createElement("p")


function endQuiz() {
    main.innerHTML = ` `;
    if (time === 0)
    timeRemaining.innerHTML = time; //stop clock when user finishes quiz
    clearInterval(timeInterval)

endGameSummary()
    initials()
}

let playAgainBtn = document.createElement('button');
let endMessage = document.createElement("p");

function endGameSummary(){

    playAgainBtn.textContent = 'Play again?';
    playAgainBtn.addEventListener('click', function () {
        window.open("index.html");
    })
    main.appendChild(playAgainBtn);
    
    endMessage.setAttribute("id", "endMessage");
    endMessage.textContent = `All done! Your final score is: ${userScore}! Enter you intials below to save your score!`;
    
    main.appendChild(endMessage);
}
    

function initials() {

    let createLabel = document.createElement("label");
    createLabel.setAttribute("id", "createLabel");
    createLabel.textContent = "Enter your initials: ";

    main.appendChild(createLabel);


    let createInput = document.createElement("input");
    createInput.setAttribute("type", "text");
    createInput.setAttribute("id", "initials");
    createInput.textContent = "";

    main.appendChild(createInput);


    let createSubmit = document.createElement("button");
    createSubmit.setAttribute("type", "submit");
    createSubmit.setAttribute("id", "Submit");
    createSubmit.textContent = "Submit";

    main.appendChild(createSubmit);

}

// const emailInput = document.querySelector("#email");
// const signUpButton = document.querySelector("#sign-up");


// renderLastRegistered();


// function registerScore() {
//   const email = localStorage.getItem("email");
//   const password = localStorage.getItem("password");

  
//   userEmailSpan.textContent = email;
//   userPasswordSpan.textContent = password;
// }

// signUpButton.addEventListener("click", function (e) {
//   e.preventDefault();

//   const email = emailInput.value;


//     localStorage.setItem("email", email);
//     renderLastRegistered();
//   }





