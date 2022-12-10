import React from "react";

import "./DirectoryItem.style.scss";

const DirectoryItem = (props) => {
  const { title, imageUrl } = props.data;
  return (
    <div className="directory-item-container">
      <div
        className="background-image"
        style={{
          backgroundImage: `url("${imageUrl}")`,
        }}
      ></div>
      <div className="directory-body">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default DirectoryItem;
