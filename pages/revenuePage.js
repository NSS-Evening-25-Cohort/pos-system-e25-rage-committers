import { getClosedOrders } from '../api/orderData';
import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';
import revenueFilterBar from '../components/forms/revenueFilterBar';
import filterRevenue from '../utils/filterRevenue';

const revenuePage = () => {
  clearDom();
  const domString = `
  <div id="revenue-page">
    <div id="rev-header">REVENUE</div>
    <div id="rev-filter-bar">hey</div>
    <div id="total-revenue"></div>
    <div id="line-chart"></div>
    <div id="total-tips"></div>
    <div id="order-types">
      <div id="total-callin"></div>
      <div id="total-walkin"></div>
      <div id="total-digital"></div>
    </div>
    <div id="payment-types">  
      <div id="cash"></div>
      <div id="credit"></div>
      <div id="mobile"></div>
    </div>
  </div>
  `;
  renderToDOM('#view', domString);
  revenueFilterBar();

  // CALCULATE TOTAL REVENUE
  getClosedOrders().then((closedOrderArray) => {
    const orderTotalsArray = [];
    closedOrderArray.forEach((order) => {
      const singleTotal = order.total_amount;
      orderTotalsArray.push(singleTotal);
    });
    const initialValue = 0;
    const totalRevenue = orderTotalsArray.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      initialValue,
    );
    const domString2 = `TOTAL REVENUE: $${totalRevenue}`;
    renderToDOM('#total-revenue', domString2);
  });

  // CALCULATE TOTAL TIPS
  getClosedOrders().then((closedOrderArray) => {
    const orderTipsArray = [];
    closedOrderArray.forEach((order) => {
      const singleTip = order.tip_amount;
      orderTipsArray.push(singleTip);
    });
    const initialValue = 0;
    const totalTips = orderTipsArray.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      initialValue,
    );
    const domString3 = `TOTAL TIPS: $${totalTips}`;
    renderToDOM('#total-tips', domString3);
  });

  // CALCULATE ALL ORDER TYPES
  getClosedOrders().then((closedOrderArray) => {
    let walkInCounter = 0;
    let callInCounter = 0;
    let digitalCounter = 0;
    closedOrderArray.forEach((order) => {
      if (order.order_type === 'call_in') {
        callInCounter += 1;
      }
      if (order.order_type === 'walk_in') {
        walkInCounter += 1;
      }
      if (order.order_type === 'digital') {
        digitalCounter += 1;
      }
    });
    renderToDOM('#total-callin', `TOTAL CALL IN ORDERS: ${callInCounter}`);
    renderToDOM('#total-walkin', `TOTAL WALK IN ORDERS: ${walkInCounter}`);
    renderToDOM('#total-digital', `TOTAL DIGITAL ORDERS: ${digitalCounter}`);
  });

  //  FILTER REVENUE
  document.getElementById('view').addEventListener('submit', (e) => {
    e.preventDefault();
    filterRevenue();
  });
};

export default revenuePage;
