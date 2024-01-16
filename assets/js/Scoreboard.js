//created variables to retreive scores after it was put in local stoage and take IDs from scoresHTML for buttons to work
let totalScores = localStorage.getItem("totalScores");
let highScore = document.querySelector("#highScore");
let clear = document.querySelector("#clear");

clear.addEventListener("click", function () {
    localStorage.clear();
    location.reload();
});
//user has the ability to go back to the main page 
goBack.addEventListener("click", function () {
    window.location.replace("./index.html");
});
//all scores parsed here
totalScores = JSON.parse(totalScores);

if (totalScores !== null) {
//created loop for every time a score is parsed it is placed on to the scorebaord page
    for (let i = 0; i < totalScores.length; i++) {

        let scoreSection = document.createElement("li");
        scoreSection.textContent = totalScores[i].name + " : " + totalScores[i].score;
        highScore.appendChild(scoreSection);

    }
}
