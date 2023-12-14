import { signOut } from '../utils/auth';
import takeMeHome from '../pages/homePage';
import createEditOrderPage from '../components/forms/createEditOrderPage';

// navigation events
const navigationEvents = () => {
  // LOGOUT BUTTON
  document.querySelector('#logout-button')
    .addEventListener('click', signOut);
  // HOME BUTTON
  document.querySelector('#nav-logo')
    .addEventListener('click', () => {
      console.warn('user clicked logo');
      takeMeHome();
    });
  // CREATE AN ORDER
  document.querySelector('#create-order')
    .addEventListener('click', () => {
      console.warn('user clicked logo');
      createEditOrderPage();
    });
};

export default navigationEvents;
