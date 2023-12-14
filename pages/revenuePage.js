import getClosedOrders from '../api/orderData';
import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const revenuePage = () => {
  clearDom();
  const domString = '<div id="total-revenue"></div>';
  renderToDOM('#view', domString);
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
    const domString2 = `You're total revenue is $${totalRevenue}`;
    renderToDOM('#total-revenue', domString2);
  });
};

export default revenuePage;
