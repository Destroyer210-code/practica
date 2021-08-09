const color = document.querySelector("#color-card");
const button1 = document.querySelector("#change-color");
const button2 = document.querySelector("#btn-reduce");
const button3 = document.querySelector("#btn-add");
const headers = document.querySelector("#header-card");
const mycv = document.querySelector("#my-cv");
const carpeta = document.querySelector("#fas");
const card = document.querySelector("#card");

button1.addEventListener("click", cambiarcolor);

function cambiarcolor(){
    headers.style.background = color.value;
    mycv.style.background = color.value;
    carpeta.style.color = color.value;
}

button2.addEventListener("click", restar); 

function restar(){
    card.style.borderRadius = `${borde}px ${borde}px ${borde}px`;
    headers.style.borderRadius = `${borde}px ${borde}px ${borde}px`;
    --borde
}

button3.addEventListener("click", sumar); 

var borde = 10

function sumar(){
    card.style.borderRadius = `${borde}px ${borde}px ${borde}px`;
    headers.style.borderRadius = `${borde}px ${borde}px ${borde}px`;
    ++borde
}

