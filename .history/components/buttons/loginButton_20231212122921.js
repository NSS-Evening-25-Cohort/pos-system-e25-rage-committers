import { signIn } from '../../utils/auth';

// GOOGLE LOGIN BUTTON
const loginButton = () => {
  const domString = '<button id="google-auth" class="btn btn-danger">GOOGLE LOGIN</button>';
  document.querySelector('#login-form-container').innerHTML = domString;
  document.querySelector('#google-auth').addEventListener('click', signIn);
};

// Function to update the visibility of the Google login button
const updateLoginButton = (user) => {
  const googleAuthButton = document.querySelector('#google-auth');

  if (user) {
    // User is logged in
    googleAuthButton.style.display = 'none';
  } else {
    // User is not logged in
    googleAuthButton.style.display = 'block';
  }
};

export { loginButton, updateLoginButton };
