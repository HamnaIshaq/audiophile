import { useState } from "react";
import { useParams } from "react-router-dom";

import { getSelectedProductDetails } from "../../utils/products";

const ProductAbout = () => {
  const [amount, setAmount] = useState(1);
  const { productSlug } = useParams();

  const [productDetails] = getSelectedProductDetails(productSlug);

  const onClickDecrementBtn = () => {
    setAmount(amount - 1);
  };

  const onClickIncrementBtn = () => {
    setAmount(amount + 1);
  };

  return (
    <div>
      <h2>{productDetails.name}</h2>
      <p>{productDetails.description}</p>
      <p>${productDetails.price}</p>
      <div>
        <button
          type="button"
          className="btn-decrement"
          disabled={amount === 1 ? true : false}
          onClick={onClickDecrementBtn}
        >
          -
        </button>
        <span data-testid="total amount of items to buy">{amount}</span>
        <button
          type="button"
          className="btn-increment"
          onClick={onClickIncrementBtn}
        >
          +
        </button>
      </div>
      <div>
        <button type="button">Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductAbout;
