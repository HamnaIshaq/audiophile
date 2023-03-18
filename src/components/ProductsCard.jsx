import { FaAngleRight } from "react-icons/fa";

const ProductsCard = () => {
  return (
    <section className="audio-products-link-section audio-products-link-section-flex container">
      <div className="audio-products audio-products-redirect">
        <img
          className="audio-products-picture audio-products-picture-headphone"
          src="/images/headphone-desktop.png"
          alt="headphones"
        />

        <h4 className="audio-products-h4">headphones</h4>
        <a
          href="headphones.html"
          className="audio-products-h4-link audio-products-h4-link"
        >
          shop
          <FaAngleRight />
        </a>
      </div>
      <div className="audio-products audio-products-container">
        <img
          className="audio-products-picture audio-products-picture-headphone"
          src="/images/speaker-desktop.png"
          alt="speakers"
        />
        <h4 className="audio-products-h4">speakers</h4>
        <a href="speakers.html" className="audio-products-h4-link">
          shop
          <span>
            <FaAngleRight />
          </span>
        </a>
      </div>

      <div className="audio-products">
        <img
          className="audio-products-picture audio-products-picture-headphone"
          src="/images/earphone-desktop.png"
          alt="headphones"
        />

        <h4 className="audio-products-h4">earphones</h4>
        <a href="earphones.html" className="audio-products-h4-link">
          shop
          <span>
            <FaAngleRight />
          </span>
        </a>
      </div>
    </section>
  );
};

export default ProductsCard;
