import client from '../utils/client';

const endpoint = client.databaseURL;
// GET SINGLE CUSTOMER
const getSingleCustomer = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/customers.json?orderBy="firebaseKey"&equalTo="${firebaseKey}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        const objectify = Object.values(data);
        const customer = objectify[0];
        resolve(customer);
      } else {
        resolve({});
      }
    })
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

export { createNewCustomer, updateCustomer, getSingleCustomer };
