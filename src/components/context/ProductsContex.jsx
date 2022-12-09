import { createContext, useContext, useEffect, useState } from "react";
import SHOP_DATA from "../../shop-data/shopData.json";

export const ProductContext = createContext({
  products: [],
});

export const ProductProvider = (props) => {
  const [products, setProducts] = useState(SHOP_DATA);
  const value = { products };
  return (
    <ProductContext.Provider value={value}>
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
