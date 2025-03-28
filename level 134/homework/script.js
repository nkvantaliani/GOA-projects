import { add } from './add.js';
import { subtract } from './subtract.js';
import { multiply } from './multiply.js';
import { divide } from './divide.js';

const operations = {
    add,
    subtract,
    multiply,
    divide
};

document.getElementById('calculate').addEventListener('click', () => {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operation = document.getElementById('operation').value;
    const result = operations[operation] ? operations[operation](num1, num2) : 'Invalid operation';
    
    document.getElementById('result').textContent = `Result: ${result}`;
});
