import client from '../utils/client';

const endpoint = client.databaseURL;
// UPDATE ORDER
const updateOrder = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/orders/${payload.firebaseKey}.json`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

// CREATE NEW ORDER
const createNewOrder = (newOrderPayload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/orders.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newOrderPayload),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
}).then(({ name }) => {
  const patchPayload = { firebaseKey: name };
  updateOrder(patchPayload);
});

// GET CLOSED ORDERS
const getClosedOrders = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/orders.json?orderBy="order_status"&equalTo="closed"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        resolve(Object.values(data));
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

export { getClosedOrders, createNewOrder, updateOrder };
