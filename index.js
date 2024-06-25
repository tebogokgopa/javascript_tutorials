

function changeStuff() {
    var mainDisplay = document.getElementById("main");
    var spanDisplay = document.getElementById("score");
    var submitDisplay = document.getElementById("btn");
    let paraDisplay = document.getElementById("para");
    let bodyDisplay = document.getElementById("body");

    mainDisplay.style.backgroundColor = "Purple";
    bodyDisplay.style.backgroundColor = "Yellow";
    spanDisplay.style.fontSize = "14px";
    spanDisplay.innerHTML = 14;
    submitDisplay.value  = "Clicked";
    paraDisplay.innerText = "Button was clicked";
    console.log("We are her");
    paraDisplay.style.display = "none";
}

function sendData() {
    
}
var numberDisplay = document.getElementById("num_input");
var operator;
var num1,num2, result;
function showNumber(button_value){
    numberDisplay.value += button_value;
}

function get_operator(button_value) {
    num1 = numberDisplay.value;
    operator = button_value;
    numberDisplay.value = "";
}


function calculate_resul() {
    num2 = numberDisplay.value;
    if (operator === '+') {
        result = parseFloat(num1) + parseFloat(num2);
    }
    if (operator === 'x') {
        result = num1 * num2;
    }
    if (operator === '/') {
        result = num1 / num2;
    }
    if (operator === '-') {
        result = num1 - num2;
    }
    numberDisplay.value = result;
}
function clearScreen(){
    let numberDisplay = document.getElementById("num_input");
    numberDisplay.value = "";
}HT