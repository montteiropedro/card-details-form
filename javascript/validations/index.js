import { message } from './utils/message.js';
import { setCustomMessage } from './utils/setCustomMessages.js';

const requiredInputs = document.querySelectorAll('[required]');

const inputErrorColor = '#ff5252';

for (const input of requiredInputs) {
  input.addEventListener('invalid', e => {
    e.preventDefault();

    const validation = validateInput(e.target);
    validation();
  });

  input.addEventListener('change', e => {
    const validation = validateInput(e.target);
    validation();
  })
}

function validateInput(input) {
  function verifyErrors() {
    let foundError = false;

    for (let error in input.validity) {
      if (input.validity[error] && !input.validity.valid) {
        foundError = error;
      }
    }

    return foundError;
  }

  return () => {
    const error = verifyErrors();

    if (error) {
      input.style.borderColor = inputErrorColor;
      setCustomMessage(input, message(input, error));
    }
    else {
      input.style.borderColor = 'green';
      setCustomMessage(input);
    }
  };
}
