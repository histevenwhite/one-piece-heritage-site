const characters = document.querySelectorAll(".character")

function revealCharacters(){

const triggerBottom = window.innerHeight * 0.8

characters.forEach(character => {

const boxTop = character.getBoundingClientRect().top

if(boxTop < triggerBottom){

character.classList.add("show")

}

})

}

window.addEventListener("scroll", revealCharacters)
