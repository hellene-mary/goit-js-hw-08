import throttle from 'lodash.throttle';

const form = document.querySelector('form');
const STORAGE_KEY = 'feedback-form-state';
let formData = {};

form.addEventListener('submit', throttle(onSubmitClick, 500));
form.addEventListener('input', inputIracking);

checkStorage();

function inputIracking(event) {
    formData[event.target.name] = event.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onSubmitClick(event) {
    event.preventDefault();

    console.log(`formData: `, JSON.parse(localStorage.getItem(STORAGE_KEY)));

    event.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
}

function checkStorage() {
    if (localStorage.getItem(STORAGE_KEY)) {
        const formDataParse = JSON.parse(localStorage.getItem(STORAGE_KEY));
        form.elements.email.value = formDataParse.email;
        form.elements.message.value = formDataParse.message;
    }
}
