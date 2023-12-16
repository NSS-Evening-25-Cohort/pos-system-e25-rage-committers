import clearDom from '../../utils/clearDom';
import renderToDOM from '../../utils/renderToDom';
import orderTypeDropdown from './orderTypeDropdown';

const createEditOrderPage = (obj) => {
  clearDom();
  const domString = `
  <form id="${obj.firebaseKey ? `update-order-form--${obj.firebaseKey}` : 'create-order-form'}" class="mb-4">
  <div class="form-group">
      <label for="order-name" class="create-order-form-label">Customer Name</label>
      <input type="text" class="form-control" id="customer-name" placeholder="Customer Name" placeholder="${obj.customerName || ''}" value="${obj.customerName || ''}" required>
    </div>
    <div class="form-group">
    <label for="customer-phone" class="create-order-form-label">Customer Phone</label>
    <input type="text" class="form-control" id="customer-phone" placeholder="Customer Phone" placeholder="${obj.customer_phone_no || ''}" value="${obj.customer_phone_no || ''}" required>
  </div>
  <div class="form-group">
      <label for="customer_email" class="create-order-form-label">Customer Email</label>
      <input type="text" class="form-control" id="customer-email" placeholder="Customer Email" placeholder="${obj.customer_email || ''}" value="${obj.customer_email || ''}" required>
  </div>
  <div id="order-type-dropdown" class="form-group">
  </div>
  <button type="submit" id="${obj.firebaseKey ? `update-order--${obj.firebaseKey}` : 'create-order-button" class="btn btn-success"'}>Create/Edit Order</button>
</form>`;
  renderToDOM('#form-container', domString);
  orderTypeDropdown();
};
export default createEditOrderPage;
