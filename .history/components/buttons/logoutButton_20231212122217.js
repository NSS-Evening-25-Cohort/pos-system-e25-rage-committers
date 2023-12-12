import { signOut } from '../../utils/auth';

const logoutButton = () => {
  const button = document.querySelector('#navbar-logout-button');
  console.warn(button);
  button.addEventListener('click', signOut);
};

export default logoutButton;
