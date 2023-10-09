function calculate(){
    const inputA = parseFloat(document.getElementById('inputA').value);
    const inputB = parseFloat(document.getElementById('inputB').value);
    const operation = document.getElementById('operation').value;
    
    
    let result;
    

    switch (operation) {
        case 'add':
            result = inputA + inputB;
            break;
        case 'subtract':
            result = inputA - inputB;
            break;
        case 'multiply':
            result = inputA * inputB;
            break;
        case 'divide':
            if (inputB === 0) {
                result = "Cannot divide by zero";
            } else {
                result = inputA / inputB;
            }
            break;
        default:
            result = "Invalid operation";
    }

    document.getElementById('result').textContent = `Result: ${result}`;
}
