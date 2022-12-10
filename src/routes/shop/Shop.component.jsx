import { useContext, Fragment } from "react";
import { CategoriesContext } from "../../components/context/CategoriesContext";
import ProductCard from "../../components/product-cart/Product.component";
import CategoryPreview from "../../component/category-preview/CategoryPrewiev.component";

import "./Shop.style.scss";

import React from "react";

const Shop = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  // console.log(categoriesMap);

  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title) => (
        <Fragment key={title}>
          <h2>{title}</h2>
          <div className="products-container">
            {categoriesMap[title].map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </Fragment>
      ))}
    </Fragment>
  );
};

export default Shop;
