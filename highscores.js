let inputInitials = document.getElementById("inputInitials")
let submitButton = document.querySelector(".submitButton")
let initials = inputInitials.textContent


submitButton.addEventListener("click", function(event){
    event.preventDefault
    console.log(initials)
})


