import clearDom from '../../utils/clearDom';
import renderToDOM from '../../utils/renderToDom';
import orderTypeDropdown from './orderTypeDropdown';

const createEditOrderPage = (obj) => {
  clearDom();
  const domString = `
  <form id="${obj.firebaseKey ? `update-order--${obj.firebaseKey}` : 'submit-order'}" class="mb-4">
  <div class="form-group">
      <label for="order-name">Customer Name</label>
      <input type="text" class="form-control" id="customer-name" placeholder="Customer Name" value="${obj.customerName || ''}" required>
    </div>
    <div class="form-group">
    <label for="customer-phone">Customer Phone</label>
    <input type="text" class="form-control" id="customer-phone" placeholder="Customer Phone" value="${obj.customer_phone_no || ''}" required>
  </div>
  <div class="form-group">
      <label for="customer_email">Customer Email</label>
      <input type="text" class="customer_email" id="customer_email" placeholder="Customer Email" value="${obj.customer_email || ''}" required>
  </div>
  <div id="order-type-dropdown" class="form-group">
  </div>
  <button type="submit" id="create-order-button" class="btn btn-success">Create/Edit Order</button>
</form>`;
  renderToDOM('#form-container', domString);
  orderTypeDropdown();
};
export default createEditOrderPage;
