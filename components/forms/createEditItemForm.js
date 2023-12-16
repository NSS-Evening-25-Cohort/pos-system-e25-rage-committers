import clearDom from '../../utils/clearDom';
import renderToDOM from '../../utils/renderToDom';
import orderTypeDropdown from './orderTypeDropdown';

const createEditItemPage = (obj = {}) => {
  clearDom();
  const domString = `
  <form id="${obj.firebaseKey ? `update-item--${obj.firebaseKey}` : 'submit-item'}" class="mb-4">
  <div class="form-group">
    <label id="item-name">Item-Name</label>
    <input type="text" class="form-control" id="order-name" value="${obj.item_name || ''}" >
    <label id="item-price">Item Price</label>
    <input type="text" class="form-control" id="order-price" value="${obj.item_price || ''}" >
  </div>
  
  <button type="submit" id="create-item-button" class="btn btn-success">Create/Edit Order</button>
</form>`;
  renderToDOM('#form-container', domString);
  orderTypeDropdown();
};

export default createEditItemPage;
