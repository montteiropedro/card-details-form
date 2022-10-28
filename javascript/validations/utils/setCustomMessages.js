export function setCustomMessage(input, message) {
  let spanError;

  if (input.id === 'exp-date__month' || input.id === 'exp-date__year') {
    spanError = input.parentNode.nextElementSibling;
  }
  else {
    spanError = input.parentNode.querySelector('span.error');
  }

  if (message) {
    spanError.classList.add('active');
    spanError.innerHTML = message;
  }
  else {
    spanError.classList.remove('active');
    spanError.innerHTML = '';
  }
}
