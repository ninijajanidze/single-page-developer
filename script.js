const nameInput = document.querySelector('.inputField-name');
const emailInput = document.querySelector('.inputField-email');
const messageInput = document.querySelector('.inputField-message');
const errorIcon = document.querySelector('.error');
const errorMessage = document.querySelector('.errorMessage');
const emailLine = document.querySelector('.line-input2');
const messageLine = document.querySelector('.line-input3');
const nameLine = document.querySelector('.line-input1');

nameInput.addEventListener('input', function() {
    if (this.value.trim() !== '') {
        nameLine.classList.add('valid');
    } else {
        nameLine.classList.remove('valid');
    }
});

messageInput.addEventListener('input', function() {
    if (this.value.trim() !== '') {
        messageLine.classList.add('valid');
    } else {
        messageLine.classList.remove('valid');
    }
});

emailInput.addEventListener('input', function() {
    if (!isValidEmail(this.value)) {
        emailLine.classList.add('invalid');
        errorIcon.style.display = 'inline';
        errorMessage.style.display = 'block';
    } else {
        emailLine.classList.remove('invalid');
        emailLine.classList.add('valid');
        errorIcon.style.display = 'none';
        errorMessage.style.display = 'none';
    }
});

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};