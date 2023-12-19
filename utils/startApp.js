import logoutButton from '../components/buttons/logoutButton';
import domBuilder from '../components/shared/domBuilder';
import navBar from '../components/shared/navBar';
import takeMeHome from '../pages/homePage';
import navigationEvents from '../events/navigationEvents';
import closeOrderPage from '../pages/closeOrderPage';
import domEvents from '../events/domEvents';
import formEvents from '../events/formEvents';

const startApp = (user) => {
  domBuilder(); // BUILD THE DOM
  domEvents(user); // ADD THE EVENT LISTENTERS TO THE DOM
  formEvents(user); // ADD FORM EVENT LISTENTERS TO THE DOM
  navBar(user); // DYNAMICALLY ADD THE NAV
  logoutButton(); // ADD THE LOGOUT BUTTON COMPONENT
  takeMeHome(); // LOAD THE HOME SCREEN
  navigationEvents(); // ADD THE EVENT LISTENERS TO THE NAVBAR
  closeOrderPage('-NlztieK2zQpmDIMNd4f');
};

export default startApp;
