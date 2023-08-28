import { Link } from "react-router-dom";

const Card = ({ image, name, slug }) => {
  return (
    <div className="card">
      <div className="card-img-container">
        <img className="card-img" src={image.mobile} alt={name} />
      </div>
      <span className="card-title">{name}</span>
      <Link className="card-link" to={`category/${slug}`}>
        SHOP
      </Link>
    </div>
  );
};

export default Card;
