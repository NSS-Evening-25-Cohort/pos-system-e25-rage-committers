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
  const buttonRow = `
  <div id="orderItem-button-row">
  <div id="delete-item">Delete Item</div>
</div>
</div>
  </div>`;
  renderToDOM('#form-container', buttonRow);
};

export default orderDetails;
