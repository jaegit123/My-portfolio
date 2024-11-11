import { showMessage } from '../utils/showMessage.js';

const copyButton = document.querySelector('.contact__button');

copyButton.addEventListener('click', () => {
  const email = 'connect@johandercampos.com';

  navigator.clipboard
    .writeText(email)
    .then(() => {
      showMessage('Email copied properly');
    })
    .catch((error) => {
      showMessage('Oh no, there was an error', 'error', error);
    });
});
