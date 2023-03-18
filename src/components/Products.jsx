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
          <a
            href="speaker-product-1.html"
            className="speaker-1-see-product see-product"
          >
            see product
          </a>
        </div>
      </div>

      <div className="speaker-2-wrap">
        <div className="speaker-2-content">
          <h4 className="product-h4">ZX7 Speaker</h4>
          <a
            href="speaker-product-2.html"
            className="see-product-link see-product"
          >
            see product
          </a>
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
          <a
            href="earphone-product-1.html"
            className="see-product-link see-product"
          >
            see product
          </a>
        </div>
      </div>
    </section>
  );
};

export default Products;
