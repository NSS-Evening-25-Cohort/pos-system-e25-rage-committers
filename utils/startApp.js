import logoutButton from '../components/buttons/logoutButton';
import domEvents from '../events/domEvents';
import domBuilder from '../components/shared/domBuilder';
import navBar from '../components/shared/navBar';
import formEvents from '../events/formEvents';
import takeMeHome from '../pages/homePage';
import { getCustomer } from '../api/customerData';
// import navigationEvents from '../events/navigationEvents';

const startApp = (user) => {
  domBuilder(); // BUILD THE DOM
  domEvents(user); // ADD THE EVENT LISTENTERS TO THE DOM
  formEvents(user); // ADD FORM EVENT LISTENTERS TO THE DOM
  navBar(user); // DYNAMICALLY ADD THE NAV
  logoutButton(); // ADD THE LOGOUT BUTTON COMPONENT
  takeMeHome(); // LOAD THE HOME SCREEN
};

export default startApp;
