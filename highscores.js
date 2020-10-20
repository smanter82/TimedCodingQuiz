let inputInitials = document.getElementById("inputInitials")
let yourScore = document.querySelector(".yourScore")
let score = localStorage.getItem("score")
let highScore = localStorage.getItem("highScore")
let submitButton = document.querySelector(".submitButton")
let listScores = document.querySelector(".listScores")
let list = document.createElement("li")
const highScores = JSON.parse(localStorage.getItem("scoresArr")) || [];

submitButton.addEventListener("click", function(event){
    let initials = inputInitials.value
    listScores.appendChild(list)
    let savedEntry = initials + " : " + score
    highScores.push(savedEntry)
    console.log(highScores)
    list.textContent = highScores
})

yourScore.textContent = "Your score = " + score


