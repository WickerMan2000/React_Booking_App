import React from "react";
import styles from "./Warning.module.css";

const Warning = () => {
  return (
    <div className={styles.warning}>
      <p>Sorry. The destination you are looking for was not found!</p>
    </div>
  );
};

export default Warning;
