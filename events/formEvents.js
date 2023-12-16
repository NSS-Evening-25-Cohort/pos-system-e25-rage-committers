import {
  createNewCustomer,
  updateCustomer,
} from '../api/customerData';
import { createNewOrder, updateOrder, getOrders } from '../api/orderData';
import getTheTime from '../utils/getTheTime';
import orderDetails from '../pages/orderDetails';
import showOrders from '../pages/viewOrdersPage';

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
  });
  document.addEventListener('click', (e) => {
    if (e.target.id.includes('update-order')) {
      const [, firebaseKey] = e.target.id.split('--');
      const payload = {
        orderName: document.querySelector('#order-name').value,
        customerPhone: document.querySelector('#customer-phone').value,
        customerEmail: document.querySelector('#customer-email').value,
        firebaseKey,
      };
      updateOrder(payload).then(() => {
        getOrders().then(showOrders);
      });
    }
  });
};
export default formEvents;
