import {
  createNewCustomer,
  updateCustomer,
} from '../api/customerData';
import {
  createNewOrder, updateOrder,
} from '../api/orderData';
import getTheTime from '../utils/getTheTime';
import orderDetails from '../pages/orderDetails';
import { updateItem, createNewItem } from '../api/itemData';
import filterRevenue from '../utils/filterRevenue';

const formEvents = () => {
  document.getElementById('form-container').addEventListener('submit', (e) => {
    // CREATE A NEW ORDER
    if (e.target.id === 'create-order-form') {
      e.preventDefault();
      const customerPayload = {
        customer_name: document.getElementById('customer-name').value,
        customer_phone_no: document.getElementById('customer-phone').value,
        customer_email: document.getElementById('customer-email').value,
      };
      createNewCustomer(customerPayload)
        .then((data) => {
          const patchPayload = { firebaseKey: data.name };
          updateCustomer(patchPayload)
            .then((customerData) => {
              const orderPayload = {
                customer_id: customerData.firebaseKey,
                order_date: '',
                order_type: document.getElementById('order-type').value,
                payment_type: '',
                tip_amount: '',
                total_amount: '',
                order_status: 'open',
                time_submitted: getTheTime(),
              };
              createNewOrder(orderPayload)
                .then((orderData) => {
                  const patchPayload2 = { firebaseKey: orderData.name };
                  updateOrder(patchPayload2);
                  orderDetails(orderData.name);
                });
            });
        });
    }

    // CREATE -- CREATE/EDIT ITEM FORM
    if (e.target.id.includes('create-item')) {
      e.preventDefault();
      const [, firebaseKey] = e.target.id.split('--');
      const payload = {
        item_name: document.getElementById('item-name').value,
        item_price: document.getElementById('item-price').value,
        order_id: firebaseKey
      };
      createNewItem(payload)
        .then((data) => {
          const patchPayload = { firebaseKey: data.name };
          updateItem(patchPayload)
            .then(() => {
              orderDetails(firebaseKey);
            });
        });
    }
    // UPDATE -- CREATE/EDIT ITEM FORM
    if (e.target.id.includes('update-item')) {
      e.preventDefault();
      const [, itemFirebaseKey, orderFirebaseKey] = e.target.id.split('--');
      const payload = {
        item_name: document.getElementById('item-name').value,
        item_price: document.getElementById('item-price').value,
        firebaseKey: itemFirebaseKey
      };
      updateItem(payload)
        .then(orderDetails(orderFirebaseKey));
    }
  });
  document.getElementById('view').addEventListener('submit', (e) => {
    e.preventDefault();
    filterRevenue();
  });
};
export default formEvents;
