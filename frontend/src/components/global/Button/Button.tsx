import React from "react";

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  style?: React.CSSProperties;
}

const styles: { button: React.CSSProperties } = {
  button: {
    color: "#fff",
    padding: "10px 20px",
    borderRadius: ".25em",
    cursor: "pointer",
    border: "0",
    background: "initial",
    backgroundColor: "#9b8600",
    fontSize: "1em",
  },
};

const Button: React.FC<ButtonProps> = ({ onClick, children }) => {
  return (
    <button style={styles.button} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
