// ---------------------------- Global Variables ------------------------------
var scoresRecorded = document.getElementById("scoresRecorded");
var userInfo = document.createElement("tr");
var userName = document.createElement("td");
var userScore = document.createElement("td");
var clearScores = document.getElementById("clearHistory");

// ---------------------------- Display Scores ---------------------------
let scores = JSON.parse(localStorage.getItem("Highscores"));
console.log(scores);

scores.sort(function(a, b) {
    return parseFloat(a.score) - parseFloat(b.score);
});

scores.forEach(function (score) {
    userName.innerHTML = score.userName;
    userScore.innerHTML = score.score;
    scoresRecorded.appendChild(userInfo);
    userInfo.append(userName, userScore);
});

// ---------------------------- Clear Scores ---------------------------

clearScores.addEventListener("click", function(){
    window.localStorage.clear("Highscores");
});