function init() {
    document.getElementById("number1").value = Math.floor(Math.random() * 10) + 1;
    document.getElementById("number2").value = Math.floor(Math.random() * 10) + 1;
}
function decrease(fieldId) {
    let inputField = document.getElementById(fieldId);
    let currentValue = parseInt(inputField.value) || 0;
    inputField.value = currentValue - 1;
}

function increase(fieldId) {
    let inputField = document.getElementById(fieldId);
    let currentValue = parseInt(inputField.value) || 0;
    inputField.value = currentValue + 1;
}

function calculate() {
    let num1 = parseInt(document.getElementById("number1").value);
    let num2 = parseInt(document.getElementById("number2").value);
    let operator = document.getElementById("operator").value;
    let result;

    if (isNaN(num1) || isNaN(num2)) {
        alert("Please enter valid numbers");
        return;
    }

    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 !== 0) {
                result = num1 / num2;
            } else {
                alert("Cannot divide by zero");
                return;
            }
            break;
        default:
            alert("Invalid operator");
            return;
    }

    document.getElementById("result").innerText = "Result: " + result;
}