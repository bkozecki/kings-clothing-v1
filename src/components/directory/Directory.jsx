import React from "react";
import DirectoryItem from "../directory-item/DirectoryItem.component";

import "./Directory.style.scss";

const Directory = (props) => {
  return (
    <div className="directory-container">
      {props.data.map((category) => (
        <DirectoryItem key={category.id} data={category} />
      ))}
    </div>
  );
};

export default Directory;
