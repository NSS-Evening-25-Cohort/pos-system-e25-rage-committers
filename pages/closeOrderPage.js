import closeOrderForm from '../components/forms/closeOrderForm';
import clearDom from '../utils/clearDom';
import { endpoint } from '../utils/closeOrder';

const getOrderTotal = (firebaseKey) => {
  const grabOrderTotal = () => new Promise((resolve, reject) => {
    fetch(`${endpoint}/orders/${firebaseKey}.json`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch(reject);
  });

  grabOrderTotal(firebaseKey)
    // eslint-disable-next-line no-console
    .then((data) => { console.log(data); });
};

// const orderTotalNum = '';
//   const orderTotal = `
//   <div id="order-total-display">Total: ${orderTotalNum}<div id="revenue"></div></div>
//   `;
//   renderToDOM('#view', orderTotal);

const closeOrderPage = (firebaseKey) => {
  clearDom();
  getOrderTotal(firebaseKey);
  closeOrderForm();
};

export { closeOrderPage, getOrderTotal };
