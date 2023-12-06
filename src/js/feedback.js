import '../css/feedback-form.css';

const formData = {};
const STORAGE_KEY = 'feedback-form-state';

const refs = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector('.feedback-email'),
  message: document.querySelector('.feedback-message'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', onFormInput);

populateFormInput();

function onFormInput(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(e) {
  e.preventDefault();
  e.target.reset();
  console.log(formData);
  localStorage.removeItem(STORAGE_KEY);
}

function populateFormInput() {
  const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (savedData) {
    refs.email.children[0].value = savedData['email'];
    refs.message.children[0].value = savedData['message'];
  }
}
