import { useContext } from "react";
import { CartContext } from "../context/CartContex";
import CheckoutItem from "../checkout-item/checkout-item.component";

import "./checkout.styles.scss";

const Checkout = (props) => {
  const { cartItems, total } = useContext(CartContext);

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      <div>
        {cartItems.map((item) => (
          <CheckoutItem key={item.id} cartItem={item} />
        ))}
        <span className="total">Total: ${total}</span>
      </div>
    </div>
  );
};

export default Checkout;
