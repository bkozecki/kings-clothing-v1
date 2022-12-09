import { useContext } from "react";
import { ProductContext } from "../../components/context/ProductsContex";
import ProductCard from "../../components/product-cart/Product.component";

import "./Shop.style.scss";

import React from "react";

const Shop = () => {
  const { products } = useContext(ProductContext);

  return (
    <div className="products-container">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Shop;
