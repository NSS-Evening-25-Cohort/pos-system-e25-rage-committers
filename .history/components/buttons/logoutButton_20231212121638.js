import { signOut } from '../../utils/auth';

const logoutButton = () => {
  const domString = '<button id="navbar-logout-button" class="btn btn-danger">SIGNOUT</button>';
  document.querySelector('#navbar').innerHTML = (domString);
  document.querySelector('#navbar-logout-button').addEventListener('click', signOut);
};
export default logoutButton;
