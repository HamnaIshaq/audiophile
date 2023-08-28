import { Link } from "react-router-dom";

const Product = ({ name, description, slug }) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>{description}</p>
      <Link to={`${slug}`}>see product</Link>
    </div>
  );
};

export default Product;
