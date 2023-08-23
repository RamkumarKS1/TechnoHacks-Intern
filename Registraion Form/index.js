const registrationForm = document.getElementById('registrationForm');
const usernameInput = document.getElementById('username');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPassword');

registrationForm.addEventListener('submit', function(event) {
    let isValid = true;

    clearErrorMessages();

    if (!validateUsername(usernameInput.value)) {
        displayErrorMessage('usernameError', 'Username must be at least 3 characters long.');
        isValid = false;
    }

    if (!validateEmail(emailInput.value)) {
        displayErrorMessage('emailError', 'Please enter a valid email address.');
        isValid = false;
    }

    if (!validatePassword(passwordInput.value)) {
        displayErrorMessage('passwordError', 'Password must be at least 6 characters long.');
        isValid = false;
    }

    if (passwordInput.value !== confirmPasswordInput.value) {
        displayErrorMessage('confirmPasswordError', 'Passwords do not match.');
        isValid = false;
    }

    if (!isValid) {
        event.preventDefault();
    }
});

function validateUsername(username) {
    return username.length >= 3;
}

function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

function validatePassword(password) {
    return password.length >= 6;
}

function displayErrorMessage(elementId, message) {
    const errorElement = document.getElementById(elementId);
    errorElement.textContent = message;
}

function clearErrorMessages() {
    const errorElements = document.querySelectorAll('.error-message');
    errorElements.forEach(element => {
        element.textContent = '';
    });
}
