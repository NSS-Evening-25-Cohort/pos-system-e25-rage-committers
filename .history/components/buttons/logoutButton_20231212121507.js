import { signOut } from '../../utils/auth';

const logoutButton = () => {
  document.querySelector('#login-form-container').innerHTML = (domString);
  document.querySelector('#google-auth').addEventListener('click', signOut);
};

export default logoutButton;
