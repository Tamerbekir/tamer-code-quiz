
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
    question: "Out of these four players, who holds the most hits for the Mets?",
    answers: ["David Wright", "Mike Piazza", "Darryl Strawberry", "Joe Reyes"],
    correct: "David Wright",
},

{
    question: "Which Hall of Fame pitcher began his career with the New York Mets and went on to rack up over 5,000 strikeouts?",
    answers: ["Nolan Ryan", "Al Leiter", "Tom Seaver", "Tom Glavine"],
    correct: "Nolan Ryan",
},

{
    question: "The New York Mets played their first season in 1962 in which stadium?",
    answers: ["Shea Stadium", "The Polo Grounds", "Yankee Stadium", "Jets Stadium"],
    correct: "The Polo Grounds",
},

{
    question: "In 2008, the Mets acquired Johan Santana from the Minnesota Twins for 4 prospects. What outfielder did the Mets include in this trade?",
    answers: ["Justin Turner", "Ike Davis", "Carlos Gomez", "Mike Pelfrey"],
    correct: "Carlos Gomez",
},]






//global variables
let nextQuestion = 0;
let timeInterval = ""; //variable that is an empty string 
let time = 75; // variable that will give the user the total time they have to complete the entire quiz. //! Currently at 10secs for test purposes
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


let frontPage = document.createElement('button');
frontPage.textContent = 'Quit';
frontPage.setAttribute("id", "frontPage")
frontPage.addEventListener('click', function () {
    alert("Quitter!")
    window.location.replace("./index.html");
})
document.body.appendChild(frontPage);


//! Function working as intended but need to remove H2 element and apply uising javascritp
function questionAsked() {
    if (nextQuestion < questions.length) {
        let { question, answers, correct } = questions[nextQuestion];
        nextQuestion++;
        main.innerHTML = `${question}`;
        answers.forEach((answer) => {
            let answerButton = document.createElement("button");
            answerButton.setAttribute("id", "answerButton")
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
        questionAsked();
    } else {
        time -= 5;
        alert("Wrong!")
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
    main.innerHTML = ``;
    if (time === 0)
    timeRemaining.innerHTML = time; //stop clock when user finishes quiz
    clearInterval(timeInterval)

    endGameSummary()
    results()
}

let playAgainBtn = document.createElement('button');
let endMessage = document.createElement("p");

function endGameSummary() {

    endMessage.setAttribute("id", "endMessage");
    endMessage.textContent = `All done! Your final score is ${userScore}! Enter you intials below to save your score!`;
    main.appendChild(endMessage);
}


let nameLabel = document.createElement("label")
let nameInput = document.createElement("input")
let submitBtn = document.createElement("button")

function results() {

    nameLabel.setAttribute("id", "nameLabel")
    nameLabel.textContent = "Enter your name: "
    main.appendChild(nameLabel);

    nameInput.setAttribute("type", "text")
    nameInput.setAttribute("id", "nameInput")
    nameInput.textContent = ""
    main.appendChild(nameInput);

    submitBtn.setAttribute("type", "submit")
    submitBtn.setAttribute("id", "Submit")
    submitBtn.textContent = "Submit"
    main.appendChild(submitBtn);
    playAgainBtn.textContent = 'Play again?';
    playAgainBtn.setAttribute("id", "playAgainBtn")
    playAgainBtn.addEventListener('click', function () {
        window.location.replace("./index.html");
    })
    main.appendChild(playAgainBtn);



    submitBtn.addEventListener("click", function () {
        let name = nameInput.value;
        let lastScore = {
            name: name,
            score: userScore
        }
        let totalScores = localStorage.getItem("totalScores");
        if (totalScores === null) {
            totalScores = []
        } else {
            totalScores = JSON.parse(totalScores)
        }
        totalScores.push(lastScore)
        let newScore = JSON.stringify(totalScores)
        localStorage.setItem("totalScores", newScore)
        window.location.replace("scores.html")
    })
}

