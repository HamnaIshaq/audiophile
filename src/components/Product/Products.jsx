import { Link, useParams } from "react-router-dom";
import { data } from "../../data/data";
import ProductItem from "./ProductItem";

const Products = () => {
  const { productCategory } = useParams();

  return (
    <section className="products-container container">
      {data.map((data) => {
        if (data.category === productCategory) {
          return <ProductItem key={data.id} data={data} />;
        }
      })}
    </section>
  );
};

export default Products;
