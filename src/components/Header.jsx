const Header = () => {
  return (
    <header>
      <div className="header-container header-container-flex container">
        <h1 className="audiophile-logo">
          <a href="index.html">audiophile</a>
        </h1>
        <div className="header-nav-container">
          <svg
            className="menu-svg"
            id="menu-svg"
            viewBox="0 0 90 60"
            width="25"
            height="25"
          >
            <rect width="100" height="15"></rect>
            <rect y="30" width="100" height="15"></rect>
            <rect y="60" width="100" height="15"></rect>
          </svg>

          <nav className="nav nav-flex">
            <ul className="nav-list nav-list-flex hide">
              <li className="nav-list-item">
                <a className="nav-link" href="index.html">
                  Home
                </a>
              </li>
              <li className="nav-list-item">
                <a className="nav-link" href="headphones.html">
                  Headphones
                </a>
              </li>
              <li className="nav-list-item">
                <a className="nav-link" href="speakers.html">
                  Speakers
                </a>
              </li>
              <li className="nav-list-item">
                <a className="nav-link" href="earphones.html">
                  Earphones
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <button className="cart-container">
          <img src="images/shopping-cart.svg" alt="cart" className="cart" />
          <span className="cart-entries">0</span>
        </button>
      </div>
    </header>
  );
};
export default Header;
