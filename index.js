let btn = document.querySelector(".startButton")
let quiz = document.querySelector(".quizCard")
let timer = 60
let counter = document.querySelector(".countDown")

let questions = [
//questions and answers taken from sample quiz in assignment's Read Me file
{
    question1: "Commonly used data types do NOT include",
        choices: ["strings", "booleans", "alerts", "numbers"],
        correct:  "alerts"
},
{
    question2: "String values must be enclosed within _____ when being assigned to variables",
        choices: ["commas", "curly brackets", "quotes", "parentheses"],
        correct:  "parentheses"
},
{
    question3: "The condition in an if/else statement is enclosed within ____.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        correct:  "parentheses"
}]

function startQuiz() {
    var x = document.querySelector(".beginQuiz");
    
    x.style.display = "none"
    quiz.style.display = "block"
    //   console.log(questions[0].choices[1])
    countDown()  
    //call new function (question/answer)  
}

function countDown () {
    
    const myTimer = setInterval(function() {
        counter.textContent = timer + " seconds left!"
        timer--
        console.log(timer)
        if (timer === 0) {
        clearInterval(myTimer);
        timer.innerHTML = "EXPIRED";}
    }, 1000);
    
    
}

//new function (question/answer)
