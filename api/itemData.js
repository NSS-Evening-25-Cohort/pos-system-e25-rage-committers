import client from '../utils/client';

const endpoint = client.databaseURL;

const getOrderItems = (orderId) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/items.json?orderBy="order_id"&equalTo="${orderId}"`, {
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
export default getOrderItems;
