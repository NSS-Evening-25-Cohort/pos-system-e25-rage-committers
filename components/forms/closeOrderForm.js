import renderToDOM from '../../utils/renderToDom';
import clearDom from '../../utils/clearDom';
import getOrderTotal from '../../utils/getOrderTotal';

const closeOrderForm = (firebaseKey) => {
  clearDom();
  const domString1 = ' <div id="order-total-display"></div>';
  renderToDOM('#view', domString1);
  getOrderTotal(firebaseKey);

  const domString = `
  <form id="close-order-form--${firebaseKey}">
    <div class="mb-3">
      <label for="tip-amount" class="form-label">Tip Amount</label>
      <input type="text" class="form-control" id="tip-amount">
    </div>
    <div class="dropdown">
      <select name="payment-type" id="payment-type">
        <option value="">Choose a Payment Type</option>
        <option value='cash'>Cash</option>
        <option value='credit'>Credit</option>
        <option value='mobile'>Mobile Payment</option>
      </select>
    </div>
    <button type="submit" id="submit-close" class="btn btn-primary">Submit</button>
  </form>`;

  renderToDOM('#form-container', domString);
};

export default closeOrderForm;
