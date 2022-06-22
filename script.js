const buttons = document.querySelectorAll('button');
const number = document.querySelectorAll('.number');
const display = document.querySelector('.display');
const ac = document.querySelector('#ac')
const del = document.querySelector('#del')


function add(first, second){
    return first + second;
}
function subtract(first, second){
    return first - second;
}
function multiply(first, second){
    return first * second;
}
function divide(first, second){
    return first / second;
}
function operate(operator, firstNum, secondNum){
    switch(operator){
        case '+':
            return add(firstNum, secondNum);
        case '-':
            return subtract(firstNum, secondNum);
        case '*':
            return multiply(firstNum, secondNum);
        case '/':
            return divide(firstNum, secondNum);
    }
}

let stored = '';
let firstNum = '';
let operand = '';

function getNumber(key){
    firstNum = firstNum + key;
}
buttons.forEach(button => {
    button.addEventListener('click', () => {
        if(button == ac){
            stored = '';
            firstNum = '';
            operand = '';
        }
        if(button == del){
            if(firstNum.length > 1){
            firstNum = firstNum.slice(0, -1);
            } else {
                firstNum = '';
            }
        }
        if(button.classList.contains('number')){
            getNumber(button.textContent);
        }
        if(!button.className && button !== del && button !== ac){
            if(button.textContent == '='){
                firstNum = operate(operand, Number(stored), Number(firstNum));
                firstNum = firstNum.toString();
                stored = firstNum;
                operand = '';
            } else if(operand == ''){
                operand = button.textContent;
                stored = firstNum;
                firstNum = '';
            } else if (operand !== ''){
                firstNum = operate(operand, Number(stored), Number(firstNum));
                operand = button.textContent;
                firstNum = firstNum.toString();
                stored = firstNum;
                firstNum = '';
            }
        }
        if(firstNum == ''){
            display.textContent = stored;
        } else {
            display.textContent = firstNum;
        }
        console.log(firstNum, '#', stored, '#', operand);
    })
})