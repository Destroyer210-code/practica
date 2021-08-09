const number1 = document.querySelector('#btn-number1');
const number2 = document.querySelector('#btn-number2');
const btnSum = document.querySelector('#btn-sum'); 
const btnSubstrac = document.querySelector('#btn-substrac'); 
const btnMultiply = document.querySelector('#btn-multiply'); 
const btnDivision = document.querySelector('#btn-division'); 
const result = document.querySelector('#p-result');

btnSum.addEventListener('click',sumNumbers);

function sumNumbers() {
    let resultNumbers = 0;
    let num1 = Number(number1.value);
    let num2 = Number(number2.value);
    resultNumbers = num1 + num2;
    result.textContent = resultNumbers;
}

btnSubstrac.addEventListener('click',subsNumbers);

function subsNumbers() {
    let resultNumbers = 0;
    let num1 = Number(number1.value);
    let num2 = Number(number2.value);
    resultNumbers = num1 - num2;
    result.textContent = resultNumbers;
}
btnMultiply.addEventListener('click',MultNumbers);

function MultNumbers() {
    let resultNumbers = 0;
    let num1 = Number(number1.value);
    let num2 = Number(number2.value);
    resultNumbers = num1 * num2;
    result.textContent = resultNumbers;
}

btnDivision.addEventListener('click',DivNumbers);

function DivNumbers() {
    if (number1.value == 0 || number2.value == 0){
        result.textContent = 'no se puede dividir por cero'
    } else{
        let resultNumbers = 0;
        let num1 = Number(number1.value);
        let num2 = Number(number2.value);
        resultNumbers = num1 / num2;
        result.textContent = resultNumbers;
    } 
}