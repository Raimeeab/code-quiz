// ---------------------------- Global Variables ------------------------------
var scoresRecorded = document.getElementById("scoresRecorded");
var clearScores = document.getElementById("clearHistory");


// ---------------------------- Save Score ---------------------------
// retrive again from local storage var highscore
// sort highscores array
// highScores.forEach(function(score){
    //create li tag for each store. text content 
    // append that to the ul element 
// }) 

JSON.parse(localStorage.getItem("Highscores"));
