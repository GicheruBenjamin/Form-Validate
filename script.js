
// Selecting the elements
const main = document.querySelector('main');
const form = main.querySelector('form');
const error = main.querySelector('#error');
const nameInput = main.querySelector('#name');
const passwordInput = main.querySelector('#password');
const submitButton = main.querySelector('#submit');

// An event listener for form validation
form.addEventListener('submit', (e) => {
    // Reset error message
    error.textContent = '';

    // Validate name (should not be empty)
    if (nameInput.value.trim() === '' || nameInput.value === null) {
        error.textContent = 'Name is required';
        e.preventDefault(); // Prevent form submission
        return;
    }

    // Validate if name and password are the same
    if (nameInput.value === passwordInput.value) {
        error.textContent = 'Name and password should not be the same';
        e.preventDefault(); // Prevent form submission
        return;
    }

    // Validate password (should be at least 6 characters)
    if (passwordInput.value.length < 6) {
        error.textContent = 'Password must be at least 6 characters';
        e.preventDefault(); // Prevent form submission
        return;
    }
});
