import { useParams } from "react-router-dom";

import PrimaryHeader from "../components/ui/PrimaryHeader";
import Product from "../components/Product";
import { getCategoryProducts } from "../utils/products";

const Products = () => {
  const { slug } = useParams();
  const products = getCategoryProducts(slug);

  return (
    <>
      <PrimaryHeader text={products[0].category.toUpperCase()} />
      {products.map((product) => {
        return (
          <Product
            key={product.id}
            name={product.name}
            description={product.description}
            slug={product.slug}
          />
        );
      })}
    </>
  );
};

export default Products;
