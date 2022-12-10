import { createContext, useEffect, useState } from "react";
import { getCategoriesAndDocuments } from "../../utils/firebase.utils.js";

export const CategoriesContext = createContext({
  categoriesMap: {},
});

export const CategoriesProvider = (props) => {
  const [categoriesMap, setCategoriesMap] = useState({});

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments("categories");
      setCategoriesMap(categoryMap);
      console.log(categoryMap);
    };

    getCategoriesMap();
  }, []);

  const value = { categoriesMap };

  console.log("this value" + value);
  // useEffect(() => {
  //   addCollectionAndDocuments("categories", SHOP_DATA);
  //   // our data under name in db
  // }, []);
  return (
    <CategoriesContext.Provider value={value}>
      {props.children}
    </CategoriesContext.Provider>
  );
};

export default CategoriesProvider;
