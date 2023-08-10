//import "./index.css";
import HamburgerIcon from "../../assets/images/image.png";

const Header = () => {
  return (
    <header>
      <div className="header-container header-container-flex container">
        <h1 className="audiophile-logo">
          <a href="index.html">audiophile</a>
        </h1>
        <div className="header-nav-container">
          <img
            src={HamburgerIcon}
            alt="dropdown menu"
            className="menu-svg"
            id="menu-svg"
            width="25"
            height="25"
          />
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

        <div className="cart-overlay hide">
          <div className="cart-container-div">
            <header className="cart-header">
              <h4 className="cart-h4">
                Cart(<span id="cart-entries">0</span>)
              </h4>
              <button className="remove-cart-content-btn">Remove all</button>
            </header>

            <div className="cart-content-container">
              <div className="cart-content-height-container">
                <div className="cart-content"></div>
              </div>

              <div className="total-cost-container">
                <p>Total</p>
                <h4 className="total-cost-h4">
                  $<span id="total-cost">0</span>
                </h4>
              </div>
              <a
                href="checkout.html"
                className="hero-see-product see-product checkout-link"
              >
                Checkout
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
