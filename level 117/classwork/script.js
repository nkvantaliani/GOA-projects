class Calculator {
        static add(a, b) {
            return a + b;
        }

        static subtract(a, b) {
            return a - b;
        }

        static multiply(a, b) {
            return a * b;
        }

        static divide(a, b) {
            if (b === 0) {
                return "cant divide by 0";
            }
            return a / b;
        }
    }

    function calculate(operation) {
        const num1 = parseFloat(document.getElementById('num1').value);
        const num2 = parseFloat(document.getElementById('num2').value);
        let result;
        
        if (isNaN(num1) || isNaN(num2)) {
            result = "enter numbers";
        } else {
            if (operation === '+') {
                result = Calculator.add(num1, num2);
            } else if (operation === '-') {
                result = Calculator.subtract(num1, num2);
            } else if (operation === '*') {
                result = Calculator.multiply(num1, num2);
            } else if (operation === '/') {
                result = Calculator.divide(num1, num2);
            }
        }
        document.getElementById('result').innerText = "answer " + result;
    }