import React from "react";

const LinkButton = ({ href, target, variant, children }) => {
  const buttonStyles = {
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
    textaAlign: "center",
    fontWeight: "bold",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
    textDecoration: "none",
    display: "inline-block",
    transition: "background-color 0.3s",
  };

  const getButtonColor = () => {
    switch (variant) {
      case "primary":
        return {
          ...buttonStyles,
          backgroundColor: "#157FB4",
          color: "#ffffff",
        };
      case "secondary":
        return {
          ...buttonStyles,
          backgroundColor: "#FF48A4",
          color: "#ffffff",
        };
      case "black":
        return {
          ...buttonStyles,
          backgroundColor: "#000",
          color: "#ffffff",
        };
      case "transparent":
        return {
          ...buttonStyles,
          backgroundColor: "#FFF",
          color: "#157FB4",
        };
        case "transparentblack":
        return {
          ...buttonStyles,
          backgroundColor: "#FFF",
          color: "#000",
        };
      default:
        return buttonStyles;
    }
  };

  return (
    <a href={href} target={target} style={getButtonColor()}>
      {children}
    </a>
  );
};

export default LinkButton;
