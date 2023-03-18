import { Link } from "react-router-dom";
const Products = () => {
  return (
    <section className="speaker-earphone-link container">
      <div className="speaker-1-wrap speaker-1-wrap-flex">
        <div className="speaker-1-img-container">
          <img
            className="speaker-1-img"
            src="images/speaker-1-gray.png"
            alt="gray speaker"
          />
        </div>
        <div className="speaker-1-content">
          <h3 className="hero-h3">
            ZX9 <br /> speaker
          </h3>
          <p className="hero-h3-subtitle speaker-subtitle">
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <Link to="#" className="speaker-1-see-product see-product">
            see product
          </Link>
        </div>
      </div>

      <div className="speaker-2-wrap">
        <div className="speaker-2-content">
          <h4 className="product-h4">ZX7 Speaker</h4>
          <Link to="#" className="see-product-link see-product">
            see product
          </Link>
        </div>
      </div>

      <div className="earphone-1-wrap-flex">
        <div className="earphone-1-img-container">
          <img
            className="earphone-set-1-img"
            src="images/earphone-set-mobile-2.png"
            alt="wireless earphone"
          />
        </div>

        <div className="earphone-1-content">
          <h4 className="product-h4">YX1 Earphones</h4>
          <Link to="#" className="see-product-link see-product">
            see product
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Products;
