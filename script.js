// Algorithm:
// 1) Select the input fields, error message and error icon
// 2) If an input field is empty or incorrect, make the error message and icon appear for that input

const form = document.getElementById('form')
const firstName = document.getElementById('firstname');
const lastName = document.getElementById('lastname');
const email = document.getElementById('email');
const password = document.getElementById('password');
const inputFields = document.querySelectorAll('.input-container');
const emailRegex = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
let isFormValid = false;

form.addEventListener('submit', function(event) {
    event.preventDefault();

    inputFields.forEach(input => {
        const formInput = input.querySelector('.input');
        const error = input.querySelector('.error-container');

        if (!formInput.value) {
            error.style.display = 'flex';
            formInput.style.border = '2px solid var(--red)';
        } else {
            error.style.display = 'none';
            formInput.style.border = '1px solid var(--greyish-blue)';
            formInput.value = '';
        }
    })
});

inputFields.forEach(input => {
    const formInput = input.querySelector('.input'); // input fields
    const error = input.querySelector('.error-container'); // error message + icon
    const pattern = formInput.getAttribute("pattern");
    let regex = new RegExp(pattern);

    formInput.addEventListener('input', () => {
        if (formInput.value.match(regex)) {
            error.style.display = 'none';
            formInput.style.border = '1px solid var(--greyish-blue)';
        } else {
            error.style.display = 'flex';
            formInput.style.border = '2px solid var(--red)';
        }
        
        if (email.value.match(emailRegex)) {
            error.style.display = 'none';
            formInput.style.border = '1px solid var(--greyish-blue)';
        }
    });
})