import React from "react";
import styles from "./SubForm.module.css";

const SubForm = ({
  fieldName,
  touchInput,
  inputValidation,
  type,
  id,
  value,
  changeHandler,
  blurHandler,
  warningMessage,
  isItAnEmail = false,
}) => {
  return (
    <div>
      <label htmlFor="name">{fieldName}</label>
      <input
        className={touchInput && !inputValidation && styles.invalidInput}
        type={type}
        id={id}
        value={value}
        onChange={changeHandler}
        onBlur={blurHandler}
      />
      {touchInput && !inputValidation && (
        <p className={styles.warning}>{warningMessage}</p>
      )}
      {touchInput && inputValidation && isItAnEmail && (
        <p className={styles.warning}>This is not a correct email form!</p>
      )}
    </div>
  );
};

export default SubForm;
