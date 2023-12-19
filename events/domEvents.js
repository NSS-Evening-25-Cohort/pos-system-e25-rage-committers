import createEditItemForm from '../components/forms/createEditItemForm';
import showOrders from '../pages/viewOrdersPage';
import { getSingleOrder, deleteOrder, getClosedOrders } from '../api/orderData';
import createEditOrderPage from '../components/forms/createEditOrderPage';
import { getSingleItem, deleteSingleItem, getOrderItems } from '../api/itemData';
import { getSingleCustomer } from '../api/customerData';
import revenuePage from '../pages/revenuePage';
import { mergeOrdersCustomersArray } from '../api/mergeData';
import orderDetails from '../pages/orderDetails';

const domEvents = () => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    // HOME PAGE BUTTON CLICKS
    if (e.target.id === 'view-orders-button') {
      mergeOrdersCustomersArray()
        .then(showOrders);
    }
    if (e.target.id === 'create-new-order-form') {
      createEditOrderPage({}, {});
    }
    if (e.target.id === 'view-revenue-button') {
      getClosedOrders().then(revenuePage);
    }

    // ORDER DETAILS PAGE
    if (e.target.id.includes('add-items-button')) {
      const [, firebaseKey] = e.target.id.split('--');
      createEditItemForm(firebaseKey, {});
    }
    if (e.target.id.includes('edit-item')) {
      const [, itemFirebaseKey, orderFirebaseKey] = e.target.id.split('--');
      getSingleItem(itemFirebaseKey).then((data) => {
        createEditItemForm(orderFirebaseKey, data);
      });
    }

    // GO TO PAYMENT
    if (e.target.id.includes('close-order')) {
      // const [, firebaseKey] = e.target.id.split('--');
      // TATIANNA CALL THIS FUNCTION TO RENDER THE CLOSE ORDER PAGE
      // THE FIREBASE KEY IS THE FIREBASE KEY OF THE ORDER YOU HAVE TO CLOSE OUT/UPDATE
      // closeOrderPage(firebaseKey);
    }
    if (e.target.id.includes('edit-order')) {
      const [, orderFirebaseKey, customerFirebaseKey] = e.target.id.split('--');
      // eslint-disable-next-line no-console
      getSingleCustomer(customerFirebaseKey)
        .then((customerObj) => {
          getSingleOrder(orderFirebaseKey)
            .then((orderObj) => {
              createEditOrderPage(customerObj, orderObj);
            });
        });
    }

    if (e.target.id.includes('delete-order')) {
      const [, firebaseKey] = e.target.id.split('--');
      deleteOrder(firebaseKey).then(() => {
        mergeOrdersCustomersArray()
          .then(showOrders);
      });
    }
    if (e.target.id.includes('details-order')) {
      const [, firebaseKey] = e.target.id.split('--');
      orderDetails(firebaseKey);
    }

    if (e.target.id.includes('delete-item')) {
      const [, firebaseKey] = e.target.id.split('--');
      deleteSingleItem(firebaseKey).then(() => {
        getOrderItems().then(orderDetails);
      });
    }
  });
};
export default domEvents;
