import throttle from 'lodash.throttle';

const formData = document.querySelector('.feedback-form');
const emailInput = document.querySelector('input[name="email"]');
const messageInput = document.querySelector('textarea[name="message"]');
const STORAGE_KEY = 'feedback-form-state';

// TRACK THE INPUT THAT WILL SAVE TO THE LOCAL STORAGE
const onHandleThrottle = () => {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify({ email: emailInput.value, message: messageInput.value })
  );
};

// FUNCTION THAT HANDLES THE SUBMIT EVENT
const onHandleSubmit = event => {
  event.preventDefault();
  const storageData = JSON.parse(localStorage.getItem(STORAGE_KEY));
  console.log(storageData);
  localStorage.removeItem(STORAGE_KEY);
  event.target.reset();
};

// CONDITION IF THERES A DATA THAT WAS SAVED IN THE LOCAL STORAGE
if (localStorage.getItem(STORAGE_KEY)) {
  const { email, message } = JSON.parse(localStorage.getItem(STORAGE_KEY));
  emailInput.value = email;
  messageInput.value = message;
}

formData.addEventListener('input', throttle(onHandleThrottle, 500));
formData.addEventListener('submit', onHandleSubmit);
