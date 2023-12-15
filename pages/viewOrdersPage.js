import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';
import { getSingleCustomer } from '../api/customerData';

const showOrders = (array) => {
  clearDom();
  const renderOrderCards = (domStringPlus) => {
    renderToDOM('#order-container', domStringPlus);
  };

  let domString = '';
  array.forEach((order) => {
    getSingleCustomer(order.customer_id).then((customer) => {
      const orderTypeFormatted = order.order_type.replace('_', '-');
      domString
      += `<div class="view-orders-container">
      <div class="card" style="width: 17rem; height: ">
        <div class="card-body">
          <h5 class="card-title">${customer.customer_name}</h5>
          <p class="card-text"><b>Order Status:</b>  ${order.order_status}</p>
          <p class="card-text"><b>Customer Phone No:</b>  ${customer.customer_phone_no}</p>
          <p class="card-text"><b>Customer Email:</b>  ${customer.customer_email}</p>
          <p class="card-text"><b>Order Type:</b>  ${orderTypeFormatted}</p>
          <div class="view-order-action-row">
            <a href="#" id="edit-order--${order.firebaseKey}" class="card-link">Edit Order</a>
            <a href="#" id="delete-order--${order.firebaseKey}" class="card-link-delete">Delete Order</a>
          </div>
        </div>
      </div>
    </div>`;
      renderOrderCards(domString);
    });
  });
};

export default showOrders;
