import "./cart-icon.style.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { useContext } from "react";
import { CartContext } from "../context/CartContex";

const CartIcon = (props) => {
  const { cartItems } = useContext(CartContext);

  const amount = cartItems.map((item) => item.quantity);
  const totalAmount = amount.reduce((acc, curr) => acc + curr, 0);

  return (
    <div className="cart-icon-container" onClick={props.onClick}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{totalAmount}</span>
    </div>
  );
};

export default CartIcon;
