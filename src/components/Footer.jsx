import { FaFacebookSquare, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container container">
        <div className="footer-logo-nav footer-logo-nav-flex">
          <h1 className="audiophile-logo footer-audiophile-logo">
            <a href="index.html">audiophile</a>
          </h1>
          <nav className="nav footer-nav">
            <ul className="nav-list nav-list-flex footer-nav-list-flex">
              <li className="nav-list-item footer-nav-list-item">
                <a className="nav-link" href="index.html">
                  Home
                </a>
              </li>
              <li className="nav-list-item footer-nav-list-item">
                <a className="nav-link" href="headphones.html">
                  Headphones
                </a>
              </li>
              <li className="nav-list-item footer-nav-list-item">
                <a className="nav-link" href="speakers.html">
                  Speakers
                </a>
              </li>
              <li className="nav-list-item footer-nav-list-item">
                <a className="nav-link" href="earphones.html">
                  Earphones
                </a>
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
            <a className="social-links" href="#">
              <FaFacebookSquare className="fa-2x" />
            </a>
            <a className="social-links" href="#">
              <FaTwitter className="fa-2x" />
            </a>
            <a className="social-links" href="#">
              <FaInstagram className="fa-2x" />
            </a>
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
