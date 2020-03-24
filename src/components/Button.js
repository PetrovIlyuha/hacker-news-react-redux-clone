import React from "react";

const Button = ({ onClick, className, type = "button", children }) => {
  return (
    <button type={type} className={className} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
