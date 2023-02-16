import React from "react";
import styles from "./Button.module.css";

const Button = ({ children, className,onClick, ...attrs }) => {

  return (
    <>
      <button
        className={`${className} ${styles.btn}`}
        onClick={onClick}
        {...attrs}
      >
        {children}
      </button>
    </>
  );
};

Button.defaultProps = {
  children: "Default Button",
  onClick: () => {},
  className: "styles.btn",
};
export default Button;
