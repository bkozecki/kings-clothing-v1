import { createContext, useState, useEffect } from "react";

const addCartItem = (cartItems, cartProduct) => {
  // find if item already in cart
  // if found, quantity++
  const existingItem = cartItems.find((item) => item.id === cartProduct.id);

  if (existingItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartProduct.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  // create new array with new item/updated item

  return [...cartItems, { ...cartProduct, quantity: 1 }];
};

const removeCartItem = (cartItems, cartProduct) => {
  const existingItem = cartItems.find((item) => item.id === cartProduct.id);

  if (existingItem.quantity === 1) {
    return clearItemFromCart(cartItems, existingItem);
  }

  if (existingItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartProduct.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
  }
  // create new array with new item/updated item

  return [...cartItems, { ...cartProduct, quantity: 1 }];
};

const clearItemFromCart = (cartItems, cartProduct) => {
  return cartItems.filter((item) => item.id !== cartProduct.id);
};

export const CartContext = createContext({
  cartItems: [],
  addItemToCart: (product) => {},
  removeCartItem: () => {},
  clearItem: (item) => {},
  total: 0,
});

const CartProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const newTotal = cartItems.reduce(
      (total, cartItem) => (total += cartItem.quantity * cartItem.price),
      0
    );
    setTotal(newTotal);
  }, [cartItems]);
  const addItemToCart = (product) => {
    setCartItems(addCartItem(cartItems, product));
  };
  const removeItemFromCart = (product) => {
    setCartItems(removeCartItem(cartItems, product));
  };
  const clearItem = (product) => {
    setCartItems(clearItemFromCart(cartItems, product));
  };
  const value = {
    cartItems,
    addItemToCart,
    removeItemFromCart,
    clearItem,
    total,
  };
  return (
    <CartContext.Provider value={value}>{props.children}</CartContext.Provider>
  );
};

export default CartProvider;
