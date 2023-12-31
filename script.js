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
      error.textContent = 'Oops! Please add your email';
      showError(input, error);
    } else {
      validateEmail(userEmail, error);
    }
  }


function validateEmail(userEmail, error) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if(!(emailRegex.test(userEmail))) {
    error.textContent = 'Oops! Please check your email';
    showError(input, error);
  } else {
    showSucces(input, error);
  }
}

function showError(input, error) {
  input.classList.add("show-error");
  error.classList.add("show-error");
}

function showSucces(input, error) {
  input.classList.remove("show-error");
  error.classList.remove("show-error");
  alert('Your request has been submited! \nThank you for visiting my practice!')
}