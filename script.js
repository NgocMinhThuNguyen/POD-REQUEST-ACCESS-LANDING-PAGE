const form = document.querySelector('form');
const input = document.querySelector('input');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  validateForm();
});

function validateForm() {
  const userEmail = input.value;
  let error = input.nextElementSibling;
  
    if (userEmail === '') {
      error.classList.add("show-error"); // Invalid email
    } else {
      validateEmail(userEmail, error);
    }
  }


function validateEmail(userEmail, error) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if(!(emailRegex.test(userEmail))) {
    error.classList.add("show-error"); // Invalid email
  } else {
    error.classList.remove("show-error");  // Valid email
    alert('Your request has been submitted!')
  }
}