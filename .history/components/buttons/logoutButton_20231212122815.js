import { signOut } from '../../utils/auth';

const logoutButton = (user) => {
  const button = document.querySelector('#navbar-logout-button');
  const googleAuthButton = document.querySelector('#google-auth');
  console.warn(button);
  button.addEventListener('click', signOut);

  console.log(user); // Log the user object to the console

  if (user) {
    // User is logged in
    googleAuthButton.style.display = 'none';
  } else {
    googleAuthButton.style.display = 'block';
  }
};

export default logoutButton;
