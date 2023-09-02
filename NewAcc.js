function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Generate a random number between 1 and 10
var randomNumber = generateRandomNumber(1, 10);

// Print the random number
console.log("Random number:", randomNumber);


//Authencation whether the password is same or nots
const form = document.querySelector('form');
form.addEventListener('submit', validatePassword);

function validatePassword(event) {
  event.preventDefault(); // Prevent form submission for demonstration purposes

  const password = document.getElementById('passwordInput').value;
  const confirmPassword = document.getElementById('confirmPasswordInput').value;

  if (password === confirmPassword) {
    // Passwords match
    console.log('Passwords match!');
    // You can proceed with further actions, such as submitting the form or updating the UI
  } else {
    // Passwords do not match
    console.log('Passwords do not match!')
  }
}