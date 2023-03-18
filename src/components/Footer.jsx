import { Link, NavLink } from "react-router-dom";
import { FaFacebookSquare, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container container">
        <div className="footer-logo-nav footer-logo-nav-flex">
          <h1 className="audiophile-logo footer-audiophile-logo">
            <Link to="/">audiophile</Link>
          </h1>
          <nav className="nav footer-nav">
            <ul className="nav-list nav-list-flex footer-nav-list-flex">
              <li className="nav-list-item footer-nav-list-item">
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-list-item footer-nav-list-item">
                <NavLink className="nav-link" to="/headphones">
                  Headphones
                </NavLink>
              </li>
              <li className="nav-list-item footer-nav-list-item">
                <NavLink className="nav-link" to="/speakers">
                  Speakers
                </NavLink>
              </li>
              <li className="nav-list-item footer-nav-list-item">
                <NavLink className="nav-link" to="/earphones">
                  Earphones
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>

        <p className="footer-company-info">
          Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we're open 7 days a week
        </p>

        <div className="footer-copyright-socials footer-copyright-socials-flex">
          <nav className="social-links-nav">
            <Link className="social-links" to="#">
              <FaFacebookSquare className="fa-2x" />
            </Link>
            <Link className="social-links" to="#">
              <FaTwitter className="fa-2x" />
            </Link>
            <Link className="social-links" to="#">
              <FaInstagram className="fa-2x" />
            </Link>
          </nav>

          <p className="footer-copyright">
            Copyright 2021. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
