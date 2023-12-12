import { signOut } from '../../utils/auth';

const logoutButton = (user) => {
  const button = document.querySelector('#navbar-logout-button');
  const googleAuthButton = document.querySelector('#google-auth');
  console.warn(button);
  button.addEventListener('click', signOut);
};

export default logoutButton;
