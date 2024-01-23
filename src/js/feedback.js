import '../css/feedback-form.css';

const STORAGE_KEY = 'feedback-form-state';

// const refs = {
//   form: document.querySelector('.feedback-form'),
//   email: document.querySelector('.feedback-email'),
//   message: document.querySelector('.feedback-message'),
// };

// refs.form.addEventListener('submit', onFormSubmit);
// refs.form.addEventListener('input', onFormInput);

// populateFormInput();

// function onFormInput(e) {
//   formData[e.target.name] = e.target.value;
//   localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
// }

// function onFormSubmit(e) {
//   e.preventDefault();
//   console.log(formData);
//   e.target.reset();
//   localStorage.removeItem(STORAGE_KEY);
// }

// function populateFormInput() {
//   const formData = JSON.parse(localStorage.getItem(STORAGE_KEY));
//   if (formData) {
//     refs.form.email.value = formData['email'];
//     refs.form.message.value = formData['message'];
//   }
// }

// ------------//
// function populateFormInput() {
//   const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));
//   if (savedData) {
//     refs.form.email.value = savedData['email'];
//     refs.form.message.value = savedData['message'];
//   }

//   console.log({ email, message });
// }
