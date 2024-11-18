// Get the body and main elements
const body = document.body;
const main = document.querySelector('main');

// Get the children in the main
const form = main.querySelector('form');
const nameInput = main.querySelector('.name');
const ageInput = main.querySelector('.age');
const nameResult = main.querySelector('.nameResult');
const ageResult = main.querySelector('.ageResult');

// Debounce function for real-time input display
function debounce(func, delay) {
    let timer;
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => func.apply(this, args), delay);
    };
}

// Update result function with animation
function updateResult(element, value) {
    element.textContent = value;
    element.classList.add('updated');
    setTimeout(() => element.classList.remove('updated'), 500);
}

// Add real-time updates for inputs
nameInput.addEventListener('input', debounce(() => {
    updateResult(nameResult, nameInput.value || 'Name will appear here');
}, 300));

ageInput.addEventListener('input', debounce(() => {
    updateResult(ageResult, ageInput.value || 'Age will appear here');
}, 300));

// Add event listener to form on submit
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = nameInput.value.trim();
    const age = ageInput.value.trim();

    // Basic client-side validation
    if (!name) {
        alert('Please enter a name');
        return;
    }
    if (!age || isNaN(age) || age <= 0) {
        alert('Please enter a valid age');
        return;
    }

    // Update the results and reset form
    updateResult(nameResult, name);
    updateResult(ageResult, age);
    form.reset();
});

// Add focus shift on Enter key for name input
nameInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        e.preventDefault();
        ageInput.focus();
    }
});
