import closeOrderForm from '../components/forms/closeOrderForm';
import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';
import { getOrderItems } from '../api/itemData';

const getOrderTotal = (firebaseKey) => {
  // const orderTotal = `
  // <div id="order-total-display"></div>
  // `;
  // renderToDOM('#view', orderTotal);

  getOrderItems(firebaseKey).then((data) => {
    console.log(data);
    const itemPrices = [];
    data.forEach((item) => {
      itemPrices.push(Number(item.item_price));
    });
    console.log(itemPrices);

    const initialValue = 0;
    const total = itemPrices.reduce((accumulator, currentValue) => accumulator + currentValue,
      initialValue);

    // document.getElementById('order-total-display').innerHTML = `Total: ${total}`;

    renderToDOM('#view', `Total: ${total}`);
  });
};

const closeOrderPage = (firebaseKey) => {
  clearDom();
  getOrderTotal(firebaseKey);
  closeOrderForm();
};

export default closeOrderPage;
