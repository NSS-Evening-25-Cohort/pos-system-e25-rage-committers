import renderToDOM from '../../utils/renderToDom';
import img from '../../assets/HHPW_Logo.png';

const bigLogo = () => {
  const domString = `
  <img src=${img}>`;

  renderToDOM('#bigLogo', domString);
};

export default bigLogo;
