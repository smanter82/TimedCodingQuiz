//set variables
let startBtn = document.querySelector(".startButton")
let quiz = document.querySelector(".quizCard")
let quest = document.querySelector("#quest")
let timer = 60
let counter = document.querySelector(".countDown")
let yourScore = document.querySelector(".yourScore")
let checkAnswer = document.querySelector("#checkAnswer")
let quizAnswerCard = document.querySelector(".quizAnswerCard")
let highScoresName = document.querySelector(".highScoresName")
let score = 0
let inputBtn = document.querySelector(".hsPage")
yourScore.textContent = "Your score = " + score

//set questions array
let questions = [
//questions and answers taken from sample quiz in assignment's Read Me file
{
    question1: "Commonly used data types do NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        correct:  "alerts"
},
{
    question2: "Arrays in JavaScript can be used to store:",
        choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        correct:  "all of the above"
},
{
    question3: "The condition in an if/else statement is enclosed within ____.:",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        correct:  "parentheses"
}]

//Only show directions and start button on loading site
highScoresName.style.display = "none"

//begin quiz
function startQuiz() {
    var directions = document.querySelector(".beginQuiz");
    directions.style.display = "none"
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
            counter.textContent = "Game Over";}
        timer--
        console.log(timer)
    }, 1000);
    
    
}
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
            score += 5
            yourScore.textContent = "Your score = " + score
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
            score += 5
            yourScore.textContent = "Your score = " + score
            console.log(score)
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
            score +=5
            yourScore.textContent = "Your score = " + score
            console.log(score)
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

//End quiz, and go to high scores.
function endQuiz () {
    timer = 0
    quiz.textContent = "Quiz Finished!"
    highScoresName.style.display = "block"
    localStorage.setItem("score", score)
}

inputBtn.addEventListener ("click", function(){
    console.log("hello")
    window.location.href = "./highscores.html"
})
