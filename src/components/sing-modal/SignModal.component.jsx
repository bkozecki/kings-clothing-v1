import React from "react";
import "./SignModal.styles.scss";

const SignModal = ({ data }) => {
  const { text, result } = data;
  console.log(text, result);
  const style = {
    backgroundColor: result === "succes" ? "green" : "red",
  };
  return (
    <div style={style} className="modal-container">
      <p>{text}</p>
    </div>
  );
};

export default SignModal;
