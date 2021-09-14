// ---------------------------- Global Variables ------------------------------
var scoresRecorded = document.getElementById("scoresRecorded");
var clearScores = document.getElementById("clearHistory");

var liEL = document.createElement("li");

// ---------------------------- Save Score ---------------------------
// retrive again from local storage var highscore
// sort highscores array
// highScores.forEach(function(score){
    //create li tag for each store. text content 
    // append that to the ul element 
    // First, you create the element, then 
    // you add the attributes or the text to the element. 
    // finally you append that element to the page
    // }) 
    
let scores = JSON.parse(localStorage.getItem("Highscores"));
console.log(scores);
liEl.innerHTML = scores;
scoresRecorded.appendChild(liEl);
// console.log(scoresRecorded.appendChild(liEl));