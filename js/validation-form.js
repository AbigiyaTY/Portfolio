const form = document.getElementById('contact-form');
const email = document.getElementById('email');
const errorDisplay = document.getElementById('errorDisplay')
const checker = /^[a-z0-9._-]+@[a-z0-9.-]+\.[a-z]{2,4}$/g;

form.addEventListener('submit', (e) => {
    if (!email.value.match(checker)) {
        e.preventDefault();
        errorDisplay.style.visibility = 'visible';
        errorDisplay.classList.add('error-message');
        errorDisplay.textContent = '*Your email address should be all in lowercase'
    } else {
        errorDisplay.style.visibility = 'hidden';
    }
});