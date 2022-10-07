import React from "react";
import styles from "./Button.module.scss";
import PropTypes from "prop-types";

const Button = (props) => {
  const { text, type, handleClick, backgroundColor } = props;
  return (
    <button
      className={styles.btn}
      onClick={handleClick}
      type={type}
      style={{ backgroundColor: backgroundColor }}
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  handleClick: PropTypes.func,
  backgroundColor: PropTypes.string,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
};

Button.defaultProps = {
  text: "Add to cart",
  backgroundColor: "red",
  type: "button",
  handleClick: () => {},
};

export default Button;
