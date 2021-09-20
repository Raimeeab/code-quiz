// ---------------------------- Global Variables ------------------------------
var scoresRecorded = document.getElementById("scoresRecorded");
var clearScores = document.getElementById("clearHistory");

// ---------------------------- Retrieve values from localStorage --------------
let scores = JSON.parse(localStorage.getItem("Highscores"));

if(scores) {
  // sort the scores
  scores.sort(function(a, b) {
    return(parseInt(b.score) - parseInt(a.score));
  });

  //displays higscores in vp
  scores.forEach(function (score) {
    var userInfo = document.createElement("tr");
    var userName = document.createElement("td");
    var userScore = document.createElement("td");
    userName.innerHTML = score.userName;
    userScore.innerHTML = score.score;
    scoresRecorded.appendChild(userInfo);
    userInfo.append(userName, userScore);
  
    //clears data from localStorage and vp
    clearScores.addEventListener("click", function(){
        window.localStorage.clear("Highscores");
        userInfo.remove(userName, userScore);
    });
  });
}

