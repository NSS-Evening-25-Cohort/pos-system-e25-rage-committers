import {
  createNewCustomer,
  updateCustomer
} from '../api/customerData';

const formEvents = () => {
  document.getElementById('form-container').addEventListener('submit', (e) => {
    // CREATE A NEW ORDER
    if (e.target.id === 'create-order-form') {
      e.preventDefault();
      const newCustomerPayload = {
        customer_name: document.getElementById('order-name').value,
        customer_phone_no: document.getElementById('customer-phone').value,
        customer_email: document.getElementById('customer-email').value,
      };
      createNewCustomer(newCustomerPayload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };
        updateCustomer(patchPayload).then(() => {});
      });
      // .then(({ name }) => {
      //   const patchPayload = { firebaseKey: name };
      //   updateLanguage(patchPayload)
      // const newOrderPayload = {
      //   order_type: document.getElementById('order-type').value
      // };
    }
  });
};

export default formEvents;
