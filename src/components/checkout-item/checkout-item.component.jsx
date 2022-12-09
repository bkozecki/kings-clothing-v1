import { useContext } from "react";
import { CartContext } from "../context/CartContex";
import "./checkout-item.styles.scss";

const CheckoutItem = ({ cartItem }) => {
  const cartCtx = useContext(CartContext);
  const { clearItem, addItemToCart, removeItemFromCart } = cartCtx;
  const { name, imageUrl, price, quantity } = cartItem;

  const removeItemHandler = () => clearItem(cartItem);
  const addItemToCartHandler = () => addItemToCart(cartItem);
  const removeCartItemHandler = () => removeItemFromCart(cartItem);

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={removeCartItemHandler}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={addItemToCartHandler}>
          &#10095;
        </div>
      </span>
      <span className="price">${price}</span>
      <div className="remove-button" onClick={removeItemHandler}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
