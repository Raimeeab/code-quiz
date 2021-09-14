// ---------------------------- Global Variables ------------------------------
var highScoreEl = document.getElementById("highscore");
var quiz = document.getElementById("quiz");
var rules = document.getElementById("rules");
var begin = document.getElementById("begin");
var seconds = document.getElementById("seconds");
var timerEL = document.getElementById("timer");
var timeRemaining = 60;
var timerInterval;
var questionEl = document.getElementById("question");
var answerEl = document.getElementById("answer0");
var answerEl1 = document.getElementById("answer1");
var answerEl2 = document.getElementById("answer2");
var answerEl3 = document.getElementById("answer3");
var questions = [
    {
        question: "Inside which HTML element do we put the JavaScript?",
        answers: ["javascript","scripting","script","js"], 
        correctAnswer: 2,
    },
    {
        question: "Where is the correct place to insert a JavaScript?",
        answers: ["The <body> section","The <head> section","Both the <head> and <body> sections are correct","Anywhere works"],
        correctAnswer: 2,
    },
    {
        question: "How to write an IF statement in JavaScript?",
        answers: ["if i == 5 then","if (i == 5)","if i = 5 then","if i = 5"],
        correctAnswer: 1,
    },
    {
        question: "How does a WHILE loop start?",
        answers: ["while (i <= 10)","while (i <= 10; i++)","while i = 1 to 10","while i = 1 ++ 10"],
        correctAnswer: 0,
    },
    {
        question: "How does a FOR loop start",
        answers: ["for (i = 0; i <= 5)","for (i <= 5; i++)","for i = 1 to 5","for (i = 0; i <= 5; i++)"],
        correctAnswer: 3,
    },
    {
        question: "What is the correct way to write a JavaScript array?",
        answers: ["var colors = [\"red\", \"green\", \"blue\"]", "var colors = 1 = (\"red\"), 2 = (\"green\"), 3 = (\"blue\")", "var colors = \"red\", \"green\", \"blue\"", "var colors = (1:\"red\", 2:\"green\", 3:\"blue\")"],
        correctAnswer: 0,
    },
    {
        question: "How do you round the number 7.25, to the nearest integer?",
        answers: ["Math.rnd(7.25)","rnd(7.25)","Math.round(7.25)","round(7.25)"],
        correctAnswer: 2,
    },
    {
        question: "How do you find the number with the highest value of x and y?",
        answers: ["Math.max(x, y)","Math.ceil(x, y)","top(x, y)", "ceil(x, y)"],
        correctAnswer: 0,
    },
    {
        question: "How can you detect the client's browser name?",
        answers: ["console.log('client's broswer name');", "navigator.appName","client.navName", "browser.name"],
        correctAnswer: 1,
    },
    {
        question: "How operator is used to assign a value to a variable?",
        answers: ["=","*","==","==="],
        correctAnswer: 0,
    }
];
var rightAnswer = document.getElementById("right");
var wrongAnswer = document.getElementById("wrong");
var scoreEl = document.getElementById("finalScore");
var submitButton = document.getElementById("submit");
var currentQuestionIndex = 0;
var currentQuestion;
var score = 0;
// ---------------------------- Start Quiz ------------------------------
function startQuiz() {
    currentQuestion = questions[currentQuestionIndex];
    rules.setAttribute("class", "hidden");
    quiz.removeAttribute("class");    

    if(!currentQuestion) {
        console.log('quiz done')
        return;
    };

    newQuestion();
};

// ---------------------------- Timer Function ---------------------------
function timer() {
    timerInterval = setInterval(function() {
        timeRemaining--;
        seconds.textContent = timeRemaining;
        if (timeRemaining <= 10) {
            seconds.style.color = "#EF233C";
            seconds.style.fontSize = "50px";
        };
        if (timeRemaining <= 0) {
            timerEL.setAttribute("class", "hidden");
            endQuiz();
        };
        if (timeRemaining === 0) {
            clearInterval(timerInterval);
            endQuiz();
        }
    }, 1000);
};

// ---------------------------- Quiz Questions ---------------------------
function newQuestion () {
    currentQuestion = questions[currentQuestionIndex];
    console.log(currentQuestion);
    questionEl.textContent = currentQuestion.question;
    answerEl.textContent = currentQuestion.answers[0];
    answerEl1.textContent = currentQuestion.answers[1];
    answerEl2.textContent = currentQuestion.answers[2];
    answerEl3.textContent = currentQuestion.answers[3];
};

// ---------------------------- Answer check -------------------------
function checkAnswer(clickedAnswer) {
    var currentQuestion = questions[currentQuestionIndex];

    if (currentQuestion.correctAnswer === clickedAnswer) {
        console.log("correct answer");
        score++;
        console.log(score);
        rightAnswer.setAttribute("class", "");
        setTimeout(function() {
            rightAnswer.setAttribute("class", "hidden");
        }, 900);
        
    } else {
        console.log("wrong answer");
        timeRemaining -= 10;
        wrongAnswer.setAttribute("class", "");
        setTimeout(function() {
            wrongAnswer.setAttribute("class", "hidden");
        }, 900);
    };
    
    currentQuestionIndex++;

    if(currentQuestionIndex === questions.length) {
        console.log("working");
        endQuiz();
        return;
    } else {
        newQuestion();
    };

   newQuestion();
};

// ---------------------------- End Quiz ---------------------------
function endQuiz() {
    clearInterval(timerInterval);
    console.log("endquiz")
    allDone.removeAttribute("class");
    quiz.setAttribute("class","hidden");
    timerEL.setAttribute("class", "hidden");
    scoreEl.textContent = score;
    var passFail = document.getElementById("passFail");
    if (score < 5) {
        console.log("fail");
        passFail.insertAdjacentText('beforeend', " 😵‍💫");
    } else if (score >= 5) {
        console.log("pass")
        passFail.insertAdjacentText('beforeend', " 🏆");
    } else {
        passFail.insertAdjacentText('beforeend', "");
    };
};

// ---------------------------- Save Score ---------------------------
function saveScore(){
    var name = initials.value;
    var highScore = [];
    var currentScore = {userName: name,
    score: score};
    highScore.push(currentScore);
    window.localStorage.setItem("Highscores", JSON.stringify(highScore));
    window.location.replace("highscores.html");
    console.log(JSON.parse(localStorage.getItem(highScore)));
};

// finalScore.sort(function(a, b) {
//     return parseFloat(a.score) - parseFloat(b.score);
// });

// ---------------------------- Event Listeners ------------------------
begin.addEventListener("click", function(){
    seconds.textContent = timeRemaining;
    timer()
    startQuiz()
});

answerEl.addEventListener("click", function () {
    checkAnswer(0);
});
  
answerEl1.addEventListener("click", function () {
    checkAnswer(1);
});
  
  answerEl2.addEventListener("click", function () {
    checkAnswer(2);
});
  
  answerEl3.addEventListener("click", function () {
    checkAnswer(3);
});

submitButton.addEventListener("click", saveScore) 


// saveButton.addEventListener("click", function(event) {
//     event.preventDefault();
    
//     var studentGrade = {
//       student: student.value,
//       grade: grade.value,
//       comment: comment.value.trim()
//     };
    
//     localStorage.setItem("studentGrade", JSON.stringify(studentGrade));
//     renderMessage();
    
//     });