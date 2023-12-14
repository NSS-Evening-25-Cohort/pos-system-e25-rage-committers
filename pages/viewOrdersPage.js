import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const emptyOrders = () => {
  const domString = '<h1>No Orders</h1>';
  renderToDOM('#store', domString);
};
const showOrders = (array) => {
  clearDom();

  let domString = '';
  array.forEach((item) => {
    domString += `
      <div class="card">
        <img class="card-img-top" src=${item.name} alt=${item.order_status} style="height: 400px;">
        <div class="card-body" style="height: 180px;">
          <h5 class="card-title">${item.order_type}</h5>
            <hr>
            <i class="btn btn-success fas fa-eye" id="view-order-btn--${item.firebaseKey}"></i>
            <i id="edit-order-btn--${item.firebaseKey}" class="fas fa-edit btn btn-info"></i>
            <i id="delete-order-btn--${item.firebaseKey}" class="btn btn-danger fas fa-trash-alt"></i>
        </div>
      </div>`;
  });
  renderToDOM('#store', domString);
};

export { showOrders, emptyOrders };
