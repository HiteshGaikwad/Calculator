let currentInput = '';
let number1=0;
let number2=0;
let operator = '';
let result = 0;

//function call to perform after clicking event on buttons
function appendToDisplay(value) {

    //apending all values typed to currentValue
    currentInput += value;

    //if any operation button is being clicked, stored in operation variable
    if(value==='+' || value==='-' || value==='/' || value==='X'){
    operator+=value;
    }

    //displaying the typed input to the user
    document.getElementById('result').value = currentInput;

    //spliting the string at opeation sign
    let num=currentInput.split(/[-,+,/,X]/);

    //seperating both operands
    number1=parseFloat(num[0]);
    number2=parseFloat(num[1]);
}

//function to clear the input display by setting variables as default
function clearDisplay() {
    currentInput = '';
    document.getElementById('result').value = '';
    result = 0;
    operator = '';
}


//performing operations depending on the operator
function calculateResult() {
            switch (operator) {
                case '+':
                    result =number1 + number2;
                    break;
                case '-':
                    result = number1 - number2;
                    break;
                case 'X':
                    result = number1*number2;
                    break;
                case '/':
                    if(number2===0) {
                        alert("Cannot divide by zero");
                        clearDisplay();
                        return;
                    } else {
                        result =number1/number2;
                    }
                    break;
        }
    if(isNaN(result)){
        alert("Not a number, Please enter valid number.");
        clearDisplay();
        return;
    }
    else{
    //if got a valid result then displaying to user
    document.getElementById('result').value = result;
    }
    currentInput = '';
    operator = '';
    result=0;
}

//clearing the display at the loading of the web page
document.addEventListener('DOMContentLoaded', function () {
    clearDisplay();
});
