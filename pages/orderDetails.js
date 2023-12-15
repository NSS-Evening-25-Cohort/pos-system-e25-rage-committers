import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';
import renderOrderItems from '../utils/renderOrderItems';

const orderDetails = (firebaseKey) => {
  clearDom();
  const orderTotal = `
  <div id="order-total-display">Total: <div id="revenue"></div></div>
  `;
  renderToDOM('#view', orderTotal);
  renderOrderItems(firebaseKey);
};

export default orderDetails;
