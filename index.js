let btn = document.querySelector(".startButton")
let quiz = document.querySelector(".quizCard")
let quest = document.querySelector("#quest")
let timer = 60
let counter = document.querySelector(".countDown")
// let choiceBtns = document.querySelector(".choiceBtns")
// let answerA = document.querySelector("#answerA")
// let answerB = document.querySelector("#answerB")
// let answerC = document.querySelector("#answerC")
// let answerD = document.querySelector("#answerD")


let questions = [
//questions and answers taken from sample quiz in assignment's Read Me file
{
    question1: "Commonly used data types do NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        correct:  "alerts"
},
{
    question2: "String values must be enclosed within _____ when being assigned to variables:",
        choices: ["commas", "curly brackets", "quotes", "parentheses"],
        correct:  "parentheses"
},
{
    question3: "The condition in an if/else statement is enclosed within ____.:",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        correct:  "parentheses"
}]
function question1(){
    quiz.textContent = questions[0].question1 
    for(let i = 0; i <questions[0].choices.length; i++){
    console.log(questions[0].choices[i]) 
    let btn = document.createElement("BUTTON");
    btn.innerHTML = questions[0].choices[i];   
    quiz.appendChild(btn)
    }
}

function question2(){
    quiz.textContent = questions[0].question2 
    for(let i = 0; i <questions[1].choices.length; i++){
    console.log(questions[1].choices[i]) 
    let btn = document.createElement("BUTTON");
    btn.innerHTML = questions[1].choices[i];   
    quiz.appendChild(btn)
    }
}
function startQuiz() {
    var x = document.querySelector(".beginQuiz");
    x.style.display = "none"
    quiz.style.display = "block"

    question1()
    // if (question1() === questions[0].question1[1]) {
    //     console.log("Correct")s
    // }
    countDown()  
}

function countDown () {
    
    const myTimer = setInterval(function() {
          //Fix this so that it pops up with expired
        counter.textContent = timer + " seconds left!"
        if (timer === 0) {
            clearInterval(myTimer);
            counter.textContent = "EXPIRED";}
        timer--
        console.log(timer)
    }, 1000);
    
    
}

