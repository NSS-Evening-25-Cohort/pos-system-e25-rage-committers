import renderToDOM from '../../utils/renderToDom';

const closeOrderForm = () => {
  const domString = `
  <form>
    <div class="mb-3">
      <label for="tip-amount" class="form-label">Tip Amount</label>
      <input type="text" class="form-control" id="tip-amount">
    </div>
    <div class="dropdown">
      <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
        Payment Method
      </button>
      <ul id="drop-down" class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
        <li><a id="cash" class="dropdown-item" href="#">Cash</a></li>
        <li><a id="check" class="dropdown-item" href="#">Check</a></li>
        <li><a id="debit" class="dropdown-item" href="#">Debit</a></li>
        <li><a id="credit" class="dropdown-item" href="#">Credit</a></li>
        <li><a id="mobile-payment" class="dropdown-item" href="#">Mobile Payment</a></li>
      </ul>
    </div>
    <button type="submit" id="submit-close" class="btn btn-primary">Submit</button>
  </form>`;

  renderToDOM('#order-container', domString);
};

export default closeOrderForm;
