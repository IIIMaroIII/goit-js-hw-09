import '../css/feedback-form.css';
import { saveToLS } from '../scripts/save-to-ls';
import { loadFromLS } from '../scripts/load-from-ls';

const STORAGE_KEY = 'feedback-form-state';

const refs = {
  form: document.querySelector('.feedback-form'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', onFormInput);

function onFormSubmit(evt) {
  evt.preventDefault();
  const { email, message } = loadFromLS(STORAGE_KEY) || {};
  const formEmail = refs.form.elements.email.value;
  const formMessage = refs.form.elements.message.value;
  if (formEmail.length === 0 || formMessage.length === 0) {
    window.alert('Please fill out all input fields!');
  } else {
    console.log(loadFromLS(STORAGE_KEY));
  }

  localStorage.removeItem(STORAGE_KEY);
  refs.form.reset();
}

function onFormInput(evt) {
  const userEmail = refs.form.elements.email.value;
  const userMessage = refs.form.elements.message.value;

  const objData = {
    email: userEmail.trim(),
    message: userMessage.trim(),
  };
  saveToLS(STORAGE_KEY, objData);
}

function restoreDataToForm() {
  const { email, message } = loadFromLS(STORAGE_KEY) || {};
  refs.form.elements.email.value = email || '';
  refs.form.elements.message.value = message || '';
}
restoreDataToForm();
