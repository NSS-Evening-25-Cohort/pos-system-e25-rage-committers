import loginButton from '../components/buttons/loginButton';
import bigLogo from '../components/logos/bigLogo';
import renderToDOM from '../utils/renderToDom';

const loginPage = () => {
  const domString = `
  <div>
    <div id="bigLogo"></div>
    <div id="loginBtnSpot"></div>
  </div>`;

  renderToDOM('#app', domString);

  bigLogo();
  loginButton();
};

export default loginPage;
