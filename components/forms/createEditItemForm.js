import clearDom from '../../utils/clearDom';
import renderToDOM from '../../utils/renderToDom';

const createEditItemForm = (orderFirebaseKey, item = {}) => {
  clearDom();
  const domString = `  
  <form id="${item.firebaseKey ? `update-item--${item.firebaseKey}--${orderFirebaseKey}` : `create-item--${orderFirebaseKey}`}" class="mb-4">
  <div class="form-group">
    <label for="item-name" class="create-order-form-label">Item Name</label>
    <input type="text" class="form-control" id="item-name" placeholder="Item Name" value="${item.item_name || ''}" /required>
  </div>
  <div class="form-group">
    <label for="image" class="create-order-form-label">Item Price</label>
    <input type="number" id="item-price" min="0" step="0.01" class="form-control"  placeholder="Item Price" value="${item.item_price || ''}" /required>
  </div>
  <button type="submit" id="add-item-button--${orderFirebaseKey}" class="btn btn-success">Add/Edit Item</button>
</form>`;
  renderToDOM('#form-container', domString);
};
export default createEditItemForm;
