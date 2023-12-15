import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const takeMeHome = () => {
  clearDom();
  const domString = `
    <div class="homepage-button-container">
      <div class="home-page-btns">
        <button type="button" id= "view-orders-button" class="btn btn-success">View Orders</button>
      </div>
      <div class="home-page-btns">
        <button type="button" id="view-revenue-button" class="btn btn-warning">View Revenue</button>
      </div>
      <div class="home-page-btns">
        <button type="button" id="create-new-order-form" class="btn btn-info">Create An Order</button>
      </div>
    </div>
  `;
  renderToDOM('#view', domString);
};

export default takeMeHome;
