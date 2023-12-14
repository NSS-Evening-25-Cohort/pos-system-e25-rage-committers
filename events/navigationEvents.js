import { signOut } from '../utils/auth';
import takeMeHome from '../pages/homePage';

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
};

export default navigationEvents;
