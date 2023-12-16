import clearDom from '../../utils/clearDom';
import renderToDOM from '../../utils/renderToDom';
import orderTypeDropdown from './orderTypeDropdown';

const createEditItemForm = (orderFirebaseKey, item = {}) => {
  clearDom();
  const domString = `  
  <form id="${item.firebaseKey ? `update-item--${item.firebaseKey}` : `create-item--${orderFirebaseKey}`}" class="mb-4">
  <div class="form-group">
    <label for="item-name" class="create-order-form-label">Item Name</label>
    <input type="text" class="form-control" id="item-name" placeholder="Item Name" value="" /required>
  </div>
  <div class="form-group">
    <label for="image" class="create-order-form-label">Item Price</label>
    <input type="number" id="item-price" min="0" step="0.01" class="form-control" placeholder="Price" value="" /required>
  </div>
  <button type="submit" id="add-item-button--${orderFirebaseKey}" class="btn btn-success">Add/Edit Item</button>
</form>`;
  renderToDOM('#form-container', domString);
};

// const createEditItemForm = (orderFirebaseKey, item = {}) => {
//   clearDom();
//   const domString = `
//   <form id="${item.firebaseKey ? `update-item--${item.firebaseKey}` : `create-item--${orderFirebaseKey}`}" class="mb-4">
//   <div class="form-group">
//     <label id="item-name">Item Name</label>
//       <input type="text" id="item-name" class="form-control" />
//     <label id="item-price">Item Price</label>
//       <input id="item-price" type="text" value= "this value" class="form-control" />
//   </div>

//   <button type="submit" id="create-item-button" class="btn btn-success">Create/Edit Order</button>
// </form>`;
//   renderToDOM('#form-container', domString);
// };

export default createEditItemForm;
