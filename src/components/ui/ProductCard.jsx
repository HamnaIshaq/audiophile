import { productCategories } from "../../data/data";
import Card from "./Card";

const ProductCard = () => {
  return (
    <section>
      {productCategories.map((category) => {
        return (
          <Card
            key={category.id}
            image={category.image}
            name={category.name}
            slug={category.slug}
          />
        );
      })}
    </section>
  );
};

export default ProductCard;
