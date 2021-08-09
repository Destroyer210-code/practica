const num1 = document.querySelector("#validate-text");
const num2 = document.querySelector("#validate-number");
const num3 = document.querySelector("#validate-number2");
const num4 = document.querySelector("#validate-email");
const num5 = document.querySelector("#validate-phone");

const x = document.querySelector("#x");
const calculado = document.querySelector("#calculado");

/* if (suma >= 3.5){
    calculado.textContent = suma + (" pasaste el curso");;
}else{
    calculado.textContent = suma + (" no pasaste el curso");
} */


x.addEventListener("click", promedios);
function promedios(){
    let por1 = Number(num1.value) * 0.05 ; 
    let por2 = 0.05 * Number(num2.value);
    let por3 = 0.075 * Number(num3.value);
    let por4 = 0.10 * Number(num4.value);
    let por5 = 0.225 * Number(num5.value);
    let suma = 10
suma = (por1 + por2 + por3 + por4 + por5) / 5
    if (suma >= 3.5){
        calculado.textContent = "sacaste " + suma +' pasaste el curso';
    }else{
        calculado.textContent = "sacaste " + suma + " no pasaste el curso";
    }
}
function subsNumbers() {
    calculado.textContent = ("no pasaste el curso");
}