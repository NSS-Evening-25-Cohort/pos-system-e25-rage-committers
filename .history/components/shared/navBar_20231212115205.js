import renderToDOM from '../../utils/renderToDom';
import hHPWLogo from '../../assets/HHPW_Logo.png';

const navBar = () => {
  const domString = `    <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark mb-5">
  <div class="container-fluid">
      <a class="navbar-brand title">
      </a><img src=${hHPWLogo} id="nav-logo" alt="Hip Hop Pizza and WIngs Logo">
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item active">
            <a class="nav-link" href="#" id="view-orders">
              View Orders <span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" id="create-order">Create an Order</a>
          </li>
          <li>
          <div class="right-content">
            <input class="form-control mr-sm-2 search" id="search" placeholder="Search" aria-label="Search" />
            <div class="logout-button" id="logout-button"></div>
          </div>
          </div>
      </div>
    </nav>`;
  renderToDOM('#navigation', domString);
  console.warn('there will be a navBar soon');
};

export default navBar;
