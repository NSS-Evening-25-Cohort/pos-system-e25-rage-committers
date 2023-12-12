import revenuePage from '../pages/revenuePage';

const domEvents = () => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id === 'view-revenue-button') {
      revenuePage();
    }
  });
  console.warn('there will be domevents soon');
};

export default domEvents;
