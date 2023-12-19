import clearDom from '../../utils/clearDom';
import renderToDOM from '../../utils/renderToDom';
import orderTypeDropdown from './orderTypeDropdown';

const createEditOrderPage = (customers, orders) => {
  clearDom();
  const domString = `
  <form id="${customers.firebaseKey ? `update-order-form--${customers.firebaseKey}--${orders.firebaseKey}` : 'create-order-form'}" class="mb-4">
  <div class="form-group">
      <label for="order-name" class="create-order-form-label">Customer Name</label>
      <input type="text" class="form-control" id="customer-name" placeholder="Customer Name" value="${customers.customer_name || ''}" required>
    </div>
    <div class="form-group">
    <label for="customer-phone" class="create-order-form-label">Customer Phone</label>
    <input type="text" class="form-control" id="customer-phone" placeholder="Customer Phone" value="${customers.customer_phone_no || ''}" required>
  </div>
  <div class="form-group">
      <label for="customer_email" class="create-order-form-label">Customer Email</label>
      <input type="text" class="form-control" id="customer-email" placeholder="Customer Email" value="${customers.customer_email || ''}" required>
  </div>
  <div id="order-type-dropdown" class="form-group">
  </div>
  <button type="submit" id="${customers.firebaseKey ? `update-order--${customers.firebaseKey}` : 'create-order'}" class="btn btn-primary">${customers.firebaseKey ? 'Edit Order' : 'Submit Order'}</button>
  </form>`;
  renderToDOM('#form-container', domString);
  orderTypeDropdown(orders);
};
export default createEditOrderPage;
