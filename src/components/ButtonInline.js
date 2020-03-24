import React from "react";

const ButtonInline = ({ onClick, className, type = "button", children }) => {
  return (
    <button
      type={type}
      className={className}
      onClick={onClick}
      style={{ backgroundColor: "red", padding: "6px 3px", color: "white" }}
    >
      {children}
    </button>
  );
};

export default ButtonInline;
