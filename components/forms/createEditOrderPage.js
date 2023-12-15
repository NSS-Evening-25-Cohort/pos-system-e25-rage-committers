import clearDom from '../../utils/clearDom';
import renderToDOM from '../../utils/renderToDom';
import orderTypeDropdown from './orderTypeDropdown';

const createEditOrderPage = () => {
  clearDom();
  const domString = `
  <form id="create-order-form" class="mb-4">
  <div class="form-group">
    <label for="image" class="create-order-form-label">Order Name</label>
    <input type="text" class="form-control" id="order-name" value="" >
  </div>
  <div class="form-group">
    <label for="image" class="create-order-form-label">Customer Phone No.</label>
    <input type="text" class="form-control" id="customer-phone" value="" >
  </div>
  <div class="form-group">
    <label for="title"  class="create-order-form-label">Customer Email</label>
    <input type="email" class="form-control" id="customer-email" aria-describedby="Email" value="" >
  </div>
  <div id="order-type-dropdown" class="form-group">
  </div>
  <button type="submit" id="create-order-button" class="btn btn-success">Create/Edit Order</button>
</form>`;
  renderToDOM('#form-container', domString);
  orderTypeDropdown();
};

export default createEditOrderPage;
