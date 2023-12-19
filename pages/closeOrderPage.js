import closeOrderForm from '../components/forms/closeOrderForm';
import clearDom from '../utils/clearDom';
// import { endpoint } from '../utils/closeOrder';
// import renderToDOM from '../utils/renderToDom';

// const getOrderTotal = (firebaseKey) => {
//   const getItemsFromOrder = () => new Promise((resolve, reject) => {
//     fetch(`${endpoint}/items.json?orderBy="order_id"&equalTo=${firebaseKey}`, {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     })
//       .then((response) => response.json())
//       .then((data) => resolve(data))
//       .catch(reject);
//   });
//   const orderTotal = `
//   <div id="order-total-display"><div id="revenue"></div></div>
//   `;
//   renderToDOM('#view', orderTotal);

//   getItemsFromOrder().then((data) => {
//     console.log(data);
//     const itemPrices = [];
//     data.forEach((item) => {
//       itemPrices.push(item.item_price);
//     });

//     const initialValue = 0;
//     const total = itemPrices.reduce((accumulator, currentValue) => accumulator + currentValue,
//       initialValue);

//     document.getElementById('order-total-display').innerHTML = `Total: ${total}`;
//   });
// };

const closeOrderPage = (firebaseKey) => {
  clearDom();
  // getOrderTotal(firebaseKey);
  closeOrderForm();
};

// eslint-disable-next-line import/prefer-default-export
export { closeOrderPage };
