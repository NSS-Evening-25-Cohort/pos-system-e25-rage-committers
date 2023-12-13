import renderToDOM from '../../utils/renderToDom';

const orderTypeDropdown = () => {
  const domString = `
    <label for="create-order-form-dropdown"  class="create-order-form-label">Select an Order Type</label>
    <select class="form-control" id="order-type" >
      <option value="">Select an Order</option>;
      <option value="Email">Email</option>
      <option value="Phone">Phone</option>
    </select>`;

  renderToDOM('#order-type-dropdown', domString);
};

export default orderTypeDropdown;
