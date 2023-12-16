import clearDom from '../../utils/clearDom';
import renderToDOM from '../../utils/renderToDom';
import orderTypeDropdown from './orderTypeDropdown';

const createEditItemForm = (orderFirebaseKey, item = {}) => {
  clearDom();
  const domString = `
  <form id="${item.firebaseKey ? `update-item--${item.firebaseKey}` : `create-item--${orderFirebaseKey}`}" class="mb-4">
  <div class="form-group">
    <label id="item-name">Item Name</label>
      <input type="text" id="item-name" class="form-control" />
    <label id="item-price">Item Price</label>
      <input id="item-price" type="text" value= "this value" class="form-control" />
  </div>

  <button type="submit" id="create-item-button" class="btn btn-success">Create/Edit Order</button>
</form>`;
  renderToDOM('#form-container', domString);
};

export default createEditItemForm;
