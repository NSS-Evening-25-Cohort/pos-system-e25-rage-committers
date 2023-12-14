import { signOut } from '../utils/auth';
import showOrders from '../pages/viewOrdersPage';
import { getOrders } from '../api/orderData';

// navigation events
const navigationEvents = () => {
  // LOGOUT BUTTON
  document.querySelector('#logout-button')
    .addEventListener('click', signOut);

  // ALL ORDERS

  document.querySelector('#view-orders').addEventListener('click', (e) => {
    console.warn('view orders was clicked!');
    if (e.target.id === 'view-orders') {
      getOrders().then(showOrders);
    }
  });
};

export default navigationEvents;
