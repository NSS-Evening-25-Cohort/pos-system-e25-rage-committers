import revenuePage from '../pages/revenuePage';
import createEditOrderPage from '../components/forms/createEditOrderPage';
import showOrders from '../pages/viewOrdersPage';
import { getOrders, deleteOrder } from '../api/orderData';

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
    if (e.target.id.includes('close-order')) {
      // const [, firebaseKey] = e.target.id.split('--');
      // TATIANNA CALL THIS FUNCTION TO RENDER THE CLOSE ORDER PAGE
      // THE FIREBASE KEY IS THE FIREBASE KEY OF THE ORDER YOU HAVE TO CLOSE OUT/UPDATE

      // closeOrderPage(firebaseKey);
    }
    if (e.target.id.includes('edit-order')) {
      // eslint-disable-next-line
      console.log(e.target); // Log the target element
      // eslint-disable-next-line
      console.log(e.target.id); // Log the id of the target element
      const [, firebaseKey] = e.target.id.split('--');
      // eslint-disable-next-line
      console.log(firebaseKey); // Log the firebaseKey
      getSingleOrder(firebaseKey)
        .then((orderObj) => {
          // eslint-disable-next-line
          console.log(orderObj); // Log the returned order object
          createEditOrderPage(orderObj);
        });
    }
    if (e.target.id.includes('create-order')) {
      // eslint-disable-next-line
      console.log(e.target); // Log the target element
      // eslint-disable-next-line
      console.log(e.target.id); // Log the id of the target element
      const [, firebaseKey] = e.target.id.split('--');
      // eslint-disable-next-line
      console.log(firebaseKey); // Log the firebaseKey
      getSingleOrder(firebaseKey)
        .then((orderObj) => {
          // eslint-disable-next-line
          console.log(orderObj); // Log the returned order object
          createEditOrderPage(orderObj);
        });
    if (e.target.id.includes('delete-order')) {
      const [, firebaseKey] = e.target.id.split('--');
      deleteOrder(firebaseKey).then(() => {
        getOrders().then(showOrders);
      });
    }
  });
};
export default domEvents;
