import createEditOrderPage from '../components/forms/createEditOrderPage';
import showOrders from '../pages/viewOrdersPage';
import { getOrders } from '../api/orderData';

const domEvents = () => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id === 'view-orders-button') {
      getOrders().then(showOrders);
    }

    if (e.target.id === 'create-new-order-form') {
      createEditOrderPage();
    }
  });
};

export default domEvents;
