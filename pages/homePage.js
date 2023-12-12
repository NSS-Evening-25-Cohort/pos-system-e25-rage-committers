import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const takeMeHome = () => {
  console.warn('Home Page Running');
  clearDom();
  const domString = '<button type="button" id="view-revenue-button"class="btn btn-warning">View Revenue</button>';
  renderToDOM('#view', domString);
};

export default takeMeHome;
