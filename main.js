
const generateButton = document.getElementById('generate');
const numbersContainer = document.getElementById('numbers');
const toggleBtn = document.getElementById('toggle-btn');
const body = document.body;

// Theme Toggle Logic
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark') {
    body.classList.add('dark-mode');
    toggleBtn.textContent = 'Light Mode';
}

toggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    let theme = 'light';
    if (body.classList.contains('dark-mode')) {
        theme = 'dark';
        toggleBtn.textContent = 'Light Mode';
    } else {
        toggleBtn.textContent = 'Dark Mode';
    }
    localStorage.setItem('theme', theme);
});

// Lotto Generation Logic
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
