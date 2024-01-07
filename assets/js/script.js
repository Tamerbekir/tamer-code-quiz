// // Selects element by class
// const timeEl = document.querySelector(".timer");
// const mainEl = document.getElementById("p");

// let secondsLeft = 75;

// function setTime() {
//   const timerInterval = setInterval(function () {
//   // Sets interval in variable
//     timeEl.textContent = (`Time remaining ${secondsLeft}`);
//     if (secondsLeft === 0) {
//       clearInterval(timerInterval);
//       alert("Times up!");
//     }

//   },1000);
// }
// setTime();


// let startquiz = document.querySelector(".startquiz");
// let main = document.querySelector(".main");

// startquiz.addEventListener("click", function() {
//   secondsLeft--;
// });


function startTimer(){
  let counter = 75;
  setInterval(function() {
    counter--;
    if (counter >= 0) {
      p = document.getElementById("count");
      p.innerHTML = counter;
    }
    if (counter === 0) {
        alert('Times up!');
        clearInterval(counter);
    }
  }, 1000);
}
function start()
{
    document.getElementById("count").style="color:red;";
    startTimer();
};







//! Trying a different way using QUESTIONS in script instead of HTML
function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

	function showQuestions(questions, quizContainer){
		// code will go here
	}

	function showResults(questions, quizContainer, resultsContainer){
		// code will go here
	}

	// show the questions
	showQuestions(questions, quizContainer);

	// when user clicks submit, show results
	submitButton.onclick = function(){
		showResults(questions, quizContainer, resultsContainer);
	}
}


let questions = (
	{
		question: "Who is the Mets all time hitter?",
		answers: {
			a: 'Jose Reyes',
			b: 'David Wright',
			c: 'Mike Piazza',
			d: 'Darryl Strawberry'
		},
		correctAnswer: 'b'
	},
	{
		question: "What is my name?",
		answers: {
			a: 'Adam',
			b: 'Bob',
			c: 'Tamer',
      d: 'Mustafa'

		},
		correctAnswer: 'c'
	}
);



