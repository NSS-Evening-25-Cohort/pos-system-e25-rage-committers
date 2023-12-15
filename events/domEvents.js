import revenuePage from '../pages/revenuePage';
import createEditOrderPage from '../components/forms/createEditOrderPage';

const domEvents = () => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id === 'view-revenue-button') {
      revenuePage();
    }
    if (e.target.id === 'create-new-order-form') {
      createEditOrderPage();
    }
  });
};

export default domEvents;
