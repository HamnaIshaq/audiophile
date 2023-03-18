import { Link, NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";

const Header = () => {
  return (
    <header>
      <div className="header-container header-container-flex container">
        <h1 className="audiophile-logo">
          <Link to="/">audiophile</Link>
        </h1>
        <div className="header-nav-container">
          <FaBars className="menu-svg fa-2x" id="menu-svg" />

          <nav className="nav nav-flex">
            <ul className="nav-list nav-list-flex hide">
              <li className="nav-list-item">
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-list-item">
                <NavLink className="nav-link" to="/headphones">
                  Headphones
                </NavLink>
              </li>
              <li className="nav-list-item">
                <NavLink className="nav-link" to="/speakers">
                  Speakers
                </NavLink>
              </li>
              <li className="nav-list-item">
                <NavLink className="nav-link" to="/earphones">
                  Earphones
                </NavLink>
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
