import { data } from "../data/data";

const getCategoryProducts = (category) => {
  return data.filter((product) => product.category === category);
};

export { getCategoryProducts };
