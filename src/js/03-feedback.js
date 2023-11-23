import throttle from 'lodash.throttle';

const emailForm = document.querySelector('[name="email"]');
const messageForm = document.querySelector('[name="message"]');
const sendForm = document.querySelector('[type="submit"]');
const storyValue = {};

const emailInput = throttle(event => {
  event.preventDefault();
  const emailValue = event.currentTarget.value;
  storyValue.email = emailValue;
  storage(storyValue);
}, 500);

const messageInput = throttle(ev => {
  ev.preventDefault();
  const messageValue = ev.currentTarget.value;
  storyValue.message = messageValue;
  storage(storyValue);
}, 500);

emailForm.addEventListener('input', emailInput);
messageForm.addEventListener('input', messageInput);

const storage = function (data) {
  localStorage.setItem('feedback-form-state', JSON.stringify(data));
};

window.addEventListener('DOMContentLoaded', () => {
  const storedValue = localStorage.getItem('feedback-form-state');
  if (storedValue) {
    try {
      const parsedValue = JSON.parse(storedValue);
      if (parsedValue.email == undefined) {
        emailForm.value = '';
      } else {
        emailForm.value = parsedValue.email;
      }
      if (parsedValue.message == undefined) {
        messageForm.value = '';
      } else {
        messageForm.value = parsedValue.message;
      }
    } catch (error) {
      console.error('Error parsing stored value:', error);
    }
  }
});

sendForm.addEventListener('click', eve => {
  eve.preventDefault();
  console.log(`Email: ${emailForm.value}`);
  console.log(`Message: ${messageForm.value}`);
  localStorage.removeItem('feedback-form-state');
  document.querySelector('form').reset();
});
