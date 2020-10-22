// Set variables
let submitButton = document.querySelector(".submitButton")
let initials = inputInitials.value
let yourScore = document.querySelector(".yourScore")
let score = localStorage.getItem("score")
let highScore = localStorage.getItem("highScore")
let listScores = document.querySelector(".listScores")
let highScores = JSON.parse(localStorage.getItem("scoresArr")) || [];

//High Score list pops up on screen on loading
for (var i = 0; i<highScores.length; i++ ) {
    let list = document.createElement("li")
    listScores.appendChild(list)
    list.textContent = highScores[i]   
}

//Submit initials to High Scores list with most recently earned score
submitButton.addEventListener("click", function(event){

    event.preventDefault()
    let list = document.createElement("li")  
    let initials = inputInitials.value
    console.log(initials)
    listScores.appendChild(list)
    let savedEntry = initials + " : " + score  
    highScores.push(savedEntry)
    console.log(highScores)
    list.textContent = highScores[i]   
    localStorage.setItem("scoresArr", JSON.stringify(highScores))
   
})

//Pull most recent score from quiz for Navbar.
yourScore.textContent = "Your score = " + score
