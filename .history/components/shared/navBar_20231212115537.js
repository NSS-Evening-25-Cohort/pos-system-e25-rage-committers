import renderToDOM from '../../utils/renderToDom';
import hHPWLogo from '../../assets/HHPW_Logo.png';

const navBar = () => {
  const domString = `<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <a class="navbar-brand" href="#">Navbar</a>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav> 
  
  <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark mb-5">
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
            <input
              class="form-control mr-sm-2"
              id="search"
              placeholder="Search Orders"
              aria-label="Search"
            />
            <span class="navbar-text">
              <div id="cart-button"></div>
              <div id="logout-button"></div>
            </span>
      </div>
    </nav>`;
  renderToDOM('#navigation', domString);
};

export default navBar;
