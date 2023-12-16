import logoutButton from '../components/buttons/logoutButton';
import domEvents from '../events/domEvents';
import domBuilder from '../components/shared/domBuilder';
import navBar from '../components/shared/navBar';
import formEvents from '../events/formEvents';
import takeMeHome from '../pages/homePage';
import navigationEvents from '../events/navigationEvents';
import { getOrderTotal, closeOrderPage } from '../pages/closeOrderPage';

const startApp = (user) => {
  domBuilder(); // BUILD THE DOM
  domEvents(user); // ADD THE EVENT LISTENTERS TO THE DOM
  formEvents(user); // ADD FORM EVENT LISTENTERS TO THE DOM
  navBar(user); // DYNAMICALLY ADD THE NAV
  logoutButton(); // ADD THE LOGOUT BUTTON COMPONENT
  takeMeHome(); // LOAD THE HOME SCREEN
  navigationEvents(); // ADD THE EVENT LISTENERS TO THE NAVBAR
  closeOrderPage();
  getOrderTotal();
};

export default startApp;
