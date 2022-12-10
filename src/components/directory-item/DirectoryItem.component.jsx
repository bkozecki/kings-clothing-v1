import React from "react";
import { Link } from "react-router-dom";

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
        <Link to={"shop/" + title} className="directory-body-link">
          <h2>{title}</h2>
          <p>Shop Now</p>
        </Link>
      </div>
    </div>
  );
};

export default DirectoryItem;
