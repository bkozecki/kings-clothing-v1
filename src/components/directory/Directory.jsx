import React from "react";
import CategoryItem from "../category-item/CategoryItem.component";

import "./Directory.style.scss";

const Directory = (props) => {
  return (
    <div className="directory-container">
      {props.data.map((category) => (
        <CategoryItem key={category.id} data={category} />
      ))}
    </div>
  );
};

export default Directory;
