import getOrderItems from '../api/itemData';
import renderToDOM from './renderToDom';

const renderOrderItems = (firebaseKey) => {
  getOrderItems('order3').then((data) => {
    if (data.length > 0) {
      let domString = '';
      data.forEach((item) => {
        domString += `
  <div id="orderItems">
    <div id="" class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">${item.item_name}</h5>
        <h6 class="card-price mb-2 text-muted">${item.item_price}</h6>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <div id="orderItem-button-row">
          <a href="#" id=Edit-Item--${item.firebaseKey} class="card-link">Edit Item</a>
          <a href="#" id=Delete-Item--${item.firebaseKey} class="card-link">Delete Item</a>
        </div>
      </div>
  </div>
</div>`;
      });
      domString += `    
      <div id="orderItem-button-row">
        <button id="add-items--${firebaseKey}" type="button" class="btn btn-success">Add Items</button>
        <button id="close-order--${firebaseKey}" "type="button" class="btn btn-primary">Go To Payment</button>
      </div>`;
      renderToDOM('#item-container', domString);
    } else {
      // eslint-disable-next-line
      const domString = 
    `<div id='empty-item-form'>
    <div id='no-items-warning'>There are no items associated with this order.</div>
    <div id="orderItem-button-row">
    <button id="add-items--${firebaseKey}" type="button" class="btn btn-success">Add Items</button>
</div>
</div>
    </div>`;
      renderToDOM('#item-container', domString);
    }
  });
};

export default renderOrderItems;
