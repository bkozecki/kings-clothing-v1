import React from "react";
import ".SignModal.style.scss";

const SignModal = ({ text, result }) => {
  const style = {
    backgroundColor: result === "succes" ? "" : "",
  };
  return (
    <div className="modal-container">
      <p className={style}>{text}</p>
    </div>
  );
};

export default SignModal;
