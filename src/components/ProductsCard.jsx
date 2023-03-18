import { Link } from "react-router-dom";
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
        <Link
          to="/headphones"
          className="audio-products-h4-link audio-products-h4-link"
        >
          shop
          <FaAngleRight />
        </Link>
      </div>
      <div className="audio-products audio-products-container">
        <img
          className="audio-products-picture audio-products-picture-headphone"
          src="/images/speaker-desktop.png"
          alt="speakers"
        />
        <h4 className="audio-products-h4">speakers</h4>
        <Link to="/speakers" className="audio-products-h4-link">
          shop
          <span>
            <FaAngleRight />
          </span>
        </Link>
      </div>

      <div className="audio-products">
        <img
          className="audio-products-picture audio-products-picture-headphone"
          src="/images/earphone-desktop.png"
          alt="headphones"
        />

        <h4 className="audio-products-h4">earphones</h4>
        <Link to="/earphones" className="audio-products-h4-link">
          shop
          <span>
            <FaAngleRight />
          </span>
        </Link>
      </div>
    </section>
  );
};

export default ProductsCard;
