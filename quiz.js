// select all elements
const timer = document.getElementById("timer");
const timeCounter = document.getElementById("timerCounter");
const startPage = document.getElementById("start-page");
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const questions = document.getElementById("questions");
const choice = document.getElementById("choice-buttons");
const choiceA = document.getElementsByClassName("choiceA");
const choiceB = document.getElementsByClassName("choiceB");
const choiceC = document.getElementsByClassName("choiceC");
const scoreDiv = document.getElementById("score");


// create the questions object
let questions = [
    {
        question: "What does HTML stand for?",
        choiceA: "hyperlinks and Text Markup Languages",
        choiceB: "hyper Text Markup Language",
        choiceC: "Home Tool Markup Language",
        correct: "B"
    }, {
        question: "Inside which HTML element do we put the JavaScript?",
        choiceA: "script",
        choiceB: "js",
        choiceC: "javascript",
        correct: "A"
    }, {
        question: "What does CSS stand for?",
        choiceA: "Colorful Spread Sheets",
        choiceB: "Computer Style Sheets",
        choiceC: "Cascading Style Sheets",
        correct: "C"
    }, {
        question: "Which of the following is correct?",
        choiceA: "jQuery is a JSON Library",
        choiceB: "jQuery is a CSS Library",
        choiceC: "jQuery is a JavaScript Library",
        correct: "C"
    }, {
        question: "Which of the following is correct?",
        choiceA: "Bootstrap 3 is mobile first",
        choiceB: "Bootstrap is for back-end web development",
        choiceC: "Bootstrap is a HTML framework",
        correct: "A"
    }
];

// create question variables
const lastQuestionIndex = questions.length - 1;
let runningQuestionIndex = 0;
let timeCounter = 60;
const questionsTime = 10; // 10s
let timer;
let score = 0;

// render a question
function renderQuestion() {
    let q = questions[runningQuestionIndex];
    question.innerHTML = "<p>" + q.question + "</p>";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;

    if (runningQuestionIndex < lastQuestionIndex) {
        runningQuestionIndex++;
        renderQuestion();
    } else {
        // end the quiz and show the score
        clearInterval(timer);
        scoreRender();
    }
}

// start quiz
start.addEventListener("click", startQuiz)


    function startTimer() {
        console.log("timer suppose to go")

        startPage.style.display = "none";
        startQuiz.style.display = "block";
        renderQuestion();
        rendertimeCounter;
// counter render
    var timer = setInterval(function () {
        sec--;
        document.getElementById('timerCounter').innerHTML = '00:' + sec;
        if (sec < 0) {
            clearInterval(timer);
            alert("Time is up!");
        }
    }, 1000);
}
    // render time counter
    function rendertimeCounter() {
        if (runningQuestionIndex < lastQuestionIndex) {
            timeCounter.innerHTML = count;
            count--
        } 
        else (count <= questionsTime); function renderScore()

        if (runningQuestionIndex < lastQuestionIndex) {
            runningQuestionIndex++;
            renderQuestion();
        } else {
            // end the quiz and show the score
            clearInterval(timer);
            scoreRender();
            }
        }

document.getElementById("choice-buttons").addEventListener('click', function () {
    let score = 0;    
    function checkAnswer(answer) {
            if (answer == questions[runningQuestionIndex].correct){
                // answer is correct
                score++;
            }
            else {
                  // answer Is Wrong
                  // increase timeCounter by 5 sec
                  answerIsWrong();
                }
                if (runningQuestionIndex < lastQuestionIndex) {
                    runningQuestionIndex++;
                    renderQuestion();
                } else {
                    clearInterval(timerCounter);
                }
     function answerIsWrong(){
            startTimer -= 5
            .timerCounter.getElementById('timerCounter').innerHTML = '00:' + sec
            }

    }
// score render
function renderScore(){ 
    scoreDiv.style.display = "block";
    // calculate the amount of question percent answered by the user
    const scorePerCent = Math.round(100 * score/questions.length);

        var submitEl = document.querySelector("#submit");
        var nameInput = document.querySelector("#name");
        var submissionResponseEl = document.querySelector("#response");

    submitEl.addEventListener("click", function (event){
        event.preventDefault();

        console.log(event);

        var response = "Thank you for your submission " + nameInput.value + "! Your score will be recorded and compared with other classmates.";
        submissionResponseEl.textContent = response;
    }
