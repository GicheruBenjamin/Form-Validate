
//Get the body and main
const body = document.body;
const main = document.querySelector('main');

//Get the children in the main
const form = main.querySelector('form');
const nameLabel = main.querySelector('.nameLabel');
const nameInput = main.querySelector('.name');
const ageLabel = main.querySelector('.ageLabel');
const ageInput = main.querySelector('.age');
const nameResult = main.querySelector('.nameResult');
const ageResult = main.querySelector('.ageResult');

//Get the submit button
const submitBtn = main.querySelector('button');
//Get the form data
const formData = {
    name: nameInput.value,
    age: ageInput.value
};

//Add event listener to FORM on submit
form.addEventListener('submit', (e) => {
    e.preventDefault();
    nameResult.textContent = formData.name;
    ageResult.textContent = formData.age;
});