import renderToDOM from './renderToDom';
import { getOrderItems } from '../api/itemData';

const renderOrderItems = (firebaseKey) => {
  getOrderItems(firebaseKey).then((data) => {
    if (data.length > 0) {
      let domString = '';
      data.forEach((item) => {
        domString += `
    <div id="" class="card" style="width: 40rem;">
      <div class="card-body">
        <h5 class="card-title">${item.item_name}</h5>
        <h6 class="card-price mb-2 text-muted">PRICE: ${item.item_price}</h6>
        <div id="orderItem-button-row">
          <a href="#" id=edit-item--${item.firebaseKey}--${firebaseKey} class="card-link-edit-item">Edit Item</a>
          <a href="#" id=delete-item--${item.firebaseKey} class="card-link-delete-item">Delete Item</a>
        </div>
      </div>
  </div>
`;
      });
      renderToDOM('#item-container', domString);
      const domString3 = `
        <button id="add-items-button--${firebaseKey}" type="button" class="btn    btn-success">Add Items</button>
        <button id="close-order--${firebaseKey}" "type="button" class="btn btn-primary">Go To Payment</button>`;
      renderToDOM('#form-container', domString3);
    } else {
      const domString = `
      <div id='empty-item-form'>
      <div id='no-items-warning'>There are no items associated with this order.
      </div>
    </div>
    `;
      renderToDOM('#item-container', domString);
      const domString2 = `<button id="add-items-button--${firebaseKey}" type="button" class="btn btn-success">Add Items</button>`;
      renderToDOM('#form-container', domString2);
    }
  });
};

export default renderOrderItems;
