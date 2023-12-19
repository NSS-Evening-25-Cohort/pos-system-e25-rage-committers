import { getOrderItems } from '../api/itemData';
import renderToDOM from './renderToDom';

const getOrderTotal = (firebaseKey) => {
  getOrderItems(firebaseKey).then((data) => {
    const itemPrices = [];
    data.forEach((item) => {
      itemPrices.push(Number(item.item_price));
    });
    const initialValue = 0;
    const total = itemPrices.reduce((accumulator, currentValue) => accumulator + currentValue,
      initialValue);
    renderToDOM('#order-total-display', `Total: ${total}`);
  });
};

export default getOrderTotal;
