import { useContext } from "react";
import { CartContext } from "../context/CartContex";
import "./Product.style.scss";

import Button from "../button/Button.component";

const ProductCard = ({ product }) => {
  const { addItemToCart } = useContext(CartContext);
  const { name, price, imageUrl } = product;

  const addProductToCartHandler = () => addItemToCart(product);
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={name} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>
      <Button buttonType="invert" onClick={addProductToCartHandler}>
        Add to cart
      </Button>
    </div>
  );
};

export default ProductCard;
