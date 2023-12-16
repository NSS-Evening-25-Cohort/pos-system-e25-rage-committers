import revenuePage from '../pages/revenuePage';
import createEditItemForm from '../components/forms/createEditItemForm';
import showOrders from '../pages/viewOrdersPage';
import { getOrders, getSingleOrder, deleteOrder } from '../api/orderData';
import createEditOrderPage from '../components/forms/createEditOrderPage';

const domEvents = () => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id === 'view-orders-button') {
      getOrders().then(showOrders);
    }
    if (e.target.id === 'create-new-order-form') {
      createEditOrderPage({});
    }
    if (e.target.id === 'view-revenue-button') {
      revenuePage();
    }
    if (e.target.id.includes('add-items-button')) {
      const [, firebaseKey] = e.target.id.split('--');
      createEditItemForm(firebaseKey, {});
    }
    if (e.target.id.includes('close-order')) {
      // const [, firebaseKey] = e.target.id.split('--');
      // TATIANNA CALL THIS FUNCTION TO RENDER THE CLOSE ORDER PAGE
      // THE FIREBASE KEY IS THE FIREBASE KEY OF THE ORDER YOU HAVE TO CLOSE OUT/UPDATE
      // closeOrderPage(firebaseKey);
    }
    if (e.target.id.includes('edit-order')) {
      const [, firebaseKey] = e.target.id.split('--');
      console.log(firebaseKey);
      getSingleOrder(firebaseKey)
        .then((orderObj) => {
          createEditItemForm(orderObj);
        });
    }
    if (e.target.id.includes('create-order')) {
      const [, firebaseKey] = e.target.id.split('--');
      getSingleOrder(firebaseKey)
        .then((orderObj) => {
          createEditOrderPage(orderObj);
        });
    }
    if (e.target.id.includes('delete-order')) {
      const [, firebaseKey] = e.target.id.split('--');
      deleteOrder(firebaseKey).then(() => {
        getOrders().then(showOrders);
      });
    }
  });
};
export default domEvents;
