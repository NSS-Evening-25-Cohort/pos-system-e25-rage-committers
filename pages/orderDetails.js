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
  <button id="add-items-button--${firebaseKey}" type="button" class="btn btn-success">Add Items</button>
  <button id="close-order--${firebaseKey}" "type="button" class="btn btn-primary">Go To Payment</button>
</div>
</div>
  </div>`;
  renderToDOM('#form-container', buttonRow);
};

export default orderDetails;
