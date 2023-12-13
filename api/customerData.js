import client from '../utils/client';
import { createNewOrder } from './orderData';

const endpoint = client.databaseURL;
// GET CUSTOMER
const getCustomer = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/customers/${firebaseKey}.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

// UPDATE CUSTOMER
const updateCustomer = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/customers/${payload.firebaseKey}.json`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

// CREATE NEW CUSTOMER
const createNewCustomer = (newCustomerPayload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/customers.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newCustomerPayload),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});
// .then(({ name }) => {
//   const patchPayload = { firebaseKey: name };
//   updateCustomer(patchPayload)
//     .then(getCustomer(patchPayload.firebaseKey))
//     .then((data) => {
//       createNewOrder();
//     });
// });

export { createNewCustomer, updateCustomer, getCustomer };
