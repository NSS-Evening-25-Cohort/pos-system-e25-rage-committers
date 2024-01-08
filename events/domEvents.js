import createEditItemForm from '../components/forms/createEditItemForm';
import showOrders from '../pages/viewOrdersPage';
import { getSingleOrder, getClosedOrders, updateOrder } from '../api/orderData';
import createEditOrderPage from '../components/forms/createEditOrderPage';
import { getSingleItem, deleteSingleItem, getOrderItems } from '../api/itemData';
import { getSingleCustomer } from '../api/customerData';
import revenuePage from '../pages/revenuePage';
import { mergeOrdersCustomersArray, deleteOrderItemRelationship } from '../api/mergeData';
import orderDetails from '../pages/orderDetails';
import closeOrderForm from '../components/forms/closeOrderForm';

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
      const [, firebaseKey] = e.target.id.split('--');
      getOrderItems(firebaseKey).then((data) => {
        const itemPrices = [];
        data.forEach((item) => {
          itemPrices.push(Number(item.item_price));
        });
        const initialValue = 0;
        const total = itemPrices.reduce((accumulator, currentValue) => accumulator + currentValue,
          initialValue);
        const payload = {
          total_amount: total,
          firebaseKey
        };
        updateOrder(payload).then(() => {
          closeOrderForm(firebaseKey);
        });
      });
    }
    // EDIT ORDER DETAILS
    if (e.target.id.includes('edit-order')) {
      const [, orderFirebaseKey, customerFirebaseKey] = e.target.id.split('--');
      getSingleCustomer(customerFirebaseKey)
        .then((customerObj) => {
          getSingleOrder(orderFirebaseKey)
            .then((orderObj) => {
              createEditOrderPage(customerObj, orderObj);
            });
        });
    }
    // DELETE ORDER
    if (e.target.id.includes('delete-order')) {
      const [, orderFirebaseKey, customerFirebaseKey] = e.target.id.split('--');
      deleteOrderItemRelationship(orderFirebaseKey, customerFirebaseKey).then(() => {
        mergeOrdersCustomersArray().then(showOrders);
      });
    }
    // ORDER DETAILS PAGE
    if (e.target.id.includes('details-order')) {
      const [, firebaseKey] = e.target.id.split('--');
      orderDetails(firebaseKey);
    }
    // DELETE ITEM
    if (e.target.id.includes('delete-item')) {
      console.log('click');
      const [, itemFirebaseKey, orderFirebaseKey] = e.target.id.split('--');
      deleteSingleItem(itemFirebaseKey).then(() => {
        orderDetails(orderFirebaseKey);
      });
    }
  });
};
export default domEvents;
