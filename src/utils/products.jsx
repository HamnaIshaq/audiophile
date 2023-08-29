import { data } from "../data/data";

const getCategoryProducts = (category) => {
  return data.filter((product) => product.category === category);
};

const getSelectedProductDetails = (selectedProduct) => {
  return data.filter((product) => product.slug === selectedProduct);
};

export { getCategoryProducts, getSelectedProductDetails };
