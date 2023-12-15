import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const orderDetails = (firebaseKey) => {
  clearDom();
  console.warn(`use this firebase key for ur stuff. It's the primary key for the order ;): ${firebaseKey}`);
  const orderTotal = `
  <div id="order-total-display">Total: <div id="revenue"></div></div>
  `;
  renderToDOM('#view', orderTotal);
};

export default orderDetails;
