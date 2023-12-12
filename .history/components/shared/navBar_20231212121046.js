import renderToDOM from '../../utils/renderToDom';
import hHPWLogo from '../../assets/HHPW_Logo.png';

const navBar = () => {
  const domString = `<nav class="navbar navbar-expand-lg" style="background-color: #343a40;">
  <div class="container-fluid">
    <a class="navbar-brand"></a><img src=${hHPWLogo} id="nav-logo" alt="Hip Hop Pizza and WIngs Logo"></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
        <a class="nav-link nav-link-color" aria-current="page" id="view-orders">View Orders</a>
        </li>
        <li class="nav-item">
        <a class="nav-link nav-link-color" id="create-order">Create an Order</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>`;
  renderToDOM('#navigation', domString);
};

export default navBar;
