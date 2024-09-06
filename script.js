const display = document.querySelector('.calculator-display');
const keys = document.querySelectorAll('.key');

let expression = '';

keys.forEach(key => {
    key.addEventListener('click', () => {
        const keyValue = key.textContent;

        if (keyValue === 'C') {
            expression = '';
        } else if (keyValue === '=') {
            try {
                expression = eval(expression).toString();
            } catch (error) {
                expression = 'Error';
            }
        } else if (keyValue === 'Back') {
            expression = expression.slice(0, -1); // Remove the last character
        } else {
            expression += keyValue;
        }

        display.textContent = expression;

        // Adjust font size after updating the display
        adjustFontSize();
    });
});