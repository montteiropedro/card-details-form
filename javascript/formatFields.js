const cardName = document.querySelector('.card__info--name');
const formCardName = document.querySelector('.form__field>input#card-name');

const cardNumber = document.querySelector('.card__info--number');
const formCardNumber = document.querySelector('.form__field>input#card-number');

const cardExpDate = document.querySelectorAll('.card__info--exp-date>span');
const formCardExpDate = document.querySelectorAll('.form__field--exp-date>div>input');

const cardCvc = document.querySelector('.card__info--card-cvc');
const formCardCvc = document.querySelector('.form__field>input#card-cvc');

formCardName.addEventListener('keyup', () => {
  if (formCardName.value.length === 0) {
    cardName.innerHTML = 'Jane Appleseed';
  }
  else {
    cardName.innerHTML = formCardName.value;
  }
});

formCardNumber.addEventListener('keyup', (e) => {
  const formattedNumber = formCardNumber.value.match(/[0-9]{1,4}/g);

  if (formCardNumber.value.length === 0) {
    cardNumber.innerHTML = '0000 0000 0000 0000';
  }
  else if (formCardNumber.value.length <= 19) {
    formCardNumber.value = formattedNumber.join(' ');
    cardNumber.innerHTML = formattedNumber.join(' ');
  }
});

const expDateMonth = formCardExpDate[0].addEventListener('keyup', () => {
  if (formCardExpDate[0].value.length === 0) {
    cardExpDate[0].innerHTML = '00';
  }
  else {
    cardExpDate[0].innerHTML = formCardExpDate[0].value;
  }
});

const expDateYear = formCardExpDate[1].addEventListener('keyup', () => {
  if (formCardExpDate[1].value.length === 0) {
    cardExpDate[1].innerHTML = '00';
  }
  else {
    cardExpDate[1].innerHTML = formCardExpDate[1].value;
  }
});

formCardCvc.addEventListener('keyup', () => {
  if (formCardCvc.value.length === 0) {
    cardCvc.innerHTML = '000';
  }
  else {
    cardCvc.innerHTML = formCardCvc.value;
  }
});
