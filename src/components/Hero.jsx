import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-overlay hero-flex container">
        <div className="hero">
          <h2 className="hero-h2">New product</h2>
          <h3 className="hero-h3">
            XX99 Mark II <br /> headphones
          </h3>
          <p className="hero-h3-subtitle">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <Link to="#" className="hero-see-product see-product">
            see product
          </Link>
        </div>
        <div className="hero-img">
          <img
            className="black-headphone"
            src="/images/headphone-black2.jpg"
            alt="black headphones"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
