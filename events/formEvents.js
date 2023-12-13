import {
  createNewCustomer,
  updateCustomer,
  getCustomer
} from '../api/customerData';
import { createNewOrder, updateOrder } from '../api/orderData';

const formEvents = () => {
  document.getElementById('form-container').addEventListener('submit', (e) => {
    // CREATE A NEW ORDER
    if (e.target.id === 'create-order-form') {
      e.preventDefault();
      const customerPayload = {
        customer_name: document.getElementById('order-name').value,
        customer_phone_no: document.getElementById('customer-phone').value,
        customer_email: document.getElementById('customer-email').value,
      };
      createNewCustomer(customerPayload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };
        updateCustomer(patchPayload)
          .then((customerData) => {
            const orderPayload = {
              customer_id: customerData.firebaseKey,
              order_date: '',
              order_type: document.getElementById('order-type').value,
              payment_type: '',
              tip_amount: '',
              total_amount: '',
            };
            createNewOrder(orderPayload);
          });
      });
    }
  });
};

export default formEvents;
