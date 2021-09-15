// ---------------------------- Global Variables ------------------------------
var scoresRecorded = document.getElementById("scoresRecorded");
var clearScores = document.getElementById("clearHistory");

// ---------------------------- Display Scores ---------------------------
let scores = JSON.parse(localStorage.getItem("Highscores"));


scores.forEach(function (score) {
    var userInfo = document.createElement("tr");
    var userName = document.createElement("td");
    var userScore = document.createElement("td");
    userName.innerHTML = score.userName;
    userScore.innerHTML = score.score;
    scoresRecorded.appendChild(userInfo);
    userInfo.append(userName, userScore);
});

// ---------------------------- Sort Scores ---------------------------
scores.sort(function(a, b) {
    return(parseFloat(a.score) - parseFloat(b.score));
});


// ---------------------------- Clear Scores ---------------------------

clearScores.addEventListener("click", function(){
    window.localStorage.clear("Highscores");
    userInfo.remove(userName, userScore);
});
