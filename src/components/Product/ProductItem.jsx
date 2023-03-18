import { Link } from "react-router-dom";

const ProductItem = ({ data }) => {
  return (
    <div className="products" key={data.id}>
      <div
        className={`products-description ${
          data.id % 2 === 0 ? "products-left" : ""
        }`}
      >
        <h2 className={`hero-h2 new-product ${data.new ? "show" : "hide"}`}>
          New product
        </h2>
        <h3 className="product-h4 headphone-products-h3">{data.name}</h3>
        <p className="company-info-h2-subtitle product-description-subtitle">
          {data.description}
        </p>
        <Link to={data.slug} className="hero-see-product see-product">
          see product
        </Link>
      </div>
      <div
        className={`products-img-container ${
          data.id % 2 === 0 ? "products-right" : ""
        }`}
      >
        <img
          className="products-img mobile-img"
          src={data.image.mobile}
          alt="black headphone"
        />
        <img
          className="products-img tablet-img"
          src={data.image.tablet}
          alt="black headphone"
        />
        <img
          className="products-img desktop-img"
          src={data.image.desktop}
          alt="black headphone"
        />
      </div>
    </div>
  );
};

export default ProductItem;
