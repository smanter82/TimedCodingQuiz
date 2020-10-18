//set variables
let btn = document.querySelector(".startButton")
let quiz = document.querySelector(".quizCard")
let quest = document.querySelector("#quest")
let timer = 60
let counter = document.querySelector(".countDown")
let checkAnswer = document.querySelector("#checkAnswer")
let quizAnswerCard = document.querySelector(".quizAnswerCard")


//set questions array
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
//set question functions
function question1(){
    quiz.textContent = questions[0].question1 
    for(let i = 0; i <questions[0].choices.length; i++){
    let answerBtn = document.createElement("BUTTON");
    let checkAnswer = document.createElement("p")
    answerBtn.innerHTML = questions[0].choices[i];   
    quizAnswerCard.appendChild(answerBtn)
    answerBtn.addEventListener("click", function(event) {
        if (this.textContent === questions[0].correct) {
            quiz.appendChild(checkAnswer)
            checkAnswer.textContent = "Correct"
            quizAnswerCard.textContent = " "
            setTimeout(function(){ question2()}, 1000)
        } else {
            quiz.appendChild(checkAnswer)        
            checkAnswer.textContent = "Wrong"
            timer -= 10 
            quizAnswerCard.textContent = " "
            setTimeout(function(){question2()}, 1000)
        }
    
    })
    
    }
}

function question2(){
    quiz.textContent = questions[1].question2 
    for(let i = 0; i <questions[1].choices.length; i++){
    let answerBtn = document.createElement("BUTTON");
    let checkAnswer = document.createElement("p")
    answerBtn.innerHTML = questions[1].choices[i];   
    quizAnswerCard.appendChild(answerBtn)
    answerBtn.addEventListener("click", function(event) {
        if (this.textContent === questions[1].correct) {
            quiz.appendChild(checkAnswer)
            checkAnswer.textContent = "Correct"
            quizAnswerCard.textContent = " "
            setTimeout(function(){question3()}, 1000)
        } else {
            quiz.appendChild(checkAnswer)        
            checkAnswer.textContent = "Wrong"
            quizAnswerCard.textContent = " "
            setTimeout(function(){question3()}, 1000) 
        }
    
    })
    }
}

function question3(){
    quiz.textContent = questions[2].question3 
    for(let i = 0; i <questions[2].choices.length; i++){
    let answerBtn = document.createElement("BUTTON");
    let checkAnswer = document.createElement("p")
    answerBtn.innerHTML = questions[2].choices[i];   
    quizAnswerCard.appendChild(answerBtn)
    answerBtn.addEventListener("click", function(event) {
        if (this.textContent === questions[2].correct) {
            quiz.appendChild(checkAnswer)
            checkAnswer.textContent = "Correct"
            quizAnswerCard.textContent = " "
            setTimeout(function(){endQuiz()}, 1000)
        } else {
            quiz.appendChild(checkAnswer)        
            checkAnswer.textContent = "Wrong" 
            quizAnswerCard.textContent = " "
            setTimeout(function(){endQuiz()}, 1000)
        }
    
    
    })
    }
}

function endQuiz () {
    quiz.textContent = "Quiz Finished"
}

function startQuiz() {
    var x = document.querySelector(".beginQuiz");
    x.style.display = "none"
    quiz.style.display = "block"
    checkAnswer.style.display = "block"

    question1()
    countDown()  
}

//Set game timer
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

