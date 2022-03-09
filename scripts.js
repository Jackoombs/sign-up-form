const firstName = document.getElementById('first_name');
const lastName = document.getElementById('last_name');
const number = document.getElementById('phone_number');
const email = document.getElementById('email_address');
const password = document.getElementById('password');
const confPassword = document.getElementById('confirm_password')
const form = document.querySelector('form')
const errorElement = document.querySelector('.errors')



form.addEventListener('submit', (e) => {
  console.log('submited')
  let messages = []
  errorElement.innerHTML = ''
  Array.from(document.querySelectorAll('input')).forEach((e) => e.classList.remove('invalid'));
  if (firstName.value === '' || firstName.value == null) {
    messages.push('First name is required')
    firstName.classList.add('invalid')
  }

  if (lastName.value === '' || lastName.value == null) {
    messages.push('Last name is required')
    lastName.classList.add('invalid')
  }

  if (!(/^(([0-9]{5})|(\+44[0-9]{4})) [0-9]{6}$/.test(number.value) || /^(([0-9]{11})|(\+44[0-9]{10}))$/.test(number.value))) {
    console.log(false)
    messages.push('Telephone number format incorrect')
    number.classList.add('invalid')
  }

  if (email.checkValidity() === false) {
    messages.push('Email is invalid')
    email.classList.add('invalid')
  }

  if (email.value === '' || email.value === null) {
    messages.push('Email is required')
    email.classList.add('invalid')
  }
    
  if (password.value.length <= 6) {
    messages.push('Password must be longer than 6 characters')
    password.classList.add('invalid')
    confPassword.classList.add('invalid')
  }

  if (password.value !== confPassword.value) {
    messages.push('Passwords do not match')
    confPassword.classList.add('invalid')
    password.classList.add('invalid')
  }
  
  console.log(messages)
  console.log('hi')

  if (messages.length > 0) {
    e.preventDefault()
    errorElement.style.backgroundColor = '#F9FAFB';
    messages.forEach(message => {
      error = document.createElement('li')
      error.innerHTML = `<img src="error.png" alt="error"> ${message}`;
      errorElement.appendChild(error)
    });
  }

  Array.from(document.querySelectorAll('input')).forEach((e) => {
    if (e.innerHTML !== '' || !e.classList.contains('invalid')) e.style.borderColor = 'green'
  })
})