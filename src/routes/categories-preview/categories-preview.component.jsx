import { useContext, Fragment } from "react";
import { CategoriesContext } from "../../components/context/CategoriesContext";
import CategoryPreview from "../../components/category-preview/CategoryPreview.component";

import React from "react";

const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);

  return (
    <>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];

        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </>
  );
};

export default CategoriesPreview;
