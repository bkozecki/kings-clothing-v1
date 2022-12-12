import React from "react";
import { Link } from "react-router-dom";

import "./DirectoryItem.style.scss";

const DirectoryItem = (props) => {
  const { title, imageUrl } = props.data;
  return (
    <Link to={"shop/" + title} className=" directory-item-container">
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
    </Link>
  );
};

export default DirectoryItem;
