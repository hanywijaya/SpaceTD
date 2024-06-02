function change(x){
    x.classList.toggle("change");

    const words = document.getElementsByClassName('words')
    
    words[0].classList.toggle("active")
    words[1].classList.toggle("active")
    words[2].classList.toggle("active")
    words[3].classList.toggle("active")

    const header = document.getElementsByClassName('header')[0]
    header.classList.toggle("active")
}

var card1 = document.getElementById("card1");
var card2 = document.getElementById("card2");
    // card3: document.getElementByClassName(".card3")
    // card4: document.getElementByClassName(".card4")

function on(card){
    card.className += " active";
}

function off(card){
    card.className= card.className.replace("active", "");
}