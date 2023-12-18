import { signOut } from '../utils/auth';
import takeMeHome from '../pages/homePage';
import createEditOrderPage from '../components/forms/createEditOrderPage';
import showOrders from '../pages/viewOrdersPage';
import { mergeOrdersCustomersArray } from '../api/mergeData';

// navigation events
const navigationEvents = () => {
  // LOGOUT BUTTON
  document.querySelector('#logout-button')
    .addEventListener('click', signOut);
  // HOME BUTTON
  document.querySelector('#nav-logo')
    .addEventListener('click', () => {
      takeMeHome();
    });
  // CREATE AN ORDER
  document.querySelector('#create-order')
    .addEventListener('click', () => {
      createEditOrderPage({});
    });
  // VIEW ORDERS
  document.querySelector('#view-orders')
    .addEventListener('click', () => {
      mergeOrdersCustomersArray()
        .then(showOrders);
    });
};

export default navigationEvents;
