// let loginHandler = require('./login.js');


async function signupFormHandler(event) {
    event.preventDefault();

    // getting data from the form
    const username = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();

    if (username && password) {
        const response = await fetch('/api/users', {
          method: 'post',
          body: JSON.stringify({
            username,
            email,
            password
          }),
          headers: { 'Content-Type': 'application/json' }
        }); 
    // check the response status
    if (response.ok) {
        console.log('success');

        // loginHandler();
        document.location.replace('/dashboard');

      } else {
        alert(response.statusText);
      }
    }
}

document.querySelector('#signup-form').addEventListener('submit', signupFormHandler); 