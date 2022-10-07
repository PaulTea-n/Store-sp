import { useField } from "formik";
import React from "react";
import styles from "./CustomInput.module.scss";

const CustomInput = (props) => {
  const [field, meta] = useField(props);
  const { type, placeholder } = props;

  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        {...field}
        className={styles.input}
      />
      {!!meta.error && meta.touched && (
        <span className={styles.error}>{meta.error}</span>
      )}
    </>
  );
};

export default CustomInput;
