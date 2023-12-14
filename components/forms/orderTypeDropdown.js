import renderToDOM from '../../utils/renderToDom';

const orderTypeDropdown = () => {
  const domString = `
    <label for="create-order-form-dropdown"  class="create-order-form-label">Select an Order Type</label>
    <select class="form-control" id="order-type" >
      <option value="">Select an Order</option>;
      <option value="call_in">Call-In</option>
      <option value="walk_in">Walk-in</option>
      <option value="digital">Digital</option>
    </select>`;

  renderToDOM('#order-type-dropdown', domString);
};

export default orderTypeDropdown;
