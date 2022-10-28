const form = document.querySelector('.form');
const completedMessage = document.querySelector('.completed-message')
const continueBtn = document.querySelector('.completed-message__submit');

form.addEventListener('submit', e => {
  e.preventDefault();

  form.classList.add('submitted');
  completedMessage.classList.add('active');
});

continueBtn.addEventListener('click', () => {
  window.location.href = 'index.html';
});
