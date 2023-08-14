import React from "react";

const Button = ({ icon, children }) => {
  return (
    <button className="icon-button">
      <i className={`icon ${icon}`}></i>
      {children}
    </button>
  );
};

export default Button;
