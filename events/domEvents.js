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
    if (e.target.id.includes('close-order')) {
      // eslint-disable-next-line
      const [, firebaseKey] = e.target.id.split('--');
      // TATIANNA CALL THIS FUNCTION TO RENDER THE CLOSE ORDER PAGE
      // THE FIREBASE KEY IS THE FIREBASE KEY OF THE ORDER YOU HAVE TO CLOSE OUT/UPDATE

      // closeOrderPage(firebaseKey);
    }
  });
};

export default domEvents;
