import renderToDOM from '../../utils/renderToDom';

const orderTypeDropdown = (order) => {
  if (!order) {
    throw new Error('No order provided');
  }
  const domString = `
    <label for="create-order-form-dropdown"  class="create-order-form-label">Select an Order Type</label>
    <select class="form-control" id="order-type">
      <option value="">Select an Order</option>
      <option value="call_in">Call-In</option>
      <option value="walk_in">Walk-in</option>
      <option value="digital">Digital</option>
    </select>`;

  renderToDOM('#order-type-dropdown', domString);
  if (order.order_type === 'call_in') {
    document.getElementById('order-type').value = 'call_in';
  }
  if (order.order_type === 'walk_in') {
    document.getElementById('order-type').value = 'walk_in';
  }
  if (order.order_type === 'digital') {
    document.getElementById('order-type').value = 'digital';
  }
};

export default orderTypeDropdown;
