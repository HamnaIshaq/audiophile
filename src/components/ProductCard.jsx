import { productCategories } from "../data/data";
import { data } from "../data/data";

const ProductCard = () => {
  const onClickProductCategory = (category) => {
    console.log(category);
    const productsOfSelectedCategory = data.filter(
      (products) => products.category === category
    );
    console.log(productsOfSelectedCategory);
  };

  return (
    <section>
      {/*<a href="#">
        <img src="" alt="img" />
      </a>*/}
      {productCategories.map((category) => {
        return (
          <div
            key={category.id}
            onClick={() => onClickProductCategory(category.name)}
          >
            {category.name}
          </div>
        );
      })}
    </section>
  );
};

export default ProductCard;
