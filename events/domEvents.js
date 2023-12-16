import revenuePage from '../pages/revenuePage';
import createEditOrderPage from '../components/forms/createEditOrderPage';
import closeOrderForm from '../components/forms/closeOrderForm';

const domEvents = () => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id === 'view-revenue-button') {
      revenuePage();
    }
    if (e.target.id === 'create-new-order-form') {
      createEditOrderPage();
    }
    if (e.target.id.includes('close-order-button')) {
      closeOrderForm();
    }
  });
};

export default domEvents;
