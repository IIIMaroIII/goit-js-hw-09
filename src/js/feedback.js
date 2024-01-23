import '../css/feedback-form.css';
import { saveToLS } from '../scripts/save-to-ls';
import { loadFromLS } from '../scripts/load-from-ls';

saveToLS();
loadFromLS();
const STORAGE_KEY = 'feedback-form-state';

const refs = {
  form: document.querySelector('.feedback-form'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', onFormInput);

function onFormSubmit() {}

function onFormInput(e) {
  console.log(e.currentTarget);
}
