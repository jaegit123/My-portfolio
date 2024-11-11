import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { showMessage } from '../utils/showMessage.js';

const contactForm = document.querySelector('.contact__form');

const EMAIL_JS_PUBLIC_API_KEY = import.meta.env.VITE_EMAILJS_API_KEY;
const EMAIL_JS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAIL_JS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

contactForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  const form = event.target;
  const formData = new FormData(form);
  const formObject = Object.fromEntries(formData.entries());

  console.log(formObject);

  if (!formObject.name.trim()) {
    showMessage('Please enter your name', 'error');
    return;
  }

  if (!formObject.email.trim()) {
    showMessage('Please enter your email', 'error');
    return;
  }

  if (!formObject.message.trim()) {
    showMessage('Please, type your message', 'error');
    return;
  }

  try {
    await emailjs.sendForm(EMAIL_JS_SERVICE_ID, EMAIL_JS_TEMPLATE_ID, '.contact__form', {
      publicKey: EMAIL_JS_PUBLIC_API_KEY
    });

    showMessage('Thanks for your message');
  } catch (error) {
    if (error instanceof EmailJSResponseStatus) {
      showMessage('Oh no, there was an error', 'error');
      console.log('EMAILJS FAILED...', error);
      return;
    }

    console.log('ERROR', error);
  }
});
