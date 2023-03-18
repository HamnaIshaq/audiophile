// useParams() to extract dynamic :id from url
import { useParams } from "react-router-dom";
const Product = () => {
  const { productsId } = useParams();
  return <div>{productsId}</div>;
};

export default Product;
