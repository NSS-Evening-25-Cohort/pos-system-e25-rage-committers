import renderToDOM from '../../utils/renderToDom';
import hHPWLogo from '../../assets/HHPW_Logo.png';

const navBar = () => {
  const domString = `    <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark mb-5">
  <div class="container-fluid">
      <a class="navbar-brand title">
      </a> id="" <img src=${hHPWLogo} alt="Hip Hop Pizza and WIngs Logo">
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item active">
            <a class="nav-link" href="#" id="all-books">
              All Books <span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" id="sale-books">Books on Sale</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" id="authors">Authors</a>
          </li>
          <li>
          <input
            class="form-control mr-sm-2"
            id="search"
            placeholder="Search Book Titles"
            aria-label="Search"
          />
          </li>
        </ul>
        <span class="navbar-text">
          <div id="cart-button"></div>
          <div id="logout-button"></div>
        </span>
      </div>
      </div>
    </nav>`;
  renderToDOM('#navigation', domString);
  console.warn('there will be a navBar soon');
};

export default navBar;
