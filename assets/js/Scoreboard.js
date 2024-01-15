let totalScores = localStorage.getItem("totalScores");
let highScore = document.querySelector("#highScore");
let clear = document.querySelector("#clear");


totalScores = JSON.parse(totalScores);

if (totalScores !== null) {

    for (let i = 0; i < totalScores.length; i++) {

        let scoreSection = document.createElement("p");
        scoreSection.textContent = totalScores[i].name + " : " + totalScores[i].score;
        highScore.appendChild(scoreSection);

    }
}
goBack.addEventListener("click", function () {
    window.location.replace("./index.html");
});