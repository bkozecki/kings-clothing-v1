import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import "./cart-dropdown.style.scss";
import Button from "../button/Button.component";
import CartItem from "../cart-item/cart-item.component";
import { CartContext } from "../context/CartContex";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);

  const navigate = useNavigate();

  const goToCheckOut = () => navigate("checkout");

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} CartItem={cartItem} />
          ))
        ) : (
          <p>Your cart is empty</p>
        )}
      </div>
      <Button onClick={goToCheckOut}>Checkout</Button>
    </div>
  );
};

export default CartDropdown;
