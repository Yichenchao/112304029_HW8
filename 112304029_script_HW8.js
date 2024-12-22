function getInputs() {
            const num1 = parseFloat(document.getElementById('num1').value);
            const num2 = parseFloat(document.getElementById('num2').value);
            const operation = document.getElementById('operation').value;
            return { num1, num2, operation };
        }

        function add(a, b) {
            return a + b;
        }

        function subtract(a, b) {
            return a - b;
        }

        function multiply(a, b) {
            return a * b;
        }

        function divide(a, b) {
            if (b === 0) {
                alert("Error: Division by zero is not allowed!");
                return null;
            }
            return a / b;
        }

        function calculate() {
            const { num1, num2, operation } = getInputs();

            if (isNaN(num1) || isNaN(num2)) {
                document.getElementById('result').textContent = "Error: Please enter valid numbers.";
                return;
            }

            let result;
            switch (operation) {
                case '+':
                    result = add(num1, num2);
                    break;
                case '-':
                    result = subtract(num1, num2);
                    break;
                case '*':
                    result = multiply(num1, num2);
                    break;
                case '/':
                    result = divide(num1, num2);
                    break;
                default:
                    document.getElementById('result').textContent = "Error: Invalid operation.";
                    return;
            }

            if (result !== null) {
                document.getElementById('result').textContent = `Result: ${result.toFixed(2)}`;
            }
        }