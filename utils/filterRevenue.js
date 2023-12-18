import { getClosedOrders } from '../api/orderData';
import revenuePage from '../pages/revenuePage';

const filterRevenue = () => {
  const yearInput = document.getElementById('year').value;
  const monthInput = document.getElementById('month').value;
  const dayInput = document.getElementById('day').value;
  getClosedOrders().then((closedOrderArray) => {
    if (!monthInput && !dayInput) {
      const filteredArray = closedOrderArray.filter(
        (order) => order.time_submitted.slice(0, 4) === yearInput
      );
      revenuePage(filteredArray);
    } if (monthInput && !dayInput) {
      const filteredArray = closedOrderArray.filter(
        (order) => order.time_submitted.slice(5, 7) === monthInput
        && order.time_submitted.slice(0, 4) === yearInput
      );
      revenuePage(filteredArray);
    } if (monthInput && dayInput) {
      const filteredArray = closedOrderArray.filter(
        (order) => order.time_submitted.slice(5, 7) === monthInput
        && order.time_submitted.slice(0, 4) === yearInput
        && order.time_submitted.slice(8, 10) === dayInput
      );
      revenuePage(filteredArray);
    }
  });
};

export default filterRevenue;
