import Toastify from 'toastify-js';
import 'toastify-js/src/toastify.css';

export function showMessage(message, type = 'success') {
  // Configure Toastify options
  const options = {
    text: message,
    duration: 3000,
    destination: 'https://github.com/apvarun/toastify-js',
    newWindow: true,
    close: true,
    gravity: 'top', // Can be 'top' or 'bottom'
    position: 'center', // Can be 'left', 'center', or 'right'
    stopOnFocus: true, // Prevent dismissing of toast on hover
    style: {
      // Background color based on type
      background:
        type === 'success'
          ? 'linear-gradient(to right, #00b09b, #96c93d)' // Success (green)
          : 'linear-gradient(to right, #ff416c, #ff4b2b)', // Error (red)
      borderRadius: '10px', // Rounded corners
      boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.3)', // Soft shadow
      color: '#fff', // Text color
      padding: '16px', // Extra padding
      margin: 'auto', // Extra padding
      fontSize: '1rem', // Increase font size
      textAlign: 'center' // Center text
    },
    // Adding an icon based on the type
    className: type === 'success' ? 'toast-success-icon' : 'toast-error-icon',
    onClick: function () {} // Callback after click
  };

  // Show the toast
  Toastify(options).showToast();
}
