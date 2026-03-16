
const generateButton = document.getElementById('generate');
const numbersContainer = document.getElementById('numbers');

generateButton.addEventListener('click', () => {
    numbersContainer.innerHTML = '';
    const numbers = new Set();
    while (numbers.size < 6) {
        numbers.add(Math.floor(Math.random() * 45) + 1);
    }

    const sortedNumbers = Array.from(numbers).sort((a, b) => a - b);

    for (const number of sortedNumbers) {
        const circle = document.createElement('div');
        circle.classList.add('number');
        circle.textContent = number;
        numbersContainer.appendChild(circle);
    }
});
