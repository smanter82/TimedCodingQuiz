let inputInitials = document.getElementById("inputInitials")
let submitButton = document.querySelector(".submitButton")
let initials = inputInitials.textContent
let yourScore = document.querySelector(".yourScore")
let score = localStorage.getItem("score")

submitButton.addEventListener("click", function(event){
    event.preventDefault
    console.log(initials)
})


yourScore.textContent = "Your score = " + score

