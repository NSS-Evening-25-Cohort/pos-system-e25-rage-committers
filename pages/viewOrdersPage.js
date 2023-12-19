import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const showOrders = (array) => {
  clearDom();
  const renderOrderCards = (domStringPlus) => {
    renderToDOM('#order-container', domStringPlus);
  };

  let domString = '';
  array.forEach((order) => {
    const orderTypeFormatted = order.order_type.replace('_', '-');
    domString
            += `<div class="view-orders-container">
            <div class="card" style="width: 17rem; height: 17rem; ${order.order_status === 'closed' ? 'background: rgb(186, 186, 186)' : ''}">
              <div class="card-body">
                <h5 class="card-title">${order.customer_name}</h5>
                <p class="card-text"><b>Order Status:</b>  ${order.order_status}</p>
                <p class="card-text"><b>Customer Phone:</b>  ${order.customer_phone_no}</p>
                <p class="card-text"><b>Customer Email:</b>  ${order.customer_email}</p>
                <p class="card-text"><b>Order Type:</b>  ${orderTypeFormatted}</p>
                <div class="view-order-action-row">
                  <div class="details-edit">
                    <a href="#" id="edit-order--${order.firebaseKey}" class="card-link-details">Edit</a>
                    <a href="#" id="details-order--${order.firebaseKey}" class="card-link-edit">Details</a>
                    </div>
                  <div class="details-delete">
                  <a href="#" id="delete-order--${order.firebaseKey}" class="card-link-delete">Delete</a>
                </div>
              </div>
            </div>
          </div>
        </div>`;
    renderOrderCards(domString);
  });
};

export default showOrders;
