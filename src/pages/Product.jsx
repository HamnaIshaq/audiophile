import { useParams } from "react-router-dom";
import Heading from "../components/Product/Heading";
import ProductsCard from "../components/ProductsCard";
import Products from "../components/Product/Products";

const Product = () => {
  const { productCategory } = useParams();
  console.log(useParams());
  return (
    <div>
      <Heading heading={productCategory} />
      <Products />
      <ProductsCard />
    </div>
  );
};

export default Product;
